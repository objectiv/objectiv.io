---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame/
title: bach.DataFrame
---

bach.DataFrame


### _class_ bach.DataFrame(engine, base_node, index, series, group_by, order_by, savepoints, variables=None)
A mutable DataFrame representing tabular data in a database and enabling operations on that data.

A Bach DataFrame object can be used to process large amounts of data on a database, while using an api
that is based on the pandas api. This allows the database to group and aggregate data, sample data and
do other operations that are not suitable for in memory processing. At any time it is possible to write
your Bach DataFrame to a pandas DataFrame.

**Usage**

It should generally not be required to construct DataFrame instances manually. A DataFrame can be
constructed using the any of the bach classmethods like [bach.DataFrame.from_table](#bach.DataFrame.from_table)`from_table()`, [bach.DataFrame.from_model](#bach.DataFrame.from_model)`from_model()`, or
[bach.DataFrame.from_pandas](#bach.DataFrame.from_pandas)`from_pandas()`. The returned DataFrame can be thought of as a dict-like container for Bach
Series objects.

**Getting & Setting columns**

Getting data works similar to pandas DataFrame. Single columns can be retrieved with `df['column_name']`
as well as `df.column_name`. This will return a single Bach Series. Multiple columns can be retrieved by
passing a list of column names like: `df[['column_name','other_column_name']]`. This returns a Bach
DataFrame.

A selection of rows can be selected with python slicing. I.e. `df[2:5]` returns row 2 to 5. Only
positive integers are currently accepted in slices.

SeriesBoolean can also be used to filter DataFrames, and these Series are easily created using comparison
operations like equals (==), less-than (<), not(~) on two series, or series with values:
`boolean_series = a == b`. Boolean indexing can be done like `df[df.column == 5]`. Only rows are
returned for which the condition is true.

Label-based selection is also supported by using the `.loc` attribute. Each label is interpreted
as a value contained by the index column. Unlike Pandas, if the label is not found,
no exception will be raised. I.e. `df.loc['a']` returns rows where the index series is equal to `a`.
Slicing can also be performed (the dataframe must be sorted). I.e. `df['a':'d', 'col1:col3']`. This will
return all rows/columns included in the slicing, where the start and stop are inclusive.
For more information about label-based selection, please take a look to [bach.DataFrame.loc](#bach.DataFrame.loc)`loc`.

**Moving Series around**

Values, Series or DataFrames can be set to another DataFrame. Setting Series or DataFrames to another
DataFrame is possible if they share the same base node or index dtype. DataFrames and Series share the
same base node if they originate from the same data source. In most cases this means that the series
that is to be set to the DataFrame is a result of operations on the DataFrame that is started with.
If a Series or DataFrame do not share the same base node, the new column is or columns are set using a
merge on the index. This works for one level indexes where the dtype of the series is the same as the
DataFrame’s index dtype.

**Examples**

```python
df['a'] = df.column_name + 5
df['b'] = ''
```

**Database access**

The data of this DataFrame is always held in the database and operations on the data are performed
by the database, not in local memory. Data will only be transferred to local memory when an
explicit call is made to one of the functions that transfers data:


* [bach.DataFrame.head](#bach.DataFrame.head)`head()`


* [bach.DataFrame.to_pandas](#bach.DataFrame.to_pandas)`to_pandas()`


* [bach.DataFrame.to_numpy](#bach.DataFrame.to_numpy)`to_numpy()`


* [bach.DataFrame.get_sample](#bach.DataFrame.get_sample)`get_sample()`


* The property accessors [bach.Series.value](#bach.Series.value)`Series.value` (Series only), `values`

Other functions will not transfer data, nor will they trigger any operations to run on the database.
Operations on the DataFrame are combined and translated to a single SQL query, which is executed
only when one of the above mentioned data-transfer functions is called.

The API of this DataFrame is partially compatible with Pandas DataFrames. For more on Pandas
DataFrames see https://pandas.pydata.org/docs/reference/frame.html

<!-- !! processed by numpydoc !! -->
### Methods

| [bach.DataFrame.agg](#bach.DataFrame.agg)`agg`(func[, axis, numeric_only])

 | Aggregate using one or more operations over the specified axis.

 |
| [bach.DataFrame.aggregate](#bach.DataFrame.aggregate)`aggregate`(func[, axis, numeric_only])

 | Alias for [bach.DataFrame.agg](#bach.DataFrame.agg)`agg()`

                                                 |
| [bach.DataFrame.append](#bach.DataFrame.append)`append`(other[, ignore_index, sort])

   | Append rows of other dataframes to the the caller dataframe.

    |
| [bach.DataFrame.astype](#bach.DataFrame.astype)`astype`(dtype)

                         | Cast all or some of the data columns to a certain dtype.

        |
| [bach.DataFrame.bfill](#bach.DataFrame.bfill)`bfill`([sort_by, ascending])

           | Fill missing values by using the next non-nullable value in each series.

 |
| [bach.DataFrame.copy](#bach.DataFrame.copy)`copy`()

                                | Return a copy of this DataFrame.

                                         |
| [bach.DataFrame.count](#bach.DataFrame.count)`count`([axis, level, numeric_only])

    | Count all non-NULL values in each column.

                                |
| [bach.DataFrame.create_variable](#bach.DataFrame.create_variable)`create_variable`(name, value, \*[, dtype])

 | Create a Series object that can be used as a variable, within the returned DataFrame.

 |
| [bach.DataFrame.cube](#bach.DataFrame.cube)`cube`(by)

                                 | Group by and cube over the column(s) by.

                                              |
| [bach.DataFrame.describe](#bach.DataFrame.describe)`describe`([percentiles, include, exclude, ...])

 | Returns descriptive statistics.

                                                       |
| [bach.DataFrame.drop](#bach.DataFrame.drop)`drop`([labels, index, columns, level, errors])

  | Drop columns from the DataFrame

                                                       |
| [bach.DataFrame.drop_duplicates](#bach.DataFrame.drop_duplicates)`drop_duplicates`([subset, keep, ...])

           | Return a dataframe with duplicated rows removed based on all series labels or a subset of labels.

 |
| [bach.DataFrame.dropna](#bach.DataFrame.dropna)`dropna`(\*[, axis, how, thresh, subset])

         | Removes rows with missing values (NaN, None and SQL NULL).

                                        |
| [bach.DataFrame.expanding](#bach.DataFrame.expanding)`expanding`([min_periods, center])

               | Create an expanding window starting with the first row in the group, with at least min_period observations.

 |
| [bach.DataFrame.ffill](#bach.DataFrame.ffill)`ffill`([sort_by, ascending])

                    | Fill missing values by propagating the last non-nullable value in each series.

                              |
| [bach.DataFrame.fillna](#bach.DataFrame.fillna)`fillna`(\*[, value, method, axis, sort_by, ...])

 | Fill any NULL value using a method or with a given value.

                                                   |
| [bach.DataFrame.from_model](#bach.DataFrame.from_model)`from_model`(engine, model, index[, all_dtypes])

 | Instantiate a new DataFrame based on the result of the query defined in model.

                              |
| [bach.DataFrame.from_pandas](#bach.DataFrame.from_pandas)`from_pandas`(engine, df, convert_objects[, ...])

 | Instantiate a new DataFrame based on the content of a Pandas DataFrame.

                                     |
| [bach.DataFrame.from_table](#bach.DataFrame.from_table)`from_table`(engine, table_name, index[, ...])

    | Instantiate a new DataFrame based on the content of an existing table in the database.

                      |
| [bach.DataFrame.get_all_variable_usage](#bach.DataFrame.get_all_variable_usage)`get_all_variable_usage`()

                        | Get all variables that influence the values of this DataFrame.

                                              |
| [bach.DataFrame.get_dummies](#bach.DataFrame.get_dummies)`get_dummies`([prefix, prefix_sep, dummy_na, ...])

 | Convert each unique category/value from a string series into a dummy/indicator variable.

                    |
| [bach.DataFrame.get_sample](#bach.DataFrame.get_sample)`get_sample`(table_name[, filter, ...])

            | Returns a DataFrame whose data is a sample of the current DataFrame object.

                                 |
| [bach.DataFrame.get_unsampled](#bach.DataFrame.get_unsampled)`get_unsampled`()

                                  | Return a copy of the current sampled DataFrame, that undoes calling [bach.DataFrame.get_sample](#bach.DataFrame.get_sample)`get_sample()` earlier.

                   |
| [bach.DataFrame.groupby](#bach.DataFrame.groupby)`groupby`([by])

                                    | Group by any of the series currently in this DataDrame, both from index as well as data.

                    |
| [bach.DataFrame.head](#bach.DataFrame.head)`head`([n])

                                        | Similar to [bach.DataFrame.to_pandas](#bach.DataFrame.to_pandas)`to_pandas()` but only returns the first n rows.

                                                   |
| [bach.DataFrame.materialize](#bach.DataFrame.materialize)`materialize`([node_name, inplace, limit, ...])

    | Create a copy of this DataFrame with as base_node the current DataFrame's state.

                            |
| [bach.DataFrame.max](#bach.DataFrame.max)`max`([axis, skipna, level, numeric_only])

         | Returns the maximum of all values in each column.

                                                           |
| [bach.DataFrame.mean](#bach.DataFrame.mean)`mean`([axis, skipna, level, numeric_only])

        | Returns the mean of all values in each column.

                                                              |
| [bach.DataFrame.median](#bach.DataFrame.median)`median`([axis, skipna, level, numeric_only])

      | Returns the median of all values in each column.

                                                            |
| [bach.DataFrame.merge](#bach.DataFrame.merge)`merge`(right[, how, on, left_on, right_on, ...])

  | Join the right Dataframe or Series on self.

                                                                 |
| [bach.DataFrame.min](#bach.DataFrame.min)`min`([axis, skipna, level, numeric_only])

         | Returns the minimum of all values in each column.

                                                           |
| [bach.DataFrame.minmax_scale](#bach.DataFrame.minmax_scale)`minmax_scale`([feature_range])

                    | Scales all numeric series based on a given range.

                                                           |
| [bach.DataFrame.mode](#bach.DataFrame.mode)`mode`([axis, skipna, level, numeric_only])

        | Returns the mode of all values in each column.

                                                              |
| [bach.DataFrame.nunique](#bach.DataFrame.nunique)`nunique`([axis, skipna])

                          | Returns the number of unique values in each column.

                                                         |
| [bach.DataFrame.quantile](#bach.DataFrame.quantile)`quantile`([q, axis])

                              | Returns the quantile per numeric/timedelta column.

                                                          |
| [bach.DataFrame.rename](#bach.DataFrame.rename)`rename`([mapper, index, columns, axis, ...])

      | Rename columns.

                                                                                             |
| [bach.DataFrame.reset_index](#bach.DataFrame.reset_index)`reset_index`([level, drop])

                       | Drops the current index.

                                                                                    |
| [bach.DataFrame.rolling](#bach.DataFrame.rolling)`rolling`(window[, min_periods, center, closed])

   | A rolling window of size 'window', by default right aligned.

                                                |
| [bach.DataFrame.rollup](#bach.DataFrame.rollup)`rollup`(by)

                                       | Group by and roll up over the column(s) by, replacing any current grouping.

                                 |
| [bach.DataFrame.round](#bach.DataFrame.round)`round`([decimals])

                                | Returns a DataFrame with rounded numerical values

                                                           |
| [bach.DataFrame.scale](#bach.DataFrame.scale)`scale`([with_mean, with_std])

                     | Standardizes all numeric series based on mean and population standard deviation.

                            |
| [bach.DataFrame.sem](#bach.DataFrame.sem)`sem`([axis, skipna, level, ddof, numeric_only])

   | Returns the unbiased standard error of the mean of each column.

                                             |
| [bach.DataFrame.set_index](#bach.DataFrame.set_index)`set_index`(keys[, drop, append])

                  | Set this dataframe's index to the the index given in keys

                                                   |
| [bach.DataFrame.set_savepoint](#bach.DataFrame.set_savepoint)`set_savepoint`(name[, materialization])

           | Set the current state as a savepoint in self.savepoints.

                                                    |
| [bach.DataFrame.set_variable](#bach.DataFrame.set_variable)`set_variable`(name, value, \*[, dtype])

            | Return a copy of this DataFrame with the variable value updated.

                                            |
| [bach.DataFrame.sort_index](#bach.DataFrame.sort_index)`sort_index`([level, ascending])

                   | Sort dataframe by index levels.

                                                                             |
| [bach.DataFrame.sort_values](#bach.DataFrame.sort_values)`sort_values`(by[, ascending])

                     | Create a new DataFrame with the specified sorting order.

                                                    |
| [bach.DataFrame.stack](#bach.DataFrame.stack)`stack`([dropna])

                                  | Stacks all data_columns into a single index series.

                                                         |
| [bach.DataFrame.std](#bach.DataFrame.std)`std`([axis, skipna, level, ddof, numeric_only])

   | Returns the sample standard deviation of each column.

                                                       |
| [bach.DataFrame.std_pop](#bach.DataFrame.std_pop)`std_pop`([axis, skipna, level, ddof, ...])

        | Returns the population standard deviation of each column.

                                                   |
| [bach.DataFrame.sum](#bach.DataFrame.sum)`sum`([axis, skipna, level, numeric_only, ...])

    | Returns the sum of all values in each column.

                                                               |
| [bach.DataFrame.to_numpy](#bach.DataFrame.to_numpy)`to_numpy`()

                                       | Return a Numpy representation of the DataFrame akin `pandas.Dataframe.to_numpy`

                               |
| [bach.DataFrame.to_pandas](#bach.DataFrame.to_pandas)`to_pandas`([limit])

                               | Run a SQL query representing the current state of this DataFrame against the database and return the resulting data as a Pandas DataFrame.

 |
| [bach.DataFrame.unstack](#bach.DataFrame.unstack)`unstack`([level, fill_value, aggregation])

        | Pivot a level of the index labels.

                                                                                                         |
| [bach.DataFrame.value_counts](#bach.DataFrame.value_counts)`value_counts`([subset, normalize, sort, ...])

     | Returns a series containing counts of each unique row in the DataFrame

                                                                     |
| [bach.DataFrame.var](#bach.DataFrame.var)`var`([axis, skipna, level, ddof, numeric_only])

   | Returns the unbiased variance of each column.

                                                                                              |
| [bach.DataFrame.view_sql](#bach.DataFrame.view_sql)`view_sql`([limit])

                                | Translate the current state of this DataFrame into a SQL query.

                                                                            |
| [bach.DataFrame.window](#bach.DataFrame.window)`window`(\*\*frame_args)

                             | Create a window on the current dataframe grouping and its sorting.

                                                                         |
### Attributes

| [bach.DataFrame.all_series](#bach.DataFrame.all_series)`all_series`
                                       | Get all index and data Series in a dictionary {name: Series}

                                                                               |
| [bach.DataFrame.data](#bach.DataFrame.data)`data`
                                             | Get the data dictionary {name: Series}

                                                                                                     |
| [bach.DataFrame.data_columns](#bach.DataFrame.data_columns)`data_columns`
                                     | Get all the data Series' names in a List

                                                                                                   |
| [bach.DataFrame.dtypes](#bach.DataFrame.dtypes)`dtypes`
                                           | Get the data Series' dtypes in a dictionary {name: dtype}

                                                                                  |
| [bach.DataFrame.group_by](#bach.DataFrame.group_by)`group_by`
                                         | Get this DataFrame's grouping, if any.

                                                                                                     |
| [bach.DataFrame.index](#bach.DataFrame.index)`index`
                                            | Get the index dictionary {name: Series}

                                                                                                    |
| [bach.DataFrame.index_columns](#bach.DataFrame.index_columns)`index_columns`
                                    | Get all the index columns' names in a List

                                                                                                 |
| [bach.DataFrame.index_dtypes](#bach.DataFrame.index_dtypes)`index_dtypes`
                                     | Get the index Series' dtypes in a dictionary {name: dtype}

                                                                                 |
| [bach.DataFrame.is_materialized](#bach.DataFrame.is_materialized)`is_materialized`
                                  | Return true if this DataFrame is in a materialized state, i.e. all information about the DataFrame's values is encoded in self.base_node.

  |
| [bach.DataFrame.loc](#bach.DataFrame.loc)`loc`
                                              | The `.loc` accessor offers different methods for label-based selection.

                                                                      |
| [bach.DataFrame.order_by](#bach.DataFrame.order_by)`order_by`
                                         | Get the current sort order, if any.

                                                                                                        |
| [bach.DataFrame.plot](#bach.DataFrame.plot)`plot`
                                             | The `.plot` accessor offers different methods for data visualization.

                                                                        |
| [bach.DataFrame.savepoints](#bach.DataFrame.savepoints)`savepoints`
                                       | 

                                                                                                                                           |
| [bach.DataFrame.variables](#bach.DataFrame.variables)`variables`
                                        | Get all variables for which values are set, which will be used when querying the database.

                                                 |
