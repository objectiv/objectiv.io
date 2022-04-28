---
date: '2022-04-28T19:19:08.619Z'
id: bach-api-reference-series-bach-series-drop-duplicates
slug: /modeling/bach/api-reference/Series/bach.Series.drop-duplicates/
title: bach.Series.drop_duplicates
---

# bach.Series.drop_duplicates


#### Series.drop_duplicates(keep='first')
Return a series with duplicated rows removed.


* **Parameters**

    **keep** (*Union**[**str**, **bool**]*) – Supported values: “first”, “last” and False. Determines which duplicates to keep:


    * `first`: drop all occurrences except the first one


    * `last`:  drop all occurrences except the last one


    * False: drops all duplicates

    If no value is provided, first occurrences will be kept by default.




* **Returns**

    a new series with dropped duplicates



* **Return type**

    bach.series.series.T


<!-- !! processed by numpydoc !! -->
