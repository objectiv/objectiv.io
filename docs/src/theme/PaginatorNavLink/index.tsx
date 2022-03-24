/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/PaginatorNavLink';

// OBJECTIV
import { tagLink } from "@objectiv/tracker-browser";
// END OBJECTIV

function PaginatorNavLink(props: Props): JSX.Element {
  const {permalink, title, subLabel} = props;
  return (
    <Link 
      className="pagination-nav__link" 
      to={permalink}
      // OBJECTIV
      {...tagLink({ id: title as string, href: permalink })}
      // END OBJECTIV
    >
      {subLabel && <div className="pagination-nav__sublabel">{subLabel}</div>}
      <div className="pagination-nav__label">{title}</div>
    </Link>
  );
}

export default PaginatorNavLink;
