---
date: '2022-04-28T14:46:08.106Z'
id: bach-api-reference-series-bach-series-append
slug: /modeling/bach/api-reference/Series/bach.Series.append/
title: bach.Series.append
---

# bach.Series.append


#### Series.append(other, ignore_index=False)
Append rows of other series to the caller series.


* **Parameters**

    
    * **other** (*Union**[*[*bach.series.series.Series*](bach.Series/#bach.Series)*, **List**[*[*bach.series.series.Series*](bach.Series/#bach.Series)*]**]*) – objects to be added


    * **ignore_index** (*bool*) – if true, drops indexes of all objects to be appended



* **Returns**

    a new series with all rows from appended other or self if other is empty.



* **Return type**

    [bach.series.series.Series](bach.Series/#bach.Series)


<!-- !! processed by numpydoc !! -->
