/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import IconMenu from '@theme/Icon/Menu';

// OBJECTIV
import { TrackedButton } from '@objectiv/tracker-react';
// END OBJECTIV

export default function MobileSidebarToggle(): JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    // OBJECTIV
    <TrackedButton
      onClick={mobileSidebar.toggle}
      onKeyDown={mobileSidebar.toggle}
      aria-label="Navigation bar toggle"
      className="navbar__toggle clean-btn"
      type="button"
      title={'hamburger'}
      tabIndex={0}>
      <IconMenu />
    </TrackedButton>
    // END OBJECTIV
  );
}
