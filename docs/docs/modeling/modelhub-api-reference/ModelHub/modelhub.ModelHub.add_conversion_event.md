---
date: '2022-04-28T14:46:08.106Z'
id: modelhub-api-reference-model-hub-modelhub-model-hub-add-conversion-event
slug: /modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.add-conversion-event/
title: modelhub.ModelHub.add_conversion_event
---

# modelhub.ModelHub.add_conversion_event


#### ModelHub.add_conversion_event(location_stack=None, event_type=None, name=None)
Label events that are used as conversions. All labeled conversion events are set in
[`conversion_events`](modelhub.ModelHub.conversion-events/#modelhub.ModelHub.conversion-events).


* **Parameters**

    
    * **location_stack** ([*SeriesLocationStack*](../SeriesLocationStack/modelhub.SeriesLocationStack/#modelhub.SeriesLocationStack)) – the location stack that is labeled as conversion. Can be any slice in of a
    [`modelhub.SeriesLocationStack`](../SeriesLocationStack/modelhub.SeriesLocationStack/#modelhub.SeriesLocationStack) type column. Optionally use in conjunction with
    `event_type` to label a conversion.


    * **event_type** (*str*) – the event type that is labeled as conversion. Optionally use in conjunction with
    `objectiv_location_stack` to label a conversion.


    * **name** (*str*) – the name to use for the labeled conversion event. If None it will use ‘conversion_#’,
    where # is the number of the added conversion.


<!-- !! processed by numpydoc !! -->
