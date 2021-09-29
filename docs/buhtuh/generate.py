
import glob
from os import path, makedirs

buhtuh_root = '../../static/buhtuh/'



for url in glob.glob(f"{buhtuh_root}/**/*.html", recursive=True):
    # this is the url to the original html fragment
    # it's an absolute url, docusaurus will take care of the rest
    real_url = f'/buhtuh/{url.replace(buhtuh_root, "")}'


    # set target path to generated .mdx file
    target_path = url.replace(buhtuh_root, '').replace('.html', '.mdx')
    # dir where .mdx will be stored
    target_dir = path.dirname(target_path)

    # create dirs if they're not there
    if target_dir and not path.isdir(target_dir):
        print(f'Creating dirs: {target_dir}')
        makedirs(target_dir)

    # little magic around the index:
    # make sure it comes first, and change the name to introduction
    title = path.basename(url).replace('.html', '') 
    if title == 'index':
        sidebar_label = 'Introduction'
        sidebar_position = 1
    else:
        sidebar_label = title
        sidebar_position = 99
    
    # template for the mdx file
    # please leave the whitespace as is (it's part of the markdown)
    mdx = \
f"""---
id: {title}
hide_title: true
sidebar_position: {sidebar_position}
sidebar_label: {sidebar_label}
---


import SphinxPages from '@site/src/components/sphinx-page'
import useBaseUrl from '@docusaurus/useBaseUrl'


<SphinxPages url={{useBaseUrl('{real_url}')}} />

"""
    with open(target_path, 'w') as target_handle:
        target_handle.write(mdx)
