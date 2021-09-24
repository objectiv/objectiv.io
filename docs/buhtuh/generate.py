import glob
from os import path, makedirs

buhtuh_root = '../../src/generated/buhtuh/'



for url in glob.glob(f"{buhtuh_root}/**/*.html", recursive=True):

    target_path = url.replace(buhtuh_root, '').replace('.html', '.mdx')
    target_dir = path.dirname(target_path)
    
    # let's count some slashes here
    depth = target_path.count('/')
    print(f'got {depth} for {target_dir} -> {target_path}')
    suffix = '../' * depth
    real_url = f'{suffix}{url}'
    
    print(f'translated {url} to {real_url}')
    if target_dir and not path.isdir(target_dir):
        print(f'Creating dirs: {target_dir}')
        makedirs(target_dir)
        


    title = path.basename(url).replace('.html', '')
    mdx = f"""
---
title: {title}
---


import SphinxPage from '@site/src/components/sphinx-page'

<SphinxPage url="{real_url}" />

"""
    with open(target_path, 'w') as target_handle:
        target_handle.write(mdx)
