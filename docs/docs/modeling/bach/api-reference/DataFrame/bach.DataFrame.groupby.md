---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-groupby
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.groupby/
title: bach.DataFrame.groupby
---

bach.DataFrame.groupby


#### DataFrame.groupby(by=None)
Group by any of the series currently in this DataDrame, both from index as well as data.


* **Parameters**

    **by** (*Optional**[**Union**[**str**, *[bach.Series](#bach.Series)*Series**, **Tuple**[**Union**[**str**, *[bach.Series](#bach.Series)*Series**, **Tuple**[**Union**[**str**, *[bach.Series](#bach.Series)*Series**]**, **...**]**]**, **...**]**, **Sequence**[**Union**[**str**, *[bach.Series](#bach.Series)*Series**, **List**[**Union**[**str**, *[bach.Series](#bach.Series)*Series**]**]**, **Tuple**[**Union**[**str**, *[bach.Series](#bach.Series)*Series**]**, **...**]**]**]**]**]*) – The series to group by. Supported are:


    * a string containing a columnn name.


    * a series.


    * a list of strings or series. A normal group by will be created.


    * a list of (strings, series, lists). In this case a grouping list is created.


    * a tuple of (strings, series, lists). In this case a grouping set is created.




* **Returns**

    a new DataFrame object with the [bach.DataFrame.group_by](#bach.DataFrame.group_by)`group_by` attribute set.



* **Return type**

    [bach.DataFrame](#bach.DataFrame)DataFrame


**NOTE**: If the dataframe is already grouped, we’ll create a grouping list from the initial
grouping combined with this one.

<!-- !! processed by numpydoc !! -->
