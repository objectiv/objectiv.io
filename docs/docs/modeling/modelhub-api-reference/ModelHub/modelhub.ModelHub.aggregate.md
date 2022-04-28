---
date: '2022-04-28T19:19:08.619Z'
id: modelhub-api-reference-model-hub-modelhub-model-hub-aggregate
slug: /modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.aggregate/
title: modelhub.ModelHub.aggregate
---

# modelhub.ModelHub.aggregate


#### _property_ ModelHub.aggregate()
Access aggregation methods from the model hub. Same as [`agg`](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.agg/#modelhub.ModelHub.agg).


#### _class_ Aggregate(mh)
Models that return aggregated data in some form from the original DataFrame with Objectiv data.

<!-- !! processed by numpydoc !! -->

#### Aggregate.frequency(data)
Calculate a frequency table for the number of users by number of sessions.


* **Parameters**

    **data** – [`bach.DataFrame`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame) to apply the method on.



* **Returns**

    series with results.


<!-- !! processed by numpydoc !! -->

#### Aggregate.session_duration(data, groupby=NotSet.token, exclude_bounces=True, method='mean')
Calculate the duration of sessions.

With default `method`, it calculates the mean of the session duration over the `groupby`.


* **Parameters**

    
    * **data** – [`bach.DataFrame`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame) to apply the method on.


    * **groupby** – sets the column(s) to group by.


        * if not_set it defaults to using [`ModelHub.time_agg`](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.time-agg/#modelhub.ModelHub.time-agg).


        * if None it aggregates over all data.



    * **method** – ‘mean’ or ‘sum’



* **Returns**

    series with results.


<!-- !! processed by numpydoc !! -->

#### Aggregate.unique_sessions(data, groupby=NotSet.token)
Calculate the unique sessions in the Objectiv `data`.


* **Parameters**

    
    * **data** – [`bach.DataFrame`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame) to apply the method on.


    * **groupby** – sets the column(s) to group by.


        * if not_set it defaults to using [`ModelHub.time_agg`](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.time-agg/#modelhub.ModelHub.time-agg).


        * if None it aggregates over all data.




* **Returns**

    series with results.


<!-- !! processed by numpydoc !! -->

#### Aggregate.unique_users(data, groupby=NotSet.token)
Calculate the unique users in the Objectiv `data`.


* **Parameters**

    
    * **data** – [`bach.DataFrame`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame) to apply the method on.


    * **groupby** – sets the column(s) to group by.


        * if not_set it defaults to using [`ModelHub.time_agg`](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.time-agg/#modelhub.ModelHub.time-agg).


        * if None it aggregates over all data.




* **Returns**

    series with results.


<!-- !! processed by numpydoc !! -->
<!-- !! processed by numpydoc !! -->
