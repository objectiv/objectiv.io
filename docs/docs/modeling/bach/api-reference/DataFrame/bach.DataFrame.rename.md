---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-rename
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.rename/
title: bach.DataFrame.rename
---

bach.DataFrame.rename


#### DataFrame.rename(mapper=None, index=None, columns=None, axis=0, level=None, errors='ignore')
Rename columns.

The interface is similar to Panda’s `pandas.DataFrame.rename()`. However we don’t support
renaming indexes, so recommended usage is `rename(columns=...)`.


* **Parameters**

    
    * **mapper** (*Optional**[**Union**[**Dict**[**str**, **str**]**, **Callable**[**[**str**]**, **str**]**]**]*) – dict to apply to that axis’ values. Use mapper and axis to specify the axis to target
    with mapper. Currently mapper is only supported with `axis=1`, which is similar to using
    columns.


    * **index** (*Optional**[**Union**[**Dict**[**str**, **str**]**, **Callable**[**[**str**]**, **str**]**]**]*) – not supported.


    * **columns** (*Optional**[**Union**[**Dict**[**str**, **str**]**, **Callable**[**[**str**]**, **str**]**]**]*) – dict str:str to rename columns, or a function that takes column names as an argument
    and returns the new one. The new column names must not clash with other column names in either
    self.[bach.DataFrame.data](#bach.DataFrame.data)`data` or self.[bach.DataFrame.index](#bach.DataFrame.index)`index`, after renaming is complete.


    * **axis** (*int*) – `axis=1` is supported, rest is not.


    * **level** (*Optional**[**int**]*) – not supported


    * **errors** (*str*) – Either ‘ignore’ or ‘raise’. When set to ‘ignore’ KeyErrors about non-existing
    column names in columns or mapper are ignored. Errors thrown in the mapper function or
    about invalid target column names are not suppressed.



* **Returns**

    DataFrame with the renamed axis labels.



* **Return type**

    [bach.dataframe.DataFrame](#bach.DataFrame)bach.dataframe.DataFrame


**NOTE**: The copy parameter is not supported since it makes very little sense for db backed series.

<!-- !! processed by numpydoc !! -->
