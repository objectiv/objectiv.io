---
date: '2022-04-28T14:46:08.106Z'
id: bach-api-reference-data-frame-bach-data-frame-reset-index
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.reset_/
title: bach.DataFrame.reset_index
---

# bach.DataFrame.reset_index


#### DataFrame.reset_index(level=None, drop=False)
Drops the current index.

With reset_index, all indexes are removed from the DataFrame, so that the DataFrame does not have any
index Series. A new index can be set with [`set_index()`](bach.DataFrame.set-index/#bach.DataFrame.set-index).


* **Parameters**

    
    * **level** (*Optional**[**Union**[**str**, **Sequence**[**str**]**]**]*) – Removes given levels from index. Removes all levels by default


    * **drop** (*bool*) – if False, the dropped index is added to the data columns of the DataFrame. If True it
    is removed.



* **Returns**

    DataFrame with the index dropped.



* **Return type**

    [bach.dataframe.DataFrame](bach.DataFrame/#bach.DataFrame)


<!-- !! processed by numpydoc !! -->
