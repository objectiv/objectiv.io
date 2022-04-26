---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-dropna
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.dropna/
title: bach.DataFrame.dropna
---

bach.DataFrame.dropna


#### DataFrame.dropna(\*, axis=0, how='any', thresh=None, subset=None)
Removes rows with missing values (NaN, None and SQL NULL).


* **Parameters**

    
    * **axis** (*int*) – only `axis=0` is supported. This means rows that contain missing values are dropped.


    * **how** (*str*) – determines when a row is removed. Supported values:
    - ‘any’: rows with at least one missing value are removed
    - ‘all’: rows with all missing values are removed


    * **thresh** (*Optional**[**int**]*) – determines the least amount of non-missing values a row needs to have
    in order to be kept


    * **subset** (*Optional**[**Union**[**str**, **Sequence**[**str**]**]**]*) – series label or sequence of labels to be considered for missing values.
    If subset is None, all DataFrame’s series labels will be used.
    In case subset is an empty list, a copy from the DataFrame will
    be returned.



* **Returns**

    a new dataframe with dropped rows.



* **Return type**

    [bach.dataframe.DataFrame](#bach.DataFrame)bach.dataframe.DataFrame


<!-- !! processed by numpydoc !! -->
