import datetime
import sys
import requests
import xml.etree.ElementTree as ElementTree
from typing import List, Dict
import glob
import urllib.parse
from blessings import Terminal
from subprocess import check_output

"""
To setup environment:
virtualenv check_sitemaps
source check_sitemaps/bin/activate
pip install lxml blessings requests urllib3
"""

# some basic configuration
FQDN = 'https://objectiv.io'
PATHS = ['/', '/docs/']
SITEMAP = 'sitemap.xml'
EXTENSIONS = ['md', 'html', 'rst']
DOCKER_IMAGE = 'objectiv/website-deploy'


def get_urls_from_sitemap(sitemap: str) -> List:
    doc = ElementTree.fromstring(sitemap)
    for url in doc.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc'):
        yield url.text


def get_urls_from_url(url: str) -> List:
    r = requests.get(url)
    return get_urls_from_sitemap(r.text)


def has_extension(filename: str, extensions: List[str]) -> bool:
    extension = filename.split('.')[-1]
    return extension in extensions


def get_urls_from_file(filename: str) -> List:
    with open(filename) as f:
        return get_urls_from_sitemap(f.read())


def get_urls_from_docker_image(env: str, path: str, image: str, tag: str = 'latest') -> List[str]:
    sitemap_path = f'/services{path}build-{env}/{SITEMAP}'
    sitemap = check_output(['docker', 'run', '--rm', f'{image}:{tag}', f'cat',  f'{sitemap_path}'])

    return get_urls_from_sitemap(sitemap.decode('utf-8'))


def check_urls_in_file(filename: str, urls: List[str]) -> List[str]:
    found = []
    with open(filename) as f:
        contents = f.read()

        for url in urls:
            if contents.find(url) != -1:
                found.append(url)
    return found


def check_urls_from_files(path: str, extensions: List[str], urls: List[str]) -> Dict[str,str]:
    return {fn: check_urls_in_file(fn, urls) for fn in glob.glob(path, recursive=True) if has_extension(fn, extensions)}


def make_canonical(url: str, base_url: str = None) -> str:
    if not base_url:
        base_url = get_base_url(url)
    return url.replace(base_url, '')


def get_base_url(url: str) -> str:
    parsed_url = urllib.parse.urlparse(url)
    return f'{parsed_url.scheme}://{parsed_url.netloc}'


def compare_urls(source: List[str], target: List[str]) -> List[str]:
    return [u for u in source if u not in target]


def main() -> int:
    term = Terminal()

    # first get urls from production
    prod_urls = []
    for path in PATHS:
        prod_urls += get_urls_from_url(f'{FQDN}{path}{SITEMAP}')
    prod_urls = [make_canonical(u, FQDN) for u in prod_urls]

    # get "docker" urls from local build
    docker_urls = []

    # get sitemap from file on disk
    # docker_urls += get_urls_from_file('docker-website-sitemap.xml')
    # docker_urls += get_urls_from_file('docker-docs-sitemap.xml')

    # fetch sitemap from running docker container:
    # for path in PATHS:
    #    docker_urls += get_urls_from_url(f'http://localhost:8080{path}{SITEMAP}')

    # get sitemap from deploy image
    # tag = datetime.datetime.now().strftime('%Y%m%d')
    tag = '20220401'
    env = 'docker'
    docker_urls += get_urls_from_docker_image(env, path='/', image=DOCKER_IMAGE, tag=tag)
    docker_urls += get_urls_from_docker_image(env, path='/docs/', image=DOCKER_IMAGE, tag=tag)

    docker_urls = [make_canonical(u) for u in docker_urls]

    missing_prod_urls = compare_urls(prod_urls, docker_urls)
    missing_docker_urls = compare_urls(docker_urls, prod_urls)

    exitcode = 0
    if missing_docker_urls:
        # these are "new" urls, not on prod yet
        for url in missing_docker_urls:
            print(term.bold_red(f'docker_url ({url}) not in prod_sitemaps'))
        exitcode += 1

    if missing_prod_urls:
        # these are missing, eg. they exist on prod, but not in docker
        for url in missing_prod_urls:
            print(term.yellow(f'prod_url ({url} has disappeared in docker_sitemaps'))
        exitcode += 1

    # check all suspicious urls against docs
    missing_docs_urls = check_urls_from_files('**', EXTENSIONS, missing_prod_urls + missing_docker_urls)

    if missing_docs_urls:
        for doc in missing_docs_urls:
            for url in missing_docs_urls[doc]:
                if url in missing_prod_urls:
                    source = f'docker/{env}'
                else:
                    source = 'prod'
                print(term.blue(f'{doc}: ({url}) missing in {source} is used'))
        exitcode += 1

    return exitcode


if __name__ == "__main__":
    sys.exit(main())
