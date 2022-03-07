/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import type {Props} from '@theme/PaginatorNavLink';

import { TrackedLink } from "../../trackedComponents/TrackedLink";

function PaginatorNavLink(props: Props): JSX.Element {
  const {permalink, title, subLabel} = props;
  return (
    <TrackedLink className="pagination-nav__link" to={permalink}>
      {subLabel && <div className="pagination-nav__sublabel">{subLabel}</div>}
      <div className="pagination-nav__label">{title}</div>
    </TrackedLink>
  );
}

export default PaginatorNavLink;
