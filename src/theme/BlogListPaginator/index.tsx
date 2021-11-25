/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import { tagElement, tagLink } from "@objectiv/tracker-browser";
import React from 'react';

function BlogListPaginator(props): JSX.Element {
  const {metadata} = props;
  const {previousPage, nextPage} = metadata;

  return (
    <nav
      {...tagElement({id: 'blog-list-paginator'})}
      className="pagination-nav"
      aria-label={translate({
        id: 'theme.blog.paginator.navAriaLabel',
        message: 'Blog list page navigation',
        description: 'The ARIA label for the blog pagination',
      })}>
      <div className="pagination-nav__item">
        {previousPage && (
          <Link 
            className="pagination-nav__link" 
            to={previousPage}
            {...tagLink({ id: 'previous', text: 'Newer', href: previousPage })}
          >
            <div className="pagination-nav__label">
              &laquo;{' '}
              <Translate
                id="theme.blog.paginator.newerEntries"
                description="The label used to navigate to the newer blog posts page (previous page)">
                Newer Entries
              </Translate>
            </div>
          </Link>
        )}
      </div>
      <div className="pagination-nav__item pagination-nav__item--next">
        {nextPage && (
          <Link 
            className="pagination-nav__link" 
            to={nextPage}
            {...tagLink({ id: 'next', text: 'Older', href: nextPage })}
          >
            <div className="pagination-nav__label">
              <Translate
                id="theme.blog.paginator.olderEntries"
                description="The label used to navigate to the older blog posts page (next page)">
                Older Entries
              </Translate>{' '}
              &raquo;
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default BlogListPaginator;
