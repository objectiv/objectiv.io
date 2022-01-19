---
sidebar_label: Overview
title: Hooks
sidebar_position: 1
---

import ConsumersOverview from './consumers/overview.md'
import EventTrackersOverview from './eventTrackers/overview.md'

A range of hooks that we use for most of the tracking. All hooks are stable and perform deep comparisons on their deps.  

#### Lifecycle

- [useOnMount](/tracking/react/api-reference/hooks/useOnMount.md)
- [useOnUnmount](/tracking/react/api-reference/hooks/useOnUnmount.md)
- [useTrackOnMount](/tracking/react/api-reference/hooks/useTrackOnMount.md)
- [useTrackOnUnmount](/tracking/react/api-reference/hooks/useTrackOnUnmount.md)

#### State

- [useOnChange](/tracking/react/api-reference/hooks/useOnChange.md)
- [useOnToggle](/tracking/react/api-reference/hooks/useOnToggle.md)
- [useTrackOnChange](/tracking/react/api-reference/hooks/useTrackOnChange.md)
- [useTrackOnToggle](/tracking/react/api-reference/hooks/useTrackOnToggle.md)

#### Consumers
<ConsumersOverview />

#### Event trackers
<EventTrackersOverview />