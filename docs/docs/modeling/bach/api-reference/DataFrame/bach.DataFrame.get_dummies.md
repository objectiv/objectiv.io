---
date: '2022-04-28T19:24:58.840Z'
id: bach-api-reference-data-frame-bach-data-frame-get-dummies
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.get-dummies/
title: bach.DataFrame.get_dummies
---

# bach.DataFrame.get_dummies


#### DataFrame.get_dummies(prefix=None, prefix_sep='_', dummy_na=False, columns=None, dtype='int64')
Convert each unique category/value from a string series into a dummy/indicator variable.


* **Parameters**

    
    * **prefix** (*Optional**[**Union**[**str**, **List**[**str**]**, **Dict**[**str**, **str**]**]**]*) – String to append to each new column name. By default, the prefix will be the name of
    the series the category is originated from.


    * **prefix_sep** (*str*) – Separated between the prefix and label.


    * **dummy_na** (*bool*) – If true, it will include `nan` as a variable.


    * **columns** (*Optional**[**List**[**str**]**]*) – List of string series to be converted.


    * **dtype** (*str*) – dtype of all new columns



* **Returns**

    DataFrame



* **Return type**

    [bach.dataframe.DataFrame](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)


**NOTE**: DataFrame should contain at least one index level.

<!-- !! processed by numpydoc !! -->
