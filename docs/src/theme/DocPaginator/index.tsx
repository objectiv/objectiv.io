/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// @ts-ignore
import Translate, {translate} from '@docusaurus/Translate';
// @ts-ignore
import PaginatorNavLink from '@theme/PaginatorNavLink';
// @ts-ignore
import type {Props} from '@theme/DocPaginator';

// OBJECTIV
import { tagNavigation } from "@objectiv/tracker-browser";
// END OBJECTIV

export default function DocPaginator(props: Props): JSX.Element {
  const {previous, next} = props;

  return (
    <nav
      // OBJECTIV
      {...tagNavigation({id: 'doc-paginator-navigation'})}
      // END OBJECTIV
      className="pagination-nav docusaurus-mt-lg"
      aria-label={translate({
        id: 'theme.docs.paginator.navAriaLabel',
        message: 'Docs pages navigation',
        description: 'The ARIA label for the docs pagination',
      })}>
      <div className="pagination-nav__item">
        {previous && (
          <PaginatorNavLink
            {...previous}
            subLabel={
              <Translate
                id="theme.docs.paginator.previous"
                description="The label used to navigate to the previous doc">
                Previous
              </Translate>
            }
          />
        )}
      </div>
      <div className="pagination-nav__item pagination-nav__item--next">
        {next && (
          <PaginatorNavLink
            {...next}
            subLabel={
              <Translate
                id="theme.docs.paginator.next"
                description="The label used to navigate to the next doc">
                Next
              </Translate>
            }
          />
        )}
      </div>
    </nav>
  );
}