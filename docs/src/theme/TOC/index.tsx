/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/TOC';
import TOCItems from '@theme/TOCItems';
import styles from './styles.module.css';

// OBJECTIV
import { tagNavigation } from "@objectiv/tracker-browser";
// END OBJECTIV

// Using a custom className
// This prevents TOC highlighting to highlight TOCInline/TOCCollapsible by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';

export default function TOC({className, ...props}: Props): JSX.Element {
  return (
    <div
      className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}
      // OBJECTIV
      {...tagNavigation({id: 'toc'})}
      // END OBJECTIV
    >
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    </div>
  );
}
