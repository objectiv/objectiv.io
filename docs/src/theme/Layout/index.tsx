/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProviders from '@theme/LayoutProviders';
import type {Props} from '@theme/Layout';
import {
  PageMetadata,
  ThemeClassNames,
  useKeyboardNavigation,
} from '@docusaurus/theme-common';
import ErrorPageContent from '@theme/ErrorPageContent';
import './styles.css';

export default function Layout(props: Props): JSX.Element {
  const {
    children,
    noFooter,
    wrapperClassName,
    // not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;

  useKeyboardNavigation();

  return (
    <LayoutProviders>
      <PageMetadata title={title} description={description} />

      <Navbar />

      <main className={clsx(ThemeClassNames.wrapper.main, wrapperClassName)}>
        <ErrorBoundary fallback={ErrorPageContent}>{children}</ErrorBoundary>
      </main>

      {!noFooter && <Footer />}
    </LayoutProviders>
  );
}
