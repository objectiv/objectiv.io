---
date: '2022-04-28T19:19:08.619Z'
id: modelhub-api-reference-model-hub-modelhub-model-hub-map
slug: /modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.map/
title: modelhub.ModelHub.map
---

# modelhub.ModelHub.map


#### _property_ ModelHub.map()
Access map methods from the model hub.


#### _class_ Map(mh)
Methods in this class can be used to map data in a DataFrame with Objectiv data to series values.

Always returns Series with same index as the DataFrame the method is applied to, so the result can be set
as columns to that DataFrame.

<!-- !! processed by numpydoc !! -->

#### Map.conversions_counter(data, name, partition='session_id')
Counts the total number of conversions given a partition (ie session_id
or user_id).


* **Parameters**

    
    * **name** – the name of the conversion to label as set in
    [`ModelHub.conversion_events`](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.conversion-events/#modelhub.ModelHub.conversion-events).


    * **partition** – the partition over which the number of conversions are counted. Can be any column
    of the ObjectivFrame



* **Returns**

    `bach.SeriesBoolean` with the same index as `data`.


<!-- !! processed by numpydoc !! -->

#### Map.conversions_in_time(data, name, partition='session_id')
Counts the number of time a user is converted at a moment in time given a partition (ie ‘session_id’
or ‘user_id’).


* **Parameters**

    
    * **data** – [`bach.DataFrame`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame) to apply the method on.


    * **name** – the name of the conversion to label as set in
    [`ModelHub.conversion_events`](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.conversion-events/#modelhub.ModelHub.conversion-events).


    * **partition** – the partition over which the number of conversions are counted. Can be any column
    in `data`.



* **Returns**

    `bach.SeriesInt64` with the same index as `data`.


<!-- !! processed by numpydoc !! -->

#### Map.is_conversion_event(data, name)
Labels a hit True if it is a conversion event, all other hits are labeled False.


* **Parameters**

    
    * **data** – [`bach.DataFrame`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame) to apply the method on.


    * **name** – the name of the conversion to label as set in
    [`ModelHub.conversion_events`](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.conversion-events/#modelhub.ModelHub.conversion-events).



* **Returns**

    `bach.SeriesBoolean` with the same index as `data`.


<!-- !! processed by numpydoc !! -->

#### Map.is_first_session(data)
Labels all hits in a session True if that session is the first session of that user in the data.


* **Parameters**

    **data** – [`bach.DataFrame`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame) to apply the method on.



* **Returns**

    `bach.SeriesBoolean` with the same index as `data`.


<!-- !! processed by numpydoc !! -->

#### Map.is_new_user(data, time_aggregation=None)
Labels all hits True if the user is first seen in the period given `time_aggregation`.


* **Parameters**

    
    * **data** – [`bach.DataFrame`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame) to apply the method on.


    * **time_aggregation** – if None, it uses the [`ModelHub.time_aggregation`](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.time-aggregation/#modelhub.ModelHub.time-aggregation) set in ModelHub
    instance.



* **Returns**

    `bach.SeriesBoolean` with the same index as `data`.


<!-- !! processed by numpydoc !! -->

#### Map.pre_conversion_hit_number(data, name, partition='session_id')
Returns a count backwards from the first conversion, given the partition. I.e. first hit before
converting is 1, second hit before converting 2, etc. Returns None if there are no conversions
in the partition or after the first conversion.


* **Parameters**

    
    * **data** – [`bach.DataFrame`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame) to apply the method on.


    * **name** – the name of the conversion to label as set in
    [`ModelHub.conversion_events`](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.conversion-events/#modelhub.ModelHub.conversion-events).


    * **partition** – the partition over which the number of conversions are counted. Can be any column
    in `data`.



* **Returns**

    `bach.SeriesInt64` with the same index as `data`.


<!-- !! processed by numpydoc !! -->
<!-- !! processed by numpydoc !! -->
