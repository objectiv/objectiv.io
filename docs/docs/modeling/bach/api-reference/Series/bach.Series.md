---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series
slug: /modeling/bach/api-reference/Series/bach.Series/
title: bach.Series
---

bach.Series


### _class_ bach.Series(engine, base_node, index, name, expression, group_by, sorted_ascending, index_sorting)
Series is an abstract class. An instance of Series represents a column of data. Specific subclasses are
used to represent specific types of data and enable operations on that data.

It can be used as a separate object to just deal with a single list of values. There are many standard
operations on Series available to do operations like add or subtract, to create aggregations like
[bach.Series.nunique](#bach.Series.nunique)`nunique()` or [bach.Series.count](#bach.Series.count)`count()`, or to create new sub-Series, like [bach.Series.unique](#bach.Series.unique)`unique()`.

<!-- !! processed by numpydoc !! -->
### Methods

| [bach.Series.agg](#bach.Series.agg)`agg`(func[, group_by])

 | Apply one or more aggregation functions to this Series.

 |
| [bach.Series.aggregate](#bach.Series.aggregate)`aggregate`(func[, group_by])

                       | Alias for [bach.Series.agg](#bach.Series.agg)`agg()`.

                                                                                                                           |
| [bach.Series.all_values](#bach.Series.all_values)`all_values`()

                                      | For every row in this Series, do multiple evaluations where _all_ sub-evaluations should be True

                                           |
| [bach.Series.any_value](#bach.Series.any_value)`any_value`()

                                       | For every row in this Series, do multiple evaluations where _any_ sub-evaluation should be True

                                            |
| [bach.Series.append](#bach.Series.append)`append`(other[, ignore_index])

                     | Append rows of other series to the caller series.

                                                                                          |
| [bach.Series.apply_func](#bach.Series.apply_func)`apply_func`(func, \*args, \*\*kwargs)

                 | Apply the given functions to this Series.

                                                                                                  |
| [bach.Series.astype](#bach.Series.astype)`astype`(dtype)

                                     | Convert this Series to another type.

                                                                                                       |
| [bach.Series.copy](#bach.Series.copy)`copy`()

                                            | Return a copy of this Series.

                                                                                                              |
| [bach.Series.count](#bach.Series.count)`count`([partition, skipna])

                        | Returns the amount of rows in each partition or for all values if none is given.

                                                           |
| [bach.Series.describe](#bach.Series.describe)`describe`([percentiles, datetime_is_numeric])

      | Returns descriptive statistics, it will vary based on what is provided

                                                                     |
| [bach.Series.drop_duplicates](#bach.Series.drop_duplicates)`drop_duplicates`([keep])

                           | Return a series with duplicated rows removed.

                                                                                              |
| [bach.Series.dropna](#bach.Series.dropna)`dropna`()

                                          | Removes rows with missing values.

                                                                                                          |
| [bach.Series.exists](#bach.Series.exists)`exists`()

                                          | Boolean operation that returns True if there are one or more values in this Series

                                                         |
| [bach.Series.fillna](#bach.Series.fillna)`fillna`(other)

                                     | Fill any NULL value with the given constant or other compatible Series

                                                                     |
| [bach.Series.from_const](#bach.Series.from_const)`from_const`(base, value, name)

                     | Create an instance of this class, that represents a column with the given value.

                                                           |
| [bach.Series.get_db_dtype](#bach.Series.get_db_dtype)`get_db_dtype`(dialect)

                             | Given the db_dtype of this Series, for the given database dialect.

                                                                         |
| [bach.Series.head](#bach.Series.head)`head`([n])

                                         | Get the first n rows from this Series as a pandas.Series.

                                                                                  |
| [bach.Series.isin](#bach.Series.isin)`isin`(other)

                                       | Evaluate for every row in this series whether the value is contained in other

                                                              |
| [bach.Series.isnull](#bach.Series.isnull)`isnull`()

                                          | Evaluate for every row in this series whether the value is missing or NULL.

                                                                |
| [bach.Series.max](#bach.Series.max)`max`([partition, skipna])

                          | Returns the maximum value in each partition or for all values if none is given.

                                                            |
| [bach.Series.median](#bach.Series.median)`median`([partition, skipna])

                       | Returns the median in each partition or for all values if none is given.

                                                                   |
| [bach.Series.min](#bach.Series.min)`min`([partition, skipna])

                          | Returns the minimum value in each partition or for all values if none is given.

                                                            |
| [bach.Series.mode](#bach.Series.mode)`mode`([partition, skipna])

                         | Returns the mode in each partition or for all values if none is given.

                                                                     |
| [bach.Series.notnull](#bach.Series.notnull)`notnull`()

                                         | Evaluate for every row in this series whether the value is not missing or NULL.

                                                            |
| [bach.Series.nunique](#bach.Series.nunique)`nunique`([partition, skipna])

                      | Returns the amount of unique values in each partition or for all values if none is given.

                                                  |
| [bach.Series.sort_index](#bach.Series.sort_index)`sort_index`(\*[, ascending])

                        | Sort this Series by its index.

                                                                                                             |
| [bach.Series.sort_values](#bach.Series.sort_values)`sort_values`(\*[, ascending])

                       | Sort this Series by its values.

                                                                                                            |
| [bach.Series.to_frame](#bach.Series.to_frame)`to_frame`()

                                        | Create a DataFrame with the index and data from this Series.

                                                                               |
| [bach.Series.to_numpy](#bach.Series.to_numpy)`to_numpy`()

                                        | Return a Numpy representation of the Series akin `pandas.Series.to_numpy`

                                                                    |
| [bach.Series.to_pandas](#bach.Series.to_pandas)`to_pandas`([limit])

                                | Get the data from this series as a pandas.Series :param limit: The limit to apply, either as a max amount of rows or a slice.

              |
| [bach.Series.unique](#bach.Series.unique)`unique`([partition, skipna])

                       | Return all unique values in this Series.

                                                                                                   |
| [bach.Series.unstack](#bach.Series.unstack)`unstack`([level, fill_value, aggregation])

         | Pivot a level of the index labels.

                                                                                                         |
| [bach.Series.value_counts](#bach.Series.value_counts)`value_counts`([normalize, sort, ascending, ...])

   | Returns a series containing counts per unique value

                                                                                        |
| [bach.Series.view_sql](#bach.Series.view_sql)`view_sql`()

                                        | 

                                                                                                                                           |
| [bach.Series.window_cume_dist](#bach.Series.window_cume_dist)`window_cume_dist`([window])

                        | Returns the cumulative distribution, that is (number of partition rows preceding or peers with current row) / (total partition rows).

      |
| [bach.Series.window_dense_rank](#bach.Series.window_dense_rank)`window_dense_rank`([window])

                       | Returns the rank of the current row, without gaps; this function effectively counts peer groups.

                                           |
| [bach.Series.window_first_value](#bach.Series.window_first_value)`window_first_value`([window])

                      | Returns value evaluated at the row that is the first row of the window frame.

                                                              |
| [bach.Series.window_lag](#bach.Series.window_lag)`window_lag`([offset, default, window])

             | Returns value evaluated at the row that is offset rows before the current row within the window

                                            |
| [bach.Series.window_last_value](#bach.Series.window_last_value)`window_last_value`([window])

                       | Returns value evaluated at the row that is the last row of the window frame.

                                                               |
| [bach.Series.window_lead](#bach.Series.window_lead)`window_lead`([offset, default, window])

            | Returns value evaluated at the row that is offset rows after the current row within the window.

                                            |
| [bach.Series.window_nth_value](#bach.Series.window_nth_value)`window_nth_value`(n[, window])

                     | Returns value evaluated at the row that is the n'th row of the window frame.

                                                               |
| [bach.Series.window_ntile](#bach.Series.window_ntile)`window_ntile`([num_buckets, window])

               | Returns an integer ranging from 1 to the argument value, dividing the partition as equally as possible.

                                    |
| [bach.Series.window_percent_rank](#bach.Series.window_percent_rank)`window_percent_rank`([window])

                     | Returns the relative rank of the current row, that is (rank - 1) / (total partition rows - 1).

                                             |
| [bach.Series.window_rank](#bach.Series.window_rank)`window_rank`([window])

                             | Returns the rank of the current row, with gaps; that is, the row_number of the first row in its peer group.

                                |
| [bach.Series.window_row_number](#bach.Series.window_row_number)`window_row_number`([window])

                       | Returns the number of the current row within its window, counting from 1.

                                                                  |
### Attributes

| [bach.Series.array](#bach.Series.array)`array`
                                             | .array property accessor akin pandas.Series.array

                                                                                          |
| [bach.Series.base_node](#bach.Series.base_node)`base_node`
                                         | Get this Series' base_node

                                                                                                                 |
| [bach.Series.group_by](#bach.Series.group_by)`group_by`
                                          | Get this Series' group_by, if any.

                                                                                                         |
| [bach.Series.index](#bach.Series.index)`index`
                                             | Get this Series' index dictionary {name: Series}

                                                                                           |
| [bach.Series.index_sorting](#bach.Series.index_sorting)`index_sorting`
                                     | Get this Series' index sorting.

                                                                                                            |
| [bach.Series.name](#bach.Series.name)`name`
                                              | Get this Series' name

                                                                                                                      |
| [bach.Series.sorted_ascending](#bach.Series.sorted_ascending)`sorted_ascending`
                                  | Get this Series' sorting by value.

                                                                                                         |
| [bach.Series.value](#bach.Series.value)`value`
                                             | Retrieve the actual single value of this series.

                                                                                           |
