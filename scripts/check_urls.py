"""
Copyright 2022 Objectiv B.V.
"""
import datetime
import sys
import argparse
import requests
import xml.etree.ElementTree as ElementTree
from typing import List, Dict, Iterator
import glob
import urllib.parse
import re
from blessings import Terminal  # type: ignore
from subprocess import check_output

# Basic configuration
FQDN = 'https://objectiv.io'  # domain to get sitemaps from
FQDN_PATHS = ['/', '/docs/']  # list of paths on domain to get sitemap from
SITEMAP = 'sitemap.xml'  # name of sitemap file
EXTENSIONS_TO_SCAN = ['md', 'html', 'rst', 'ipynb', 'ts']  # file extensions to scan for URLs
ABS_URL_EXTENSIONS_TO_SCAN = ['md', 'tsx', 'js', 'html']  # file extensions to scan for non-absolute URLs
# the files to scan (in the objectiv-analytics repo) that contain all URLs used by the tracker validation
VALIDATION_FILES_TO_SCAN = [] # DISABLE UNTIL THIS IS MERGED ['../objectiv-analytics/tracker/core/developer-tools/src/ContextErrorMessages.ts']


def check_non_absolute_urls(path: str, extensions: List[str], urls: List[str]) -> List[List[str]]:
    """Find any occurrence of non-absolute URLs in the specified path and file types, e.g. in a repo
    :param path: The path to scan
    :param extensions: The file extensions to scan, e.g. ['md', 'js']
    :param urls: The URL to scan for

    :return: List of URLs found and in which file, e.g. [['/docs/hello', '/src/pages/index.tsx']]
    """

    non_abs_urls_found_in_files = []
    for filename in glob.glob(path, recursive=True):
        if has_extension(filename, extensions):
            with open(filename) as f:
                contents = f.read()
                for url in urls:
                    # find all occurrences of the URL and determine if it's non-absolute
                    matches = re.findall(f'(.*?)\/{url}', contents)

                    for match in matches:
                        before = match.strip()
                        # non-absolute if: doesn't contain `useBaseUrl()`, "https://" or Tracking code
                        if (before.find("useBaseUrl") == -1 and before.find("https://") == -1
                                and before.find("http://") == -1 and before.find("<Tracked") == -1):
                            non_abs_urls_found_in_files.append([before + url, filename])

    return non_abs_urls_found_in_files


def check_validation_urls_from_files(files: List[str], prod_urls: List[str]) -> List[List[str]]:
    """Check if there are any URLs in the specified files that are not used on production
    :param path: The files to scan
    :param prod_urls: The URLs used in production

    :return: List of URLs not found on production and in which file they're used, 
        e.g. [['https://test.com', '/source/validation.ts']]
    """

    # find all the URLs in `files`, and see if they're present in `prod_urls`
    urls_found_in_files = []
    for file in files:
        with open(file) as f:
            contents = f.read()
            matches = re.findall(f"(?P<url>https?://[^\s]+)", contents)
            for match in matches:
                # remove any characters at the end up until the last occurrence of a dot
                url = match[:match.rfind(".")]
                urls_found_in_files.append([url, file])

    urls_not_in_prod = []
    # now check if each of the found URLs is present in the production URLs
    for entry in urls_found_in_files:
        url = make_canonical(entry[0])
        if url not in prod_urls:
            urls_not_in_prod.append(entry)

    return urls_not_in_prod


def has_extension(filename: str, extensions: List[str]) -> bool:
    """Check whether a file has one of the specified extensions
    :param filename: The file to check
    :param extensions: The file extensions it should have, e.g. ['.md', .ipynb']

    :return: True if the extension of the filename is in the list of specified allowed extensions
    """
    extension = filename.split('.')[-1]
    return extension in extensions


def check_urls_in_file(filename: str, urls: List[str]) -> List[List[str]]:
    """Get any occurrence of the specified URLs in the specified file
    :param filename: The file to scan
    :param urls: The URLs to find in the file

    :return: List of URLs found and in which file, e.g. [['https://test.com', '/source/hello.md']]
    """
    found = []
    with open(filename) as f:
        contents = f.read()

        for url in urls:
            if contents.find(url) != -1:
                found.append([url, filename])
    return found


def check_urls_from_files(path: str, extensions: List[str], urls: List[str]) -> List[List[str]]:
    """Find any occurrence of the URLs in the specified path and file types, e.g. in a repo
    :param path: The path to scan
    :param extensions: The file extensions to scan, e.g. ['md', 'ipynb']
    :param urls: The URLs to find in the files

    :return: List of URLs found and in which file, e.g. [['https://test.com', '/source/hello.md']]
    """

    urls_found_in_files = []
    for fn in glob.glob(path, recursive=True):
        if has_extension(fn, extensions):
            urls_found_in_files += check_urls_in_file(fn, urls)

    return urls_found_in_files


def compare_urls(source: List[str], target: List[str]) -> List[str]:
    """Get the URLs not found in source vs target
    :param source: The source to compare
    :param target: The target to compare to

    :return: List of URLs missing in source, compared to target
    """
    return [u for u in source if u not in target]


def get_base_url(url: str) -> str:
    """Get the base URL from a URL (e.g. 'https://objectiv.io' from 'https://objectiv.io/about')
    :param url: The URL to get the base from

    :return: the base URL
    """

    parsed_url = urllib.parse.urlparse(url)
    return f'{parsed_url.scheme}://{parsed_url.netloc}'


def make_canonical(url: str, base_url: str = None) -> str:
    """Canonicalize a URL
    :param url: The URL to make canonical
    :param base_url: The base URL (e.g. 'https://staging.objectiv.io') to replace

    :return: a canonicalized URL in which the base URL is stripped
    """

    if not base_url:
        base_url = get_base_url(url)
    return url.replace(base_url, '')


def get_urls_from_sitemap(sitemap: str) -> Iterator[str]:
    """Get all the URLs from a sitemap (in text)
    :param sitemap: The sitemap (in text) containing the URLs to extract

    :return: A list of URLs fetched from the sitemap
    """
    doc = ElementTree.fromstring(sitemap)
    for url in doc.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc'):
        yield str(url.text)


def get_urls_from_docker_image(env: str, path: str, image: str, tag: str = 'latest') -> Iterator[str]:
    """Get all the URLs from a file at the specified Docker image
    :param env: The image environment, e.g. 'docker' or 'testing'
    :param path: The path to the sitemap in the image (without the filename of the sitemap itself)
    :param image: The image name
    :param tag: The tag of the image

    :return: A list of URLs fetched from the sitemap
    """
    sitemap_path = f'/services{path}build-{env}/{SITEMAP}'
    print(f'Fetching URLs from sitemap in image {image}:{tag}{sitemap_path}')
    sitemap = check_output(['docker', 'run', '--rm', f'{image}:{tag}', f'cat',  f'{sitemap_path}'])

    return get_urls_from_sitemap(sitemap.decode('utf-8'))


def get_urls_from_url(url: str) -> Iterator[str]:
    """Get all the URLs from a file at the specified URL (i.e. a sitemap)
    :param url: The URL to the file containing the URLs to extract

    :return: A list of URLs fetched from the file at the specified URL
    """
    print(f'Fetching URLs from sitemap at {url}')
    r = requests.get(url)
    return get_urls_from_sitemap(r.text)


def main() -> int:
    """
    Check URLs removed & added in a docker image against what's used:
    * On production (website/docs sitemaps)
    * In local repositories (objectiv.io and objectiv-analytics)
    * URLs that are used externally
    * Validation in the Tracker
    
    Also checks usage of non-absolute URLs (e.g. /docs instead of https://objectiv.io/docs), as those can't 
    be followed by our broken-link-checker.
    """

    parser = argparse.ArgumentParser()
    parser.add_argument("--environment", default='production', 
                        help="the image's environment, e.g. 'testing'")
    parser.add_argument("--docker-image", default='objectiv/website-deploy', 
                        help="the docker image to scan")
    parser.add_argument("--tag", default=datetime.datetime.now().strftime('%Y%m%d'), 
                        help="the docker image tag")
    args = parser.parse_args()

    term = Terminal()
    exitcode = 0

    # first get the URLs from the production domain's sitemap
    prod_urls: List[str] = []
    for path in FQDN_PATHS:
        prod_urls += get_urls_from_url(f'{FQDN}{path}{SITEMAP}')
    prod_urls = [make_canonical(u, FQDN) for u in prod_urls]

    # second, get the URLs from the image's sitemap
    docker_urls: List[str] = []
    env = args.environment
    image = args.docker_image
    tag = args.tag
    for path in FQDN_PATHS:
        docker_urls += get_urls_from_docker_image(env, path=path, image=image, tag=tag)
    docker_urls = [make_canonical(u) for u in docker_urls]

    # third, compare the retrieved URLs from the docker image with the ones on production, and vice versa
    removed_urls = compare_urls(prod_urls, docker_urls)  # missing URLs prod vs image (i.e. will break)
    added_urls = compare_urls(docker_urls, prod_urls)  # missing URLs image vs prod (i.e. are new)

    if removed_urls:
        # these are missing URLs, i.e. they exist on prod, but not in the docker image
        for url in removed_urls:
            print(term.bold_red(f'Removed URL compared to production sitemap: ({url})'))
        exitcode += 1

    if added_urls:
        # these are new URLs, i.e. they exist in the image, but not yet on production
        for url in added_urls:
            print(term.yellow(f'New URL compared to production sitemap: {url}'))
        exitcode += 1

    # fourth, check all removed+added URLs against the objectiv-analytics repository
    urls_to_check = removed_urls + added_urls
    urls_in_use = check_urls_from_files('**', EXTENSIONS_TO_SCAN, urls_to_check)
    urls_in_use += check_urls_from_files('../objectiv-analytics/**', EXTENSIONS_TO_SCAN, urls_to_check)

    if urls_in_use:
        for hit in urls_in_use:
            url = hit[0]
            file = hit[1]
            print(term.blue(f'{file} uses URL: {url}'))
        exitcode += 1

    # fifth, check _all_ URLs in the sitemaps against the ones used in tracker validation
    validation_urls_not_found = check_validation_urls_from_files(VALIDATION_FILES_TO_SCAN, prod_urls)
    if validation_urls_not_found:
        for hit in validation_urls_not_found:
            url = hit[0]
            file = hit[1]
            print(term.bold_red(f'Validation file {file} uses a URL not found on production: {url}'))
        exitcode += 1

    # finally, check if there are any non-absolute URLs to /docs in the objectiv.io repo
    non_abs_urls = check_non_absolute_urls('./src/pages/**', ABS_URL_EXTENSIONS_TO_SCAN, ["docs/"])
    non_abs_urls += check_non_absolute_urls('./blog/**', ABS_URL_EXTENSIONS_TO_SCAN, ["docs/"])

    if non_abs_urls:
        for hit in non_abs_urls:
            url = hit[0]
            file = hit[1]
            print(term.bold_red(f'{file} uses non-absolute URL: {url}'))
        exitcode += 1

    if(exitcode == 0):
        print(term.green(f'No URL issues found'))
    
    return exitcode


if __name__ == "__main__":
    sys.exit(main())
