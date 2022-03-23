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
- [useOnUnmount](/tracking/react-native/api-reference/hooks/useOnUnmount.md)
- [useTrackOnMount](/tracking/react-native/api-reference/hooks/useTrackOnMount.md)
- [useTrackOnUnmount](/tracking/react-native/api-reference/hooks/useTrackOnUnmount.md)

#### State

- [useOnChange](/tracking/react-native/api-reference/hooks/useOnChange.md)
- [useOnToggle](/tracking/react-native/api-reference/hooks/useOnToggle.md)
- [useTrackOnChange](/tracking/react-native/api-reference/hooks/useTrackOnChange.md)
- [useTrackOnToggle](/tracking/react-native/api-reference/hooks/useTrackOnToggle.md)