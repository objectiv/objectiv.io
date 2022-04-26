---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-value-counts
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.value-counts/
title: bach.DataFrame.value_counts
---

bach.DataFrame.value_counts


#### DataFrame.value_counts(subset=None, normalize=False, sort=True, ascending=False)
Returns a series containing counts of each unique row in the DataFrame


* **Parameters**

    
    * **subset** (*Optional**[**List**[**str**]**]*) – a list of series labels to be used when counting. If subset is not provided and
    dataframe has no group_by, all data columns will be used. In case the DataFrame has a group_by,
    series in group_by will be added to subset.


    * **normalize** (*bool*) – returns proportions instead of frequencies


    * **sort** (*bool*) – sorts result by frequencies


    * **ascending** (*bool*) – sorts values in ascending order if true.



* **Returns**

    a series containing all counts per unique row.



* **Return type**

    [bach.Series](#bach.Series)Series


<!-- !! processed by numpydoc !! -->
