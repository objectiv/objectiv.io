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
import { tagLink, tagContent } from "@objectiv/tracker-browser";

import styles from './styles.module.css';
import clsx from 'clsx';

export default function EditThisPage({editUrl}: Props): JSX.Element {
  const context = useDocusaurusContext();
  const {baseUrl, customFields} = context.siteConfig;

  // if in the 'modeling' section, edit the source code that is used to auto-generate the docs instead
  let editThisPageUrl = useRouteMatch(`${baseUrl}modeling`) !== null ? 
  useBaseUrl('/the-project/update-the-docs') : editUrl;

  return (
    <div 
      {...tagContent({id: 'edit-this-page'})}
    >
      <ul className={clsx(styles.editLinks)}>
        <li>
          <Link
            to={editThisPageUrl}
            {...tagLink({ id: 'edit-docs-page', href: editThisPageUrl })}
            rel="noreferrer noopener">
            <i className={clsx(styles.icon, styles.iconSuggestEdit)}/> Suggest an edit
          </Link>
        </li>
        <li>
          <Link
            to={customFields.slackJoinLink as string}
            target="_blank"
            {...tagLink({ id: 'get-help', href: customFields.slackJoinLink as string })}
          >
            <i className={clsx(styles.icon, styles.iconGetHelp)}/> Get help on Slack
          </Link>
        </li>
        <li>
          <Link
            to={'https://github.com/objectiv/objectiv-analytics'}
            target="_blank"
            {...tagLink({ id: 'submit-idea-or-bug-report', href: 'https://github.com/objectiv/objectiv-analytics' })}
          >
            <i className={clsx(styles.icon, styles.iconTriangle)}/> Request feature or report issue
          </Link>
        </li>
      </ul>
    </div>
  );
}