---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-string-get-dummies
slug: /modeling/bach/api-reference/Series/bach.SeriesString.get-dummies/
title: bach.SeriesString.get_dummies
---

bach.SeriesString.get_dummies


#### SeriesString.get_dummies(prefix=None, prefix_sep='_', dummy_na=False, dtype='int64')
Convert each unique category/value from the series into a dummy/indicator variable.


* **Parameters**

    
    * **prefix** (*Optional**[**str**]*) – String to append to each new column name. By default, the prefix will be the name of
    the caller.


    * **prefix_sep** (*str*) – Separated between the prefix and label.


    * **dummy_na** (*bool*) – If true, it will include `nan` as a variable.


    * **dtype** (*str*) – dtype of all new columns



* **Returns**

    DataFrame



* **Return type**

    [bach.DataFrame](#bach.DataFrame)DataFrame


**NOTE**: Series should contain at least one index level.

<!-- !! processed by numpydoc !! -->
