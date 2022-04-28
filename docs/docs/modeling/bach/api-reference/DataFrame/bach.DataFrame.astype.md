---
date: '2022-04-28T14:46:08.106Z'
id: bach-api-reference-data-frame-bach-data-frame-astype
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.astype/
title: bach.DataFrame.astype
---

# bach.DataFrame.astype


#### DataFrame.astype(dtype)
Cast all or some of the data columns to a certain dtype.

Only data columns can be cast, index columns cannot be cast.

This does not modify the current DataFrame, instead it returns a new DataFrame.


* **Parameters**

    **dtype** (*Union**[**str**, **Dict**[**str**, **str**]**]*) – either:


    * A single str, in which case all data columns are cast to this dtype.


    * A dictionary mapping column labels to dtype.




* **Returns**

    New DataFrame with the specified column(s) cast to the specified dtype



* **Return type**

    [bach.dataframe.DataFrame](bach.DataFrame/#bach.DataFrame)


<!-- !! processed by numpydoc !! -->
