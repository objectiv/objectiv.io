---
date: '2022-04-26T12:27:56.237Z'
id: modelhub-api-reference-model-hub-modelhub-model-hub
slug: /modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub/
title: modelhub.ModelHub
---

modelhub.ModelHub


### _class_ modelhub.ModelHub(time_aggregation='YYYY-MM-DD HH24:MI:SS.MS')
The model hub contains collection of data models and convenience functions that you can take, combine and
run on Bach data frames to quickly build highly specific model stacks for product analysis and
exploration.
It includes models for a wide range of typical product analytics use cases.

All models from the model hub can run on Bach DataFrames that contain data collected by the Objectiv
tracker. To instantiate a DataFrame with Objectiv data use `ModelHub.from_objectiv_data()`. Models
from the model hub assume that at least the columns of a DataFrame instantiated with this method are
available in order to run properly. These columns are:

The model hub has two main type of functions: [modelhub.ModelHub.map](#modelhub.ModelHub.map)`map` and [modelhub.ModelHub.aggregate](#modelhub.ModelHub.aggregate)`aggregate`.


* map functions always return a series with the same shape and index as the DataFrame they originate
from. This ensures they can be added as a column to that DataFrame.


* aggregate fuctions return aggregated data in some form from the DataFrame. Can also be accessed with
agg.

<!-- !! processed by numpydoc !! -->
### Methods

| [modelhub.ModelHub.add_conversion_event](#modelhub.ModelHub.add_conversion_event)`add_conversion_event`([location_stack, ...])

 | Label events that are used as conversions.

 |
| [modelhub.ModelHub.get_objectiv_dataframe](#modelhub.ModelHub.get_objectiv_dataframe)`get_objectiv_dataframe`([db_url, table_name, ...])

 | Sets data from sql table into an [bach.DataFrame](#bach.DataFrame)`bach.DataFrame` object.

                                                                                                                                            |
| [modelhub.ModelHub.time_agg](#modelhub.ModelHub.time_agg)`time_agg`(data[, time_aggregation])

                | Formats the moment column in the DataFrame, returns a SeriesString.

                                                                                                                                |
| [modelhub.ModelHub.to_metabase](#modelhub.ModelHub.to_metabase)`to_metabase`(data[, model_type, config])

           | Plot data in `data` to Metabase.

                                                                                                                                                                     |
### Attributes

| [modelhub.ModelHub.agg](#modelhub.ModelHub.agg)`agg`
                                               | Access aggregation methods from the model hub.

                                                                                                                                                     |
| [modelhub.ModelHub.aggregate](#modelhub.ModelHub.aggregate)`aggregate`
                                         | Access aggregation methods from the model hub.

                                                                                                                                                     |
| [modelhub.ModelHub.conversion_events](#modelhub.ModelHub.conversion_events)`conversion_events`
                                 | Dictionary of all events that are labeled as conversion.

                                                                                                                                           |
| [modelhub.ModelHub.map](#modelhub.ModelHub.map)`map`
                                               | Access map methods from the model hub.

                                                                                                                                                             |
| [modelhub.ModelHub.time_aggregation](#modelhub.ModelHub.time_aggregation)`time_aggregation`
                                  | Time aggregation used for aggregation models, set when object is instantiated.

                                                                                                                     |
