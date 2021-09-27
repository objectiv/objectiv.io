/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import OriginalDocSidebarItems from '@theme-original/DocSidebarItem';
import OriginalDocSidebarItem from '@theme-original/DocSidebarItem';
import React, {memo} from 'react';
import { trackLink, trackClick } from "@objectiv/tracker-browser";
import type {Props, DocSidebarItemsProps} from '@theme/DocSidebarItem';

export const DocSidebarItems = memo(function DocSidebarItems({
  items,
  ...props
}: DocSidebarItemsProps): JSX.Element {
  return (
    <>
      {items.map((item, index) => (
        <DocSidebarItem
          key={index} // sidebar is static, the index does not change
          item={item}
          {...props}
        />
      ))}
    </>
  );
});

export default function DocSidebarItem({
  item,
  ...props
}: Props): JSX.Element | null {
  return (
    <OriginalDocSidebarItem 
      item={item} 
      onItemClick={(event) => trackClick({element: event.target})}
      {...props} 
    />
  )
}
