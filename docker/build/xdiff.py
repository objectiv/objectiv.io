#!/usr/bin/python3
# xdiff.py -- compare XML files
# Andreas Nolda 2022-02-07
# https://hg.sr.ht/~nolda/xdiff

from multiprocessing import parent_process
import sys
import argparse
import re
from blessings import Terminal
from lxml import etree
from difflib import unified_diff
import csv

version = 2.3

parser = argparse.ArgumentParser()
parser.add_argument("file1", help="XML file 1")
parser.add_argument("file2", help="XML file 2")
parser.add_argument("-a", "--all-context", action="store_true",
                    help="output all context lines")
parser.add_argument("-c", "--comments", action="store_true",
                    help="preserve comments in output")
parser.add_argument("-C", "--force-color", action="store_true",
                    help="preserve color and formatting when piping output")
parser.add_argument("-i", "--indent", action="store_true",
                    help="indent XML trees")
parser.add_argument("-n", "--no-context", action="store_true",
                    help="output no context lines")
parser.add_argument("-N", "--no-meta", action="store_true",
                    help="suppress metadata (files header and hunk numbers)")
parser.add_argument("-p", "--pis", action="store_true",
                    help="preserve processing-instructions in output")
parser.add_argument("-q", "--quiet", action="store_true",
                    help="only return exit status")
parser.add_argument("-v", "--version", action="version",
                    version="{0} {1}".format(parser.prog, version))
parser.add_argument("-w", "--words", action="store_true",
                    help="compare words")
args = parser.parse_args()

term = Terminal(force_styling=args.force_color)

def parse_file(file):
    try:
        xml_parser = etree.XMLParser(remove_blank_text=True,
                                     remove_comments=not args.comments,
                                     remove_pis=not args.pis)
        tree = etree.parse(file, xml_parser)
        return tree
    except IOError:
        if not args.quiet:
            print(term.bold_red(file) + ": No such file", file=sys.stderr)
        sys.exit(2)
    except etree.XMLSyntaxError:
        if not args.quiet:
            print(term.bold_red(file) + ": File cannot be parsed", file=sys.stderr)
        sys.exit(2)

def canonicalize_tree(tree):
    # canonicalize attributes
    string = etree.tostring(tree, method="c14n").decode()
    # canonicalize whitespace
    string = re.sub("\s+", " ", string)
    # indent elements linewise
    string = etree.tostring(etree.XML(string),
                            encoding="utf-8",
                            pretty_print=True).decode()
    if not args.indent:
        # remove indentation
        string = re.sub("\n\s+", "\n", string)
    return string

def escape_spaces_in_string(string):
    return string.replace(" ", "\x00")

def unescape_spaces_in_string(string):
    return string.replace("\x00", " ")

def escape_spaces_in_match(match):
    match_string = match.group(0)
    string = escape_spaces_in_string(match_string)
    return string

def split_string_into_words(string):
    prefix = re.match("\s*", string).group(0)
    # escape whitespace in elements
    escaped_string = re.sub("<[^>]+>", escape_spaces_in_match, string)
    # unescape whitespace in elements after splitting string into words
    list = [unescape_spaces_in_string(item)
            for item in escaped_string.split()]
    if args.indent:
        # indent words by prefix
        list = [prefix + item
                for item in list]
    return list

def split_string_into_lines(string):
    # split string into lines
    list = string.splitlines(keepends=True)
    if args.words:
        # split lines into words
        list = [word + "\n"
                for word_list in [split_string_into_words(line)
                                  for line in list]
                for word in word_list]
    return list

def diff_strings(string1, string2, file1, file2):
    list1 = split_string_into_lines(string1)
    list2 = split_string_into_lines(string2)
    if args.no_context:
        context = 0
    elif args.all_context:
        context = max(len(list1), len(list2))
    else:
        context = 3
    diff = unified_diff(list1,
                        list2,
                        fromfile=file1,
                        tofile=file2,
                        n=context)
    return diff

def parse_diff(args):
    n = 0

    added_lines = []
    removed_lines = []

    try:
        tree1 = parse_file(args.file1)
        tree2 = parse_file(args.file2)
        string1 = canonicalize_tree(tree1)
        string2 = canonicalize_tree(tree2)
        diff = diff_strings(string1, string2, args.file1, args.file2)
        for line in diff:
            if line.startswith("@@"):
                n += 1
                # disregarding line numbers in string1 and string2 since
                # they may diverge from line numbers in file1 and file2
                # if not args.quiet and not args.no_meta:
                #     print(term.bold("@@ hunk #{0}:".format(n)))
            elif line.startswith("+++"):
                if not args.quiet and not args.no_meta:
                    # print(term.bold(line), end="")
                    added_lines.append([line])
            elif line.startswith("---"):
                if not args.quiet and not args.no_meta:
                    # print(term.bold(line), end="")
                    removed_lines.append([line])
            elif line.startswith("+"):
                if not args.quiet:
                    # print(term.green(line), end="")
                    added_lines.append([line])
            elif line.startswith("-"):
                if not args.quiet:
                    # print(term.red(line), end="")
                    removed_lines.append([line])
            # else:
            #     if not args.quiet:
            #         print(line, end="")
    except KeyboardInterrupt:
        sys.exit(130)
    # if n == 0:
    #     exit = 0
    # else:
    #     exit = 1
    
    parsed_diff = [added_lines, removed_lines]
    return parsed_diff

def extract_urls_from_diff(parsed_diff):
  extracted_urls = []
  for line in parsed_diff:
      for str in line:
          search = re.search("<loc>(.+?)</loc>", str)
          if (search):
              extracted_urls.append([search.group(1)])
      
  return extracted_urls

def write_urls_to_csv(urls, file='./tmp/urls.csv'):
    header = ['url']
    with open(file, 'w', encoding='UTF8', newline='') as f:
        writer = csv.writer(f)
        # write the header
        writer.writerow(header)
        # write multiple rows
        writer.writerows(urls)

    print("Written to CSV:", file)

def main():
    parsed_diff = parse_diff(args)
    print("Parsed diff: ", parsed_diff)

    # print and write added URLs
    if(len(parsed_diff[0]) > 0):
        print(term.red("Added URLs:"), end="\n")
        added_urls = extract_urls_from_diff(parsed_diff[0])
        for url in added_urls:
            for u in url:
                print(term.green("- "+u), end="\n")
        write_urls_to_csv(urls=added_urls, file='./tmp/added_urls.csv')

    # print and write removed URLs
    if(len(parsed_diff[1]) > 0):
        removed_urls = extract_urls_from_diff(parsed_diff[1])
        print(term.red("Removed URLs:"), end="\n")
        for url in removed_urls:
            for u in url:
                print(term.red("- "+u), end="\n")
        write_urls_to_csv(urls=removed_urls, file='./tmp/removed_urls.csv')
    
    return 1

if __name__ == "__main__":
    sys.exit(main())
