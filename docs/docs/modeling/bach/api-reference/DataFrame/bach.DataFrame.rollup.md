---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-rollup
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.rollup/
title: bach.DataFrame.rollup
---

bach.DataFrame.rollup


#### DataFrame.rollup(by)
Group by and roll up over the column(s) by, replacing any current grouping.


* **Parameters**

    **by** (*Optional**[**Union**[**str**, *[bach.Series](#bach.Series)*Series**, **List**[**Union**[**str**, *[bach.Series](#bach.Series)*Series**]**]**]**]*) – the series to group by and roll up. Can be a column or index name str, a Series or a list
    of any of those. If Series are passed, they should have the same base node as the DataFrame.



* **Returns**

    a new DataFrame object with the [bach.DataFrame.group_by](#bach.DataFrame.group_by)`group_by` attribute set.



* **Return type**

    [bach.DataFrame](#bach.DataFrame)DataFrame


<!-- !! processed by numpydoc !! -->
