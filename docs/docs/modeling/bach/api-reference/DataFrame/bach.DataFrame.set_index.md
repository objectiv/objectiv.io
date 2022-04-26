---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-set-index
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.set_/
title: bach.DataFrame.set_index
---

bach.DataFrame.set_index


#### DataFrame.set_index(keys, drop=True, append=False)
Set this dataframe’s index to the the index given in keys


* **Parameters**

    
    * **keys** (*Union**[**str**, *[bach.Series](#bach.Series)*Series**, **Sequence**[**Union**[**str**, *[bach.Series](#bach.Series)*Series**]**]**]*) – the keys of the new index. Can be a column name str, a Series, or a list of those. If
    Series are passed, they should have the same base node as the DataFrame they are set on.


    * **drop** (*bool*) – delete columns to be used as the new index.


    * **append** (*bool*) – whether to append to the existing index or replace.



* **Returns**

    a DataFrame with the new index.



* **Return type**

    [bach.DataFrame](#bach.DataFrame)DataFrame


<!-- !! processed by numpydoc !! -->
