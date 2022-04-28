---
date: '2022-04-28T19:24:58.840Z'
id: bach-api-reference-data-frame-bach-data-frame-rollup
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.rollup/
title: bach.DataFrame.rollup
---

# bach.DataFrame.rollup


#### DataFrame.rollup(by)
Group by and roll up over the column(s) `by`, replacing any current grouping.


* **Parameters**

    **by** (*Optional**[**Union**[**str**, *[*Series*](/docs/modeling/bach/api-reference/Series/bach.Series/#bach.Series)*, **List**[**Union**[**str**, *[*Series*](/docs/modeling/bach/api-reference/Series/bach.Series/#bach.Series)*]**]**]**]*) – the series to group by and roll up. Can be a column or index name str, a Series or a list
    of any of those. If Series are passed, they should have the same base node as the DataFrame.



* **Returns**

    a new DataFrame object with the [`group_by`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.group-by/#bach.DataFrame.group-by) attribute set.



* **Return type**

    [DataFrame](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)


<!-- !! processed by numpydoc !! -->
