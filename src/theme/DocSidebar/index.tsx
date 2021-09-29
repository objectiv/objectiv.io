/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState} from 'react';
import type {Props} from '@theme/DocSidebar';
import OriginalDocSidebar from '@theme-original/DocSidebar';
import { tagElement } from '@objectiv/tracker-browser';

export default function DocSidebar(props: Props): JSX.Element {
  return (
    <>
      <div {...tagElement({id: 'docs-sidebar'})}>
        <OriginalDocSidebar {...props} />
      </div>
    </>
  );
}
