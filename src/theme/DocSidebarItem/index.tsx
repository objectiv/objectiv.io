/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import OriginalDocSidebarItem from '@theme-original/DocSidebarItem';
import React, {memo} from 'react';
import {
  ReactTracker,
  makeSectionContext,
  trackLinkClick,
  makeLinkContext,
  useTracker,
} from "@objectiv/tracker-react";
 
import type {Props, DocSidebarItemsProps} from '@theme/DocSidebarItem';

export const DocSidebarItems = memo(function DocSidebarItems({
  items,
  ...props
}: DocSidebarItemsProps): JSX.Element {
      const tracker = useTracker();
      const docSidebarTracker = new ReactTracker(tracker, {
        location_stack: [makeSectionContext({ id: 'docs-sidebar' })],
      });
      for (const [index, item] of items.entries()) {
      item.onItemClick = () => console.log("clicked");
      // item.onItemClick = () => trackLinkClick(makeLinkContext({ 
      //   id: item.label, 
      //   href: item.href, 
      //   text: item.label
      // }), docSidebarTracker);
      // console.log(item);
    }
    return (
    <>
      {items.map((item, index) => (
        <OriginalDocSidebarItem
          key={index} // sidebar is static, the index does not change
          item={item}
          onClick={() => trackLinkClick(makeLinkContext({ 
            id: item.label, 
            href: '', 
            text: item.label 
          }), docSidebarTracker)}
          {...props}
        />
      ))}
    </>
  );
});
