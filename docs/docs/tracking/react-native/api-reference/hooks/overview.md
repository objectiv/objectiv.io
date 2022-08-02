---
sidebar_label: Overview
title: Hooks
sidebar_position: 1
---

import ConsumersOverview from './consumers/overview.md'
import EventTrackersOverview from './eventTrackers/overview.md'

A range of hooks that we use for most of the tracking. All hooks are stable and perform deep comparisons on their deps.  

#### Event trackers
<EventTrackersOverview />

#### Consumers
<ConsumersOverview />

<br />

The hooks the SDK uses internally for event instrumentation are also available publicly.

#### Lifecycle

- [useOnMount](/tracking/react-native/api-reference/hooks/useOnMount.md)
- [useOnMountOnce](/tracking/react-native/api-reference/hooks/useOnMountOnce.md)
- [useOnUnmount](/tracking/react-native/api-reference/hooks/useOnUnmount.md)
- [useOnUnmountOnce](/tracking/react-native/api-reference/hooks/useOnUnmountOnce.md)
- [useTrackOnMount](/tracking/react-native/api-reference/hooks/useTrackOnMount.md)
- [useTrackOnMountOnce](/tracking/react-native/api-reference/hooks/useTrackOnMountOnce.md)
- [useTrackOnUnmount](/tracking/react-native/api-reference/hooks/useTrackOnUnmount.md)
- [useTrackOnUnmountOnce](/tracking/react-native/api-reference/hooks/useTrackOnUnmountOnce.md)

#### State

- [useOnToggle](/tracking/react-native/api-reference/hooks/useOnToggle.md)
- [useTrackOnToggle](/tracking/react-native/api-reference/hooks/useTrackOnToggle.md)
