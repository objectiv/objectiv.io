---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-reference-dataframe-by-function
slug: /modeling/bach/api-reference/DataFrame/bach-reference-dataframe-by-function/
title: DataFrame reference by function
---

DataFrame reference by function

Creation

| [bach.DataFrame.from_table](#bach.DataFrame.from_table)`DataFrame.from_table`(engine, table_name, index)

 | Instantiate a new DataFrame based on the content of an existing table in the database.

 |
| [bach.DataFrame.from_model](#bach.DataFrame.from_model)`DataFrame.from_model`(engine, model, index[, ...])

 | Instantiate a new DataFrame based on the result of the query defined in model.

                                                             |
| [bach.DataFrame.from_pandas](#bach.DataFrame.from_pandas)`DataFrame.from_pandas`(engine, df, ...[, ...])

     | Instantiate a new DataFrame based on the content of a Pandas DataFrame.

                                                                    |
| [bach.DataFrame.copy](#bach.DataFrame.copy)`DataFrame.copy`()

                                  | Return a copy of this DataFrame.

                                                                                                           |
Value accessors

| [bach.DataFrame.head](#bach.DataFrame.head)`DataFrame.head`([n])

                               | Similar to `to_pandas()` but only returns the first n rows.

                                                                                  |
| [bach.DataFrame.to_pandas](#bach.DataFrame.to_pandas)`DataFrame.to_pandas`([limit])

                      | Run a SQL query representing the current state of this DataFrame against the database and return the resulting data as a Pandas DataFrame.

 |
| [bach.DataFrame.loc](#bach.DataFrame.loc)`DataFrame.loc`
                                     | The `.loc` accessor offers different methods for label-based selection.

                                                                      |
Attributes and underlying data

Axes

| [bach.DataFrame.index](#bach.DataFrame.index)`DataFrame.index`
                                   | Get the index dictionary {name: Series}

                                                                                                    |
| [bach.DataFrame.data](#bach.DataFrame.data)`DataFrame.data`
                                    | Get the data dictionary {name: Series}

                                                                                                     |
| [bach.DataFrame.all_series](#bach.DataFrame.all_series)`DataFrame.all_series`
                              | Get all index and data Series in a dictionary {name: Series}

                                                                               |
| [bach.DataFrame.index_columns](#bach.DataFrame.index_columns)`DataFrame.index_columns`
                           | Get all the index columns' names in a List

                                                                                                 |
| [bach.DataFrame.data_columns](#bach.DataFrame.data_columns)`DataFrame.data_columns`
                            | Get all the data Series' names in a List

                                                                                                   |
| [bach.DataFrame.group_by](#bach.DataFrame.group_by)`DataFrame.group_by`
                                | Get this DataFrame's grouping, if any.

                                                                                                     |
| [bach.DataFrame.order_by](#bach.DataFrame.order_by)`DataFrame.order_by`
                                | Get the current sort order, if any.

                                                                                                        |
Types

| [bach.DataFrame.dtypes](#bach.DataFrame.dtypes)`DataFrame.dtypes`
                                  | Get the data Series' dtypes in a dictionary {name: dtype}

                                                                                  |
| [bach.DataFrame.index_dtypes](#bach.DataFrame.index_dtypes)`DataFrame.index_dtypes`
                            | Get the index Series' dtypes in a dictionary {name: dtype}

                                                                                 |
| [bach.DataFrame.astype](#bach.DataFrame.astype)`DataFrame.astype`(dtype)

                           | Cast all or some of the data columns to a certain dtype.

                                                                                   |
Sql Model

| [bach.DataFrame.materialize](#bach.DataFrame.materialize)`DataFrame.materialize`([node_name, inplace, ...])

  | Create a copy of this DataFrame with as base_node the current DataFrame's state.

                                                           |
| [bach.DataFrame.get_sample](#bach.DataFrame.get_sample)`DataFrame.get_sample`(table_name[, filter, ...])

   | Returns a DataFrame whose data is a sample of the current DataFrame object.

                                                                |
| [bach.DataFrame.get_unsampled](#bach.DataFrame.get_unsampled)`DataFrame.get_unsampled`()

                         | Return a copy of the current sampled DataFrame, that undoes calling `get_sample()` earlier.

                                                  |
| [bach.DataFrame.view_sql](#bach.DataFrame.view_sql)`DataFrame.view_sql`([limit])

                       | Translate the current state of this DataFrame into a SQL query.

                                                                            |
Variables

| [bach.DataFrame.create_variable](#bach.DataFrame.create_variable)`DataFrame.create_variable`(name, value, \*[, ...])

  | Create a Series object that can be used as a variable, within the returned DataFrame.

                                                      |
| [bach.DataFrame.set_variable](#bach.DataFrame.set_variable)`DataFrame.set_variable`(name, value, \*[, dtype])

   | Return a copy of this DataFrame with the variable value updated.

                                                                           |
| [bach.DataFrame.get_all_variable_usage](#bach.DataFrame.get_all_variable_usage)`DataFrame.get_all_variable_usage`()

                | Get all variables that influence the values of this DataFrame.

                                                                             |
Reshaping, indexing, sorting & merging

| [bach.DataFrame.sort_index](#bach.DataFrame.sort_index)`DataFrame.sort_index`([level, ascending])

          | Sort dataframe by index levels.

                                                                                                            |
| [bach.DataFrame.sort_values](#bach.DataFrame.sort_values)`DataFrame.sort_values`(by[, ascending])

            | Create a new DataFrame with the specified sorting order.

                                                                                   |
| [bach.DataFrame.rename](#bach.DataFrame.rename)`DataFrame.rename`([mapper, index, columns, ...])

   | Rename columns.

                                                                                                                            |
| [bach.DataFrame.drop](#bach.DataFrame.drop)`DataFrame.drop`([labels, index, columns, ...])

     | Drop columns from the DataFrame

                                                                                                            |
| [bach.DataFrame.drop_duplicates](#bach.DataFrame.drop_duplicates)`DataFrame.drop_duplicates`([subset, keep, ...])

    | Return a dataframe with duplicated rows removed based on all series labels or a subset of labels.

                                          |
| [bach.DataFrame.dropna](#bach.DataFrame.dropna)`DataFrame.dropna`(\*[, axis, how, thresh, subset])

  | Removes rows with missing values (NaN, None and SQL NULL).

                                                                                 |
| [bach.DataFrame.reset_index](#bach.DataFrame.reset_index)`DataFrame.reset_index`([level, drop])

              | Drops the current index.

                                                                                                                   |
| [bach.DataFrame.set_index](#bach.DataFrame.set_index)`DataFrame.set_index`(keys[, drop, append])

         | Set this dataframe's index to the the index given in keys

                                                                                  |
| [bach.DataFrame.merge](#bach.DataFrame.merge)`DataFrame.merge`(right[, how, on, left_on, ...])

   | Join the right Dataframe or Series on self.

                                                                                                |
| [bach.DataFrame.append](#bach.DataFrame.append)`DataFrame.append`(other[, ignore_index, sort])

     | Append rows of other dataframes to the the caller dataframe.

                                                                               |
| [bach.DataFrame.fillna](#bach.DataFrame.fillna)`DataFrame.fillna`(\*[, value, method, axis, ...])

   | Fill any NULL value using a method or with a given value.

                                                                                  |
| [bach.DataFrame.ffill](#bach.DataFrame.ffill)`DataFrame.ffill`([sort_by, ascending])

             | Fill missing values by propagating the last non-nullable value in each series.

                                                             |
| [bach.DataFrame.bfill](#bach.DataFrame.bfill)`DataFrame.bfill`([sort_by, ascending])

             | Fill missing values by using the next non-nullable value in each series.

                                                                   |
| [bach.DataFrame.stack](#bach.DataFrame.stack)`DataFrame.stack`([dropna])

                         | Stacks all data_columns into a single index series.

                                                                                        |
| [bach.DataFrame.unstack](#bach.DataFrame.unstack)`DataFrame.unstack`([level, fill_value, ...])

       | Pivot a level of the index labels.

                                                                                                         |
| [bach.DataFrame.scale](#bach.DataFrame.scale)`DataFrame.scale`([with_mean, with_std])

            | Standardizes all numeric series based on mean and population standard deviation.

                                                           |
| [bach.DataFrame.minmax_scale](#bach.DataFrame.minmax_scale)`DataFrame.minmax_scale`([feature_range])

           | Scales all numeric series based on a given range.

                                                                                          |
| [bach.DataFrame.get_dummies](#bach.DataFrame.get_dummies)`DataFrame.get_dummies`([prefix, prefix_sep, ...])

  | Convert each unique category/value from a string series into a dummy/indicator variable.

                                                   |
Aggregation & windowing

| [bach.DataFrame.agg](#bach.DataFrame.agg)`DataFrame.agg`(func[, axis, numeric_only])

         | Aggregate using one or more operations over the specified axis.

                                                                            |
| [bach.DataFrame.aggregate](#bach.DataFrame.aggregate)`DataFrame.aggregate`(func[, axis, numeric_only])

   | Alias for `agg()`

                                                                                                                            |
| [bach.DataFrame.groupby](#bach.DataFrame.groupby)`DataFrame.groupby`([by])

                           | Group by any of the series currently in this DataDrame, both from index as well as data.

                                                   |
| [bach.DataFrame.rollup](#bach.DataFrame.rollup)`DataFrame.rollup`(by)

                              | Group by and roll up over the column(s) by, replacing any current grouping.

                                                                |
| [bach.DataFrame.cube](#bach.DataFrame.cube)`DataFrame.cube`(by)

                                | Group by and cube over the column(s) by.

                                                                                                   |
| [bach.DataFrame.window](#bach.DataFrame.window)`DataFrame.window`(\*\*frame_args)

                    | Create a window on the current dataframe grouping and its sorting.

                                                                         |
| [bach.DataFrame.rolling](#bach.DataFrame.rolling)`DataFrame.rolling`(window[, min_periods, ...])

     | A rolling window of size 'window', by default right aligned.

                                                                               |
| [bach.DataFrame.expanding](#bach.DataFrame.expanding)`DataFrame.expanding`([min_periods, center])

        | Create an expanding window starting with the first row in the group, with at least min_period observations.

                                |
Computations & descriptive stats

All types

| [bach.DataFrame.describe](#bach.DataFrame.describe)`DataFrame.describe`([percentiles, include, ...])

   | Returns descriptive statistics.

                                                                                                            |
| [bach.DataFrame.count](#bach.DataFrame.count)`DataFrame.count`([axis, level, numeric_only])

      | Count all non-NULL values in each column.

                                                                                                  |
| [bach.DataFrame.min](#bach.DataFrame.min)`DataFrame.min`([axis, skipna, level, ...])

         | Returns the minimum of all values in each column.

                                                                                          |
| [bach.DataFrame.max](#bach.DataFrame.max)`DataFrame.max`([axis, skipna, level, ...])

         | Returns the maximum of all values in each column.

                                                                                          |
| [bach.DataFrame.median](#bach.DataFrame.median)`DataFrame.median`([axis, skipna, level, ...])

      | Returns the median of all values in each column.

                                                                                           |
| [bach.DataFrame.mode](#bach.DataFrame.mode)`DataFrame.mode`([axis, skipna, level, ...])

        | Returns the mode of all values in each column.

                                                                                             |
| [bach.DataFrame.nunique](#bach.DataFrame.nunique)`DataFrame.nunique`([axis, skipna])

                 | Returns the number of unique values in each column.

                                                                                        |
| [bach.DataFrame.value_counts](#bach.DataFrame.value_counts)`DataFrame.value_counts`([subset, normalize, ...])

  | Returns a series containing counts of each unique row in the DataFrame

                                                                     |
Numeric

| [bach.DataFrame.mean](#bach.DataFrame.mean)`DataFrame.mean`([axis, skipna, level, ...])

        | Returns the mean of all values in each column.

                                                                                             |
| [bach.DataFrame.quantile](#bach.DataFrame.quantile)`DataFrame.quantile`([q, axis])

                     | Returns the quantile per numeric/timedelta column.

                                                                                         |
| [bach.DataFrame.sem](#bach.DataFrame.sem)`DataFrame.sem`([axis, skipna, level, ddof, ...])

   | Returns the unbiased standard error of the mean of each column.

                                                                            |
| [bach.DataFrame.sum](#bach.DataFrame.sum)`DataFrame.sum`([axis, skipna, level, ...])

         | Returns the sum of all values in each column.

                                                                                              |
| [bach.DataFrame.std](#bach.DataFrame.std)`DataFrame.std`([axis, skipna, level, ddof, ...])

   | Returns the sample standard deviation of each column.

                                                                                      |
| [bach.DataFrame.var](#bach.DataFrame.var)`DataFrame.var`([axis, skipna, level, ddof, ...])

   | Returns the unbiased variance of each column.

                                                                                              |
Visualization

| [bach.DataFrame.plot](#bach.DataFrame.plot)`DataFrame.plot`
                                    | The `.plot` accessor offers different methods for data visualization.

                                                                        |
