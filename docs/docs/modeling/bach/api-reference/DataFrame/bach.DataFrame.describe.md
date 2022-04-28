---
date: '2022-04-28T14:46:08.106Z'
id: bach-api-reference-data-frame-bach-data-frame-describe
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.describe/
title: bach.DataFrame.describe
---

# bach.DataFrame.describe


#### DataFrame.describe(percentiles=None, include=None, exclude=None, datetime_is_numeric=False)
Returns descriptive statistics.
The following statistics are considered: `count`, `mean`, `std`, `min`, `max`, `nunique` and `mode`


* **Parameters**

    
    * **percentiles** (*Optional**[**Sequence**[**float**]**]*) – list of percentiles to be calculated. Values must be between 0 and 1.


    * **include** (*Optional**[**Union**[**str**, **Sequence**[**str**]**]**]*) – dtypes to be included.
    Either a sequence of dtypes, a single dtype, or the special value ‘all’.
    By default calculations will be based on numerical columns, if there are any
    numerical columns and on all columns if there are no numerical columns.


    * **exclude** (*Optional**[**Union**[**str**, **Sequence**[**str**]**]**]*) – dtypes to be excluded. Either a sequence of dtypes, a single dtype, or None.


    * **datetime_is_numeric** (*bool*) – not supported



* **Returns**

    a new DataFrame with the descriptive statistics



* **Return type**

    [bach.dataframe.DataFrame](bach.DataFrame/#bach.DataFrame)


<!-- !! processed by numpydoc !! -->
