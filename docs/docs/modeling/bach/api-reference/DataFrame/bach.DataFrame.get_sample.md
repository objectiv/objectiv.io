---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-get-sample
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.get-sample/
title: bach.DataFrame.get_sample
---

bach.DataFrame.get_sample


#### DataFrame.get_sample(table_name, filter=None, sample_percentage=None, overwrite=False, seed=None)
Returns a DataFrame whose data is a sample of the current DataFrame object.

For the sample Dataframe to be created, all data is queried once and a persistent table is created to
store the sample data used for the sampled DataFrame.

Use [bach.DataFrame.get_unsampled](#bach.DataFrame.get_unsampled)`get_unsampled()` to switch back to the unsampled data later on. This returns a new
DataFrame with all operations that have been done on the sample, applied to that DataFrame.


* **Parameters**

    
    * **table_name** (*str*) – the name of the underlying sql table that stores the sampled data.


    * **filter** ([bach.SeriesBoolean](#bach.SeriesBoolean)*SeriesBoolean*) – a filter to apply to the dataframe before creating the sample. If a filter is applied,
    sample_percentage is ignored and thus the bernoulli sample creation is skipped.


    * **sample_percentage** (*int*) – the approximate size of the sample as a proportion of all rows.
    Between 0-100.


    * **overwrite** (*bool*) – if True, the sample data is written to table_name, even if that table already
    exists.


    * **seed** (*int*) – optional seed number used to generate the sample.



* **Returns**

    a sampled DataFrame of the current DataFrame.



* **Return type**

    [bach.DataFrame](#bach.DataFrame)DataFrame


**NOTE**: All data in the DataFrame to be sampled is queried to create the sample.

<!-- !! processed by numpydoc !! -->
