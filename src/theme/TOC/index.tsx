/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import OriginalTOCHeadings from '@theme-original/TOC';
import React from 'react';
import clsx from 'clsx';
import useTOCHighlight from '@theme/hooks/useTOCHighlight';
import type {TOCProps, TOCHeadingsProps} from '@theme/TOC';
import styles from './styles.module.css';
import { trackElement, trackLink, trackClick } from "@objectiv/tracker-browser";

const LINK_CLASS_NAME = 'table-of-contents__link';
const ACTIVE_LINK_CLASS_NAME = 'table-of-contents__link--active';
const TOP_OFFSET = 100;

export function TOCHeadings({toc, isChild}: TOCHeadingsProps) {
  if (!toc.length) {
    return null;
  }
  
  return (
    <ul
      className={
        isChild ? '' : 'table-of-contents table-of-contents__left-border'
      }
      {...trackElement({id: 'toc'})}
      >
      {toc.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            className={LINK_CLASS_NAME}
            {...trackLink({id: heading.id, href: "#"+heading.id, text: heading.value})}
        
            // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: heading.value}}
          />
          <TOCHeadings isChild toc={heading.children} />
        </li>
      ))}
    </ul>
  );
}

function TOC({toc}: TOCProps): JSX.Element {
  useTOCHighlight(LINK_CLASS_NAME, ACTIVE_LINK_CLASS_NAME, TOP_OFFSET);
  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar')}>
      <TOCHeadings toc={toc} />
    </div>
  );
}

export default TOC;
