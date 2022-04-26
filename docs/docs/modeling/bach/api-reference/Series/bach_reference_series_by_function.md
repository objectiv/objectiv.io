---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-reference-series-by-function
slug: /modeling/bach/api-reference/Series/bach-reference-series-by-function/
title: Bach Series reference by function
---

Bach Series reference by function

Creation / re-framing

| [bach.Series.from_const](#bach.Series.from_const)`Series.from_const`(base, value, name)

 | Create an instance of this class, that represents a column with the given value.

 |
| [bach.Series.to_frame](#bach.Series.to_frame)`Series.to_frame`()

                                 | Create a DataFrame with the index and data from this Series.

                                                                                                                                       |
| [bach.Series.copy](#bach.Series.copy)`Series.copy`()

                                     | Return a copy of this Series.

                                                                                                                                                                      |
Value accessors

| [bach.Series.head](#bach.Series.head)`Series.head`([n])

                                  | Get the first n rows from this Series as a pandas.Series.

                                                                                                                                          |
| [bach.Series.to_pandas](#bach.Series.to_pandas)`Series.to_pandas`([limit])

                         | Get the data from this series as a pandas.Series :param limit: The limit to apply, either as a max amount of rows or a slice.

                                                                      |
| [bach.Series.array](#bach.Series.array)`Series.array`
                                      | .array property accessor akin pandas.Series.array

                                                                                                                                                  |
| [bach.Series.value](#bach.Series.value)`Series.value`
                                      | Retrieve the actual single value of this series.

                                                                                                                                                   |
Attributes and underlying data

Axes

| [bach.Series.name](#bach.Series.name)`Series.name`
                                       | Get this Series' name

                                                                                                                                                                              |
| [bach.Series.index](#bach.Series.index)`Series.index`
                                      | Get this Series' index dictionary {name: Series}

                                                                                                                                                   |
| [bach.Series.group_by](#bach.Series.group_by)`Series.group_by`
                                   | Get this Series' group_by, if any.

                                                                                                                                                                 |
| [bach.Series.sorted_ascending](#bach.Series.sorted_ascending)`Series.sorted_ascending`
                           | Get this Series' sorting by value.

                                                                                                                                                                 |
Types

| `Series.dtype`
                                      | The dtype of this Series.

                                                                                                                                                                          |
| [bach.Series.astype](#bach.Series.astype)`Series.astype`(dtype)

                              | Convert this Series to another type.

                                                                                                                                                               |
Sql Model

| [bach.Series.base_node](#bach.Series.base_node)`Series.base_node`
                                  | Get this Series' base_node

                                                                                                                                                                         |
| [bach.Series.view_sql](#bach.Series.view_sql)`Series.view_sql`()

                                 | 

                                                                                                                                                                                                   |
Comparison and set operations

| [bach.Series.all_values](#bach.Series.all_values)`Series.all_values`()

                               | For every row in this Series, do multiple evaluations where _all_ sub-evaluations should be True

                                                                                                   |
| [bach.Series.any_value](#bach.Series.any_value)`Series.any_value`()

                                | For every row in this Series, do multiple evaluations where _any_ sub-evaluation should be True

                                                                                                    |
| [bach.Series.exists](#bach.Series.exists)`Series.exists`()

                                   | Boolean operation that returns True if there are one or more values in this Series

                                                                                                                 |
| [bach.Series.isin](#bach.Series.isin)`Series.isin`(other)

                                | Evaluate for every row in this series whether the value is contained in other

                                                                                                                      |
| [bach.Series.isnull](#bach.Series.isnull)`Series.isnull`()

                                   | Evaluate for every row in this series whether the value is missing or NULL.

                                                                                                                        |
| [bach.Series.notnull](#bach.Series.notnull)`Series.notnull`()

                                  | Evaluate for every row in this series whether the value is not missing or NULL.

                                                                                                                    |
Conversion, reshaping, sorting

| [bach.Series.sort_index](#bach.Series.sort_index)`Series.sort_index`(\*[, ascending])

                 | Sort this Series by its index.

                                                                                                                                                                     |
| [bach.Series.sort_values](#bach.Series.sort_values)`Series.sort_values`(\*[, ascending])

                | Sort this Series by its values.

                                                                                                                                                                    |
| [bach.Series.fillna](#bach.Series.fillna)`Series.fillna`(other)

                              | Fill any NULL value with the given constant or other compatible Series

                                                                                                                             |
| [bach.Series.append](#bach.Series.append)`Series.append`(other[, ignore_index])

              | Append rows of other series to the caller series.

                                                                                                                                                  |
| [bach.Series.drop_duplicates](#bach.Series.drop_duplicates)`Series.drop_duplicates`([keep])

                    | Return a series with duplicated rows removed.

                                                                                                                                                      |
| [bach.Series.dropna](#bach.Series.dropna)`Series.dropna`()

                                   | Removes rows with missing values.

                                                                                                                                                                  |
| [bach.Series.unstack](#bach.Series.unstack)`Series.unstack`([level, fill_value, aggregation])

  | Pivot a level of the index labels.

                                                                                                                                                                 |
Function application, aggregation & windowing

| [bach.Series.agg](#bach.Series.agg)`Series.agg`(func[, group_by])

                      | Apply one or more aggregation functions to this Series.

                                                                                                                                            |
| [bach.Series.aggregate](#bach.Series.aggregate)`Series.aggregate`(func[, group_by])

                | Alias for `agg()`.

                                                                                                                                                                                   |
| [bach.Series.apply_func](#bach.Series.apply_func)`Series.apply_func`(func, \*args, \*\*kwargs)

          | Apply the given functions to this Series.

                                                                                                                                                          |
Computations & descriptive stats

All types

| [bach.Series.describe](#bach.Series.describe)`Series.describe`([percentiles, ...])

               | Returns descriptive statistics, it will vary based on what is provided

                                                                                                                             |
| [bach.Series.count](#bach.Series.count)`Series.count`([partition, skipna])

                 | Returns the amount of rows in each partition or for all values if none is given.

                                                                                                                   |
| [bach.Series.min](#bach.Series.min)`Series.min`([partition, skipna])

                   | Returns the minimum value in each partition or for all values if none is given.

                                                                                                                    |
| [bach.Series.max](#bach.Series.max)`Series.max`([partition, skipna])

                   | Returns the maximum value in each partition or for all values if none is given.

                                                                                                                    |
| [bach.Series.median](#bach.Series.median)`Series.median`([partition, skipna])

                | Returns the median in each partition or for all values if none is given.

                                                                                                                           |
| [bach.Series.mode](#bach.Series.mode)`Series.mode`([partition, skipna])

                  | Returns the mode in each partition or for all values if none is given.

                                                                                                                             |
| [bach.Series.nunique](#bach.Series.nunique)`Series.nunique`([partition, skipna])

               | Returns the amount of unique values in each partition or for all values if none is given.

                                                                                                          |
| [bach.Series.value_counts](#bach.Series.value_counts)`Series.value_counts`([normalize, sort, ...])

       | Returns a series containing counts per unique value

                                                                                                                                                |
Numeric

| [bach.SeriesAbstractNumeric.cut](#bach.SeriesAbstractNumeric.cut)`SeriesAbstractNumeric.cut`(bins[, right])

          | Segments values into bins.

                                                                                                                                                                         |
| [bach.SeriesAbstractNumeric.qcut](#bach.SeriesAbstractNumeric.qcut)`SeriesAbstractNumeric.qcut`(q)

                     | Segments values into equal-sized buckets based on rank or sample quantiles.

                                                                                                                        |
| [bach.SeriesAbstractNumeric.mean](#bach.SeriesAbstractNumeric.mean)`SeriesAbstractNumeric.mean`([partition, skipna])

   | Get the mean/average of the input values.

                                                                                                                                                          |
| [bach.SeriesAbstractNumeric.quantile](#bach.SeriesAbstractNumeric.quantile)`SeriesAbstractNumeric.quantile`([partition, q])

    | When q is a float or len(q) == 1, the resultant series index will remain In case multiple quantiles are calculated, the resultant series index will have all calculated quantiles as index values.

 |
| [bach.SeriesAbstractNumeric.sem](#bach.SeriesAbstractNumeric.sem)`SeriesAbstractNumeric.sem`([partition, ...])

       | Get the unbiased standard error of the mean.

                                                                                                                                                       |
| [bach.SeriesAbstractNumeric.sum](#bach.SeriesAbstractNumeric.sum)`SeriesAbstractNumeric.sum`([partition, ...])

       | Get the sum of the input values.

                                                                                                                                                                   |
| [bach.SeriesAbstractNumeric.std](#bach.SeriesAbstractNumeric.std)`SeriesAbstractNumeric.std`([partition, ...])

       | Get the standard deviation of the input values Normalized by N-1 by default.

                                                                                                                       |
| [bach.SeriesAbstractNumeric.var](#bach.SeriesAbstractNumeric.var)`SeriesAbstractNumeric.var`([partition, ...])

       | Get the sample variance of the input values (square of the sample standard deviation) Normalized by N-1 by default.

                                                                                |
| [bach.SeriesAbstractNumeric.scale](#bach.SeriesAbstractNumeric.scale)`SeriesAbstractNumeric.scale`([with_mean, ...])

     | Standardizes series based on mean and population standard deviation.

                                                                                                                               |
| [bach.SeriesAbstractNumeric.minmax_scale](#bach.SeriesAbstractNumeric.minmax_scale)`SeriesAbstractNumeric.minmax_scale`([...])

         | Scales series based on a given range.

                                                                                                                                                              |
Window

| [bach.Series.window_first_value](#bach.Series.window_first_value)`Series.window_first_value`([window])

               | Returns value evaluated at the row that is the first row of the window frame.

                                                                                                                      |
| [bach.Series.window_lag](#bach.Series.window_lag)`Series.window_lag`([offset, default, window])

      | Returns value evaluated at the row that is offset rows before the current row within the window

                                                                                                    |
| [bach.Series.window_nth_value](#bach.Series.window_nth_value)`Series.window_nth_value`(n[, window])

              | Returns value evaluated at the row that is the n'th row of the window frame.

                                                                                                                       |
| [bach.Series.window_lead](#bach.Series.window_lead)`Series.window_lead`([offset, default, window])

     | Returns value evaluated at the row that is offset rows after the current row within the window.

                                                                                                    |
| [bach.Series.window_last_value](#bach.Series.window_last_value)`Series.window_last_value`([window])

                | Returns value evaluated at the row that is the last row of the window frame.

                                                                                                                       |
| [bach.Series.window_row_number](#bach.Series.window_row_number)`Series.window_row_number`([window])

                | Returns the number of the current row within its window, counting from 1.

                                                                                                                          |
| [bach.Series.window_rank](#bach.Series.window_rank)`Series.window_rank`([window])

                      | Returns the rank of the current row, with gaps; that is, the row_number of the first row in its peer group.

                                                                                        |
| [bach.Series.window_dense_rank](#bach.Series.window_dense_rank)`Series.window_dense_rank`([window])

                | Returns the rank of the current row, without gaps; this function effectively counts peer groups.

                                                                                                   |
| [bach.Series.window_percent_rank](#bach.Series.window_percent_rank)`Series.window_percent_rank`([window])

              | Returns the relative rank of the current row, that is (rank - 1) / (total partition rows - 1).

                                                                                                     |
| [bach.Series.window_ntile](#bach.Series.window_ntile)`Series.window_ntile`([num_buckets, window])

        | Returns an integer ranging from 1 to the argument value, dividing the partition as equally as possible.

                                                                                            |
| [bach.Series.window_cume_dist](#bach.Series.window_cume_dist)`Series.window_cume_dist`([window])

                 | Returns the cumulative distribution, that is (number of partition rows preceding or peers with current row) / (total partition rows).

                                                              |
