# TaggingAttribute
 
[Location Taggers](/tracking/api-reference/locationTaggers/overview.md) and [tagChildren](/tracking/api-reference/locationTaggers/tagChildren.md) decorate [Taggable Elements](/tracking/core-concepts/tagging.md#taggable-elements) by adding [Custom data-* Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*) to them.

| Location Taggers | tagChildren   | Short name      | DOM dataset attribute name
| :-:              | :-:           | :--             | :--                                                                                       
| required         | never         | elementId       | `data-objectiv-element-id`
| required         | never         | context         | `data-objectiv-context`
| optional         | never         | parentElementId | `data-objectiv-parent-element-id`
| optional         | never         | trackClicks     | `data-objectiv-track-clicks`
| optional         | never         | trackBlurs      | `data-objectiv-track-blurs`
| optional         | never         | trackVisibility | `data-objectiv-track-visibility`
| optional         | never         | validate        | `data-objectiv-validate`
| never            | always        | tagChildren     | `data-objectiv-tag-children`
| automatic        | automatic     | tracked         | `data-objectiv-tracked`

### TaggingAttribute.elementId
A unique identifier used internally to pinpoint a specific [Tagged Element](/tracking/core-concepts/tagging.md#tagged-elements).

### TaggingAttribute.context
A serialized [Location Context](/taxonomy/reference/location-contexts/overview.md) instance.

### TaggingAttribute.parentElementId
Rebuilding [Locations](/tracking/core-concepts/locations.md) via the DOM is not always accurate (eg: [React Portals](https://reactjs.org/docs/portals.html)). This allows specifying a parent [Tagged Element](/tracking/core-concepts/tagging.md#tagged-elements).

### TaggingAttribute.trackClicks
Whether to attach [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventListener) to the [Tagged Element](/tracking/core-concepts/tagging.md#tagged-elements) to automatically trigger [trackClick](/tracking/api-reference/eventTrackers/trackClick.md) on [click](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event).

### TaggingAttribute.trackBlurs
Whether to attach [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventListener) to the [Tagged Element](/tracking/core-concepts/tagging.md#tagged-elements) to automatically track [trackInputChange](/tracking/api-reference/eventTrackers/trackInputChange.md) events on [blur](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).

### TaggingAttribute.trackVisibility
Whether to monitor the [Tagged Element](/tracking/core-concepts/tagging.md#tagged-elements) to automatically track either [trackHidden](/tracking/api-reference/eventTrackers/trackHidden.md) or [trackVisible](/tracking/api-reference/eventTrackers/trackVisible.md) events.

### TaggingAttribute.validate
A serialized [TagLocationOptions.validate](/tracking/api-reference/definitions/TagLocationOptions.md#optionsvalidate) object to customize how validation occurs for the [Tagged Element](/tracking/core-concepts/tagging.md#tagged-elements).

### TaggingAttribute.tagChildren
A serialized list of [ChildrenTaggingQuery](/tracking/api-reference/locationTaggers/tagChildren.md#childrentaggingquery-parameter) objects.

### TaggingAttribute.tracked
Automatically added by the [Tagged Elements Observer](/tracking/core-concepts/trackers.md#tagged-elements-observer) when this [Tagged Element](/tracking/core-concepts/tagging.md#tagged-elements) is registered as being tracked.

