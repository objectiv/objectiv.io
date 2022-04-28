---
date: '2022-04-28T14:46:08.106Z'
id: bach-api-reference-data-frame-bach-data-frame-merge
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.merge/
title: bach.DataFrame.merge
---

# bach.DataFrame.merge


#### DataFrame.merge(right, how='inner', on=None, left_on=None, right_on=None, left_index=False, right_index=False, suffixes=('_x', '_y'))
Join the right Dataframe or Series on self. This will return a new DataFrame that contains the
combined columns of both dataframes, and the rows that result from joining on the specified columns.
The columns that are joined on can consist (partially or fully) out of index columns.

The interface of this function is similar to pandas’ merge, but the following parameters are not
supported: `sort`, `copy`, `indicator`, and `validate`.
Additionally, when merging two frames that have conflicting columns names, and joining on indices,
then the resulting columns/column names can differ slightly from Pandas.

If variables are set (see [`DataFrame.variables()`](bach.DataFrame.variables/#bach.DataFrame.variables)), then values from self will be used in cases
where a variable name/dtype combination has been defined in both the `self` and `right`
DataFramesOrSeries.


* **Parameters**

    
    * **right** (*Union**[*[*DataFrame*](bach.DataFrame/#bach.DataFrame)*, *[*Series*](../Series/bach.Series/#bach.Series)*]*) – DataFrame or Series to join on self


    * **how** (*str*) – supported values: {‘left’, ‘right’, ‘outer’, ‘inner’, ‘cross’}


    * **on** (*Union**[**str**, **SeriesBoolean**, **List**[**Union**[**str**, **SeriesBoolean**]**]**]*) – optional, column(s) to join left and right on.


    * **left_on** (*Union**[**str**, **List**[**str**]**]*) – optional, column(s) from the left df to join on


    * **right_on** (*Union**[**str**, **List**[**str**]**]*) – optional, column(s) from the right df/series to join on


    * **left_index** (*bool*) – If true uses the index of the left df as columns to join on


    * **right_index** (*bool*) – If true uses the index of the right df/series as columns to join on


    * **suffixes** (*Tuple**[**str**, **str**]*) – Tuple of two strings. Will be used to suffix duplicate column names. Must make
    column names unique



* **Returns**

    A new Dataframe. The original frames are not modified.



* **Return type**

    [DataFrame](bach.DataFrame/#bach.DataFrame)


<!-- !! processed by numpydoc !! -->
