/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';

import type {Props} from '@theme/EditThisPage';
import {ThemeClassNames} from '@docusaurus/theme-common';

// OBJECTIV
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from "@docusaurus/router";
import { matchPath } from "@docusaurus/router";
import Link from '@docusaurus/Link';
import { TrackedLink } from '../../trackedComponents/TrackedLink';
import { TrackedDiv } from "@objectiv/tracker-react";
import styles from './styles.module.css';
import clsx from 'clsx';
// END OBJECTIV

export default function EditThisPage({editUrl}: Props): JSX.Element {
  // OBJECTIV
  const context = useDocusaurusContext();
  const {baseUrl, customFields} = context.siteConfig;
  const location = useLocation();

  // if in the 'modeling' section, edit the source code that is used to auto-generate the docs instead
  let editThisPageUrl = matchPath(location.pathname, {path: `${baseUrl}modeling`}) !== null ? 
    useBaseUrl('/home/the-project/update-the-docs') : editUrl;

  return (
    <TrackedDiv 
      id={'edit-this-page'}
      className={clsx(styles.editThisPage)}
    >
      <ul className={clsx(styles.editLinks)}>
        <li>
          <TrackedLink
            id={'edit-docs-page'}
            to={editThisPageUrl}
            className={ThemeClassNames.common.editThisPage}
            rel="noreferrer noopener">
              <i className={clsx(styles.icon, styles.iconSuggestEdit)}/> Suggest an edit
          </TrackedLink>
        </li>
        <li>
        <TrackedLink
          id={'get-help'}
          to={customFields.slackJoinLink as string}
          target="_blank">
            <i className={clsx(styles.icon, styles.iconGetHelp)}/> Get help on Slack
          </TrackedLink>
        </li>
        <li>
          <TrackedLink
            id={'submit-idea-or-bug-report'}
            to={'https://github.com/objectiv/objectiv-analytics'}
            target="_blank">
              <i className={clsx(styles.icon, styles.iconTriangle)}/> Request feature or report issue
          </TrackedLink>
        </li>
      </ul>
    </TrackedDiv>
  );
  // END OBJECTIV
}