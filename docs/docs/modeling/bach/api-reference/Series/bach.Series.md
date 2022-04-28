---
date: '2022-04-28T14:46:08.106Z'
id: bach-api-reference-series-bach-series
slug: /modeling/bach/api-reference/Series/bach.Series/
title: bach.Series
---

# bach.Series


### _class_ bach.Series(engine, base_node, index, name, expression, group_by, sorted_ascending, index_sorting)
Series is an abstract class. An instance of Series represents a column of data. Specific subclasses are
used to represent specific types of data and enable operations on that data.

It can be used as a separate object to just deal with a single list of values. There are many standard
operations on Series available to do operations like add or subtract, to create aggregations like
[`nunique()`](bach.Series.nunique/#bach.Series.nunique) or [`count()`](bach.Series.count/#bach.Series.count), or to create new sub-Series, like [`unique()`](bach.Series.unique/#bach.Series.unique).

<!-- !! processed by numpydoc !! -->
### Methods

| &nbsp;                                           | &nbsp;                                                                                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [`agg`](bach.Series.agg/#bach.Series.agg)(func[, group_by])                            | Apply one or more aggregation functions to this Series.                                                                                     |
| [`aggregate`](bach.Series.aggregate/#bach.Series.aggregate)(func[, group_by])                      | Alias for [`agg()`](bach.Series.agg/#bach.Series.agg).                                                                                                                            |
| [`all_values`](bach.Series.all-values/#bach.Series.all-values)()                                     | For every row in this Series, do multiple evaluations where _all_ sub-evaluations should be True                                            |
| [`any_value`](bach.Series.any-value/#bach.Series.any-value)()                                      | For every row in this Series, do multiple evaluations where _any_ sub-evaluation should be True                                             |
| [`append`](bach.Series.append/#bach.Series.append)(other[, ignore_index])                    | Append rows of other series to the caller series.                                                                                           |
| [`apply_func`](bach.Series.apply-func/#bach.Series.apply-func)(func, \*args, \*\*kwargs)                | Apply the given functions to this Series.                                                                                                   |
| [`astype`](bach.Series.astype/#bach.Series.astype)(dtype)                                    | Convert this Series to another type.                                                                                                        |
| [`copy`](bach.Series.copy/#bach.Series.copy)()                                           | Return a copy of this Series.                                                                                                               |
| [`count`](bach.Series.count/#bach.Series.count)([partition, skipna])                       | Returns the amount of rows in each partition or for all values if none is given.                                                            |
| [`describe`](bach.Series.describe/#bach.Series.describe)([percentiles, datetime_is_numeric])     | Returns descriptive statistics, it will vary based on what is provided                                                                      |
| [`drop_duplicates`](bach.Series.drop-duplicates/#bach.Series.drop-duplicates)([keep])                          | Return a series with duplicated rows removed.                                                                                               |
| [`dropna`](bach.Series.dropna/#bach.Series.dropna)()                                         | Removes rows with missing values.                                                                                                           |
| [`exists`](bach.Series.exists/#bach.Series.exists)()                                         | Boolean operation that returns True if there are one or more values in this Series                                                          |
| [`fillna`](bach.Series.fillna/#bach.Series.fillna)(other)                                    | Fill any NULL value with the given constant or other compatible Series                                                                      |
| [`from_const`](bach.Series.from-const/#bach.Series.from-const)(base, value, name)                    | Create an instance of this class, that represents a column with the given value.                                                            |
| [`get_db_dtype`](bach.Series.get-db-dtype/#bach.Series.get-db-dtype)(dialect)                            | Given the db_dtype of this Series, for the given database dialect.                                                                          |
| [`head`](bach.Series.head/#bach.Series.head)([n])                                        | Get the first n rows from this Series as a pandas.Series.                                                                                   |
| [`isin`](bach.Series.isin/#bach.Series.isin)(other)                                      | Evaluate for every row in this series whether the value is contained in other                                                               |
| [`isnull`](bach.Series.isnull/#bach.Series.isnull)()                                         | Evaluate for every row in this series whether the value is missing or NULL.                                                                 |
| [`max`](bach.Series.max/#bach.Series.max)([partition, skipna])                         | Returns the maximum value in each partition or for all values if none is given.                                                             |
| [`median`](bach.Series.median/#bach.Series.median)([partition, skipna])                      | Returns the median in each partition or for all values if none is given.                                                                    |
| [`min`](bach.Series.min/#bach.Series.min)([partition, skipna])                         | Returns the minimum value in each partition or for all values if none is given.                                                             |
| [`mode`](bach.Series.mode/#bach.Series.mode)([partition, skipna])                        | Returns the mode in each partition or for all values if none is given.                                                                      |
| [`notnull`](bach.Series.notnull/#bach.Series.notnull)()                                        | Evaluate for every row in this series whether the value is not missing or NULL.                                                             |
| [`nunique`](bach.Series.nunique/#bach.Series.nunique)([partition, skipna])                     | Returns the amount of unique values in each partition or for all values if none is given.                                                   |
| [`sort_index`](bach.Series.sort-index/#bach.Series.sort-index)(\*[, ascending])                       | Sort this Series by its index.                                                                                                              |
| [`sort_values`](bach.Series.sort-values/#bach.Series.sort-values)(\*[, ascending])                      | Sort this Series by its values.                                                                                                             |
| [`to_frame`](bach.Series.to-frame/#bach.Series.to-frame)()                                       | Create a DataFrame with the index and data from this Series.                                                                                |
| [`to_numpy`](bach.Series.to-numpy/#bach.Series.to-numpy)()                                       | Return a Numpy representation of the Series akin `pandas.Series.to_numpy`                                                                     |
| [`to_pandas`](bach.Series.to-pandas/#bach.Series.to-pandas)([limit])                               | Get the data from this series as a pandas.Series :param limit: The limit to apply, either as a max amount of rows or a slice.               |
| [`unique`](bach.Series.unique/#bach.Series.unique)([partition, skipna])                      | Return all unique values in this Series.                                                                                                    |
| [`unstack`](bach.Series.unstack/#bach.Series.unstack)([level, fill_value, aggregation])        | Pivot a level of the index labels.                                                                                                          |
| [`value_counts`](bach.Series.value-counts/#bach.Series.value-counts)([normalize, sort, ascending, ...])  | Returns a series containing counts per unique value                                                                                         |
| [`view_sql`](bach.Series.view-sql/#bach.Series.view-sql)()                                       |                                                                                                                                             |
| [`window_cume_dist`](bach.Series.window-cume-dist/#bach.Series.window-cume-dist)([window])                       | Returns the cumulative distribution, that is (number of partition rows preceding or peers with current row) / (total partition rows).       |
| [`window_dense_rank`](bach.Series.window-dense-rank/#bach.Series.window-dense-rank)([window])                      | Returns the rank of the current row, without gaps; this function effectively counts peer groups.                                            |
| [`window_first_value`](bach.Series.window-first-value/#bach.Series.window-first-value)([window])                     | Returns value evaluated at the row that is the first row of the window frame.                                                               |
| [`window_lag`](bach.Series.window-lag/#bach.Series.window-lag)([offset, default, window])            | Returns value evaluated at the row that is offset rows before the current row within the window                                             |
| [`window_last_value`](bach.Series.window-last-value/#bach.Series.window-last-value)([window])                      | Returns value evaluated at the row that is the last row of the window frame.                                                                |
| [`window_lead`](bach.Series.window-lead/#bach.Series.window-lead)([offset, default, window])           | Returns value evaluated at the row that is offset rows after the current row within the window.                                             |
| [`window_nth_value`](bach.Series.window-nth-value/#bach.Series.window-nth-value)(n[, window])                    | Returns value evaluated at the row that is the n'th row of the window frame.                                                                |
| [`window_ntile`](bach.Series.window-ntile/#bach.Series.window-ntile)([num_buckets, window])              | Returns an integer ranging from 1 to the argument value, dividing the partition as equally as possible.                                     |
| [`window_percent_rank`](bach.Series.window-percent-rank/#bach.Series.window-percent-rank)([window])                    | Returns the relative rank of the current row, that is (rank - 1) / (total partition rows - 1).                                              |
| [`window_rank`](bach.Series.window-rank/#bach.Series.window-rank)([window])                            | Returns the rank of the current row, with gaps; that is, the row_number of the first row in its peer group.                                 |
| [`window_row_number`](bach.Series.window-row-number/#bach.Series.window-row-number)([window])                      | Returns the number of the current row within its window, counting from 1.                                                                   |

### Attributes

| &nbsp;                                           | &nbsp;                                                                                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [`array`](bach.Series.array/#bach.Series.array)                                            | .array property accessor akin pandas.Series.array                                                                                           |
| [`base_node`](bach.Series.base-node/#bach.Series.base-node)                                        | Get this Series' base_node                                                                                                                  |
| [`group_by`](bach.Series.group-by/#bach.Series.group-by)                                         | Get this Series' group_by, if any.                                                                                                          |
| [`index`](bach.Series.index/#bach.Series.index)                                            | Get this Series' index dictionary {name: Series}                                                                                            |
| [`index_sorting`](bach.Series.index-sorting/#bach.Series.index-sorting)                                    | Get this Series' index sorting.                                                                                                             |
| [`name`](bach.Series.name/#bach.Series.name)                                             | Get this Series' name                                                                                                                       |
| [`sorted_ascending`](bach.Series.sorted-ascending/#bach.Series.sorted-ascending)                                 | Get this Series' sorting by value.                                                                                                          |
| [`value`](bach.Series.value/#bach.Series.value)                                            | Retrieve the actual single value of this series.                                                                                            |
