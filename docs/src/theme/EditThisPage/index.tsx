/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useRouteMatch } from "@docusaurus/router";

import type {Props} from '@theme/EditThisPage';

import Link from '@docusaurus/Link';
import { tagLink, tagElement } from "@objectiv-analytics/tracker-browser";

export default function EditThisPage({editUrl}: Props): JSX.Element {
  const context = useDocusaurusContext();
  const {baseUrl, customFields} = context.siteConfig;

  // if in the 'modeling' section, edit the source code that is used to auto-generate the docs instead
  let editThisPageUrl = useRouteMatch(`${baseUrl}modeling`) !== null ? 
    useBaseUrl('/the-project/update-the-docs') : editUrl;

  return (
    <noindex>
      <div 
        {...tagElement({id: 'edit-this-page'})}
      >
        <ul>
          <li className="ignore-for-search">
            <Link
              to={editThisPageUrl}
              {...tagLink({ id: 'edit-docs-page', text: 'Suggest an edit', href: editThisPageUrl })}
              rel="noopener nofollow">
              Suggest an edit
            </Link>
          </li>
          <li className="ignore-for-search">
            <Link
              to={customFields.slackJoinLink as string}
              target="_blank"
              {...tagLink({ id: 'get-help', text: 'Get help', href: customFields.slackJoinLink as string })}
              rel="noopener nofollow">
              Get help on Slack
            </Link>
          </li>
          <li className="ignore-for-search">
            <Link
              to={'https://github.com/objectiv/objectiv-analytics'}
              target="_blank"
              {...tagLink({ id: 'submit-idea-or-bug-report', text: 'Submit idea or bug report', href: 'https://github.com/objectiv/objectiv-analytics' })}
              rel="noopener nofollow">
              Request feature or report issue
            </Link>
          </li>
          <li className="ignore-for-search">
            <Link
              to={'https://github.com/objectiv/objectiv-analytics/projects/2'}
              target="_blank"
              {...tagLink({ id: 'roadmap', text: 'See the Roadmap', href: 'https://github.com/objectiv/objectiv-analytics/projects/2' })}
              rel="noopener nofollow">
              See the Roadmap
            </Link>
          </li>
        </ul>
      </div>
    </noindex>
  );
}