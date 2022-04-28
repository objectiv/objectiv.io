---
date: '2022-04-28T14:46:08.106Z'
id: bach-api-reference-data-frame-bach-data-frame
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame/
title: bach.DataFrame
---

# bach.DataFrame


### _class_ bach.DataFrame(engine, base_node, index, series, group_by, order_by, savepoints, variables=None)
A mutable DataFrame representing tabular data in a database and enabling operations on that data.

A Bach DataFrame object can be used to process large amounts of data on a database, while using an api
that is based on the pandas api. This allows the database to group and aggregate data, sample data and
do other operations that are not suitable for in memory processing. At any time it is possible to write
your Bach DataFrame to a pandas DataFrame.

**Usage**

It should generally not be required to construct DataFrame instances manually. A DataFrame can be
constructed using the any of the bach classmethods like [`from_table()`](bach.DataFrame.from-table/#bach.DataFrame.from-table), [`from_model()`](bach.DataFrame.from-model/#bach.DataFrame.from-model), or
[`from_pandas()`](bach.DataFrame.from-pandas/#bach.DataFrame.from-pandas). The returned DataFrame can be thought of as a dict-like container for Bach
Series objects.

**Getting & Setting columns**

Getting data works similar to pandas DataFrame. Single columns can be retrieved with `df['column_name']`
as well as `df.column_name`. This will return a single Bach Series. Multiple columns can be retrieved by
passing a list of column names like: `df[['column_name','other_column_name']]`. This returns a Bach
DataFrame.

A selection of rows can be selected with python slicing. I.e. `df[2:5]` returns row 2 to 5. Only
positive integers are currently accepted in slices.

SeriesBoolean can also be used to filter DataFrames, and these Series are easily created using comparison
operations like equals (`==`), less-than (`<`), not(`~`) on two series, or series with values:
`boolean_series = a == b`. Boolean indexing can be done like `df[df.column == 5]`. Only rows are
returned for which the condition is true.

Label-based selection is also supported by using the `.loc` attribute. Each label is interpreted
as a value contained by the index column. Unlike Pandas, if the label is not found,
no exception will be raised. I.e. `df.loc['a']` returns rows where the index series is equal to `a`.
Slicing can also be performed (the dataframe must be sorted). I.e. `df['a':'d', 'col1:col3']`. This will
return all rows/columns included in the slicing, where the start and stop are inclusive.
For more information about label-based selection, please take a look to [`loc`](bach.DataFrame.loc/#bach.DataFrame.loc).

**Moving Series around**

Values, Series or DataFrames can be set to another DataFrame. Setting Series or DataFrames to another
DataFrame is possible if they share the same base node or index dtype. DataFrames and Series share the
same base node if they originate from the same data source. In most cases this means that the series
that is to be set to the DataFrame is a result of operations on the DataFrame that is started with.
If a Series or DataFrame do not share the same base node, the new column is or columns are set using a
merge on the index. This works for one level indexes where the dtype of the series is the same as the
DataFrame’s index dtype.

**Examples**

df['a'] = df.column_name + 5
df['b'] = ''
```

**Database access**

The data of this DataFrame is always held in the database and operations on the data are performed
by the database, not in local memory. Data will only be transferred to local memory when an
explicit call is made to one of the functions that transfers data:


* [`head()`](bach.DataFrame.head/#bach.DataFrame.head)


* [`to_pandas()`](bach.DataFrame.to-pandas/#bach.DataFrame.to-pandas)


* [`to_numpy()`](bach.DataFrame.to-numpy/#bach.DataFrame.to-numpy)


* [`get_sample()`](bach.DataFrame.get-sample/#bach.DataFrame.get-sample)


* The property accessors [`Series.value`](../Series/bach.Series.value/#bach.Series.value) (Series only), `values`

Other functions will not transfer data, nor will they trigger any operations to run on the database.
Operations on the DataFrame are combined and translated to a single SQL query, which is executed
only when one of the above mentioned data-transfer functions is called.

The API of this DataFrame is partially compatible with Pandas DataFrames. For more on Pandas
DataFrames see [https://pandas.pydata.org/docs/reference/frame.html](https://pandas.pydata.org/docs/reference/frame.html)

<!-- !! processed by numpydoc !! -->
### Methods

| &nbsp; | &nbsp;  |
| ------ | ------ |
| [`agg`](bach.DataFrame.agg/#bach.DataFrame.agg)(func[, axis, numeric_only]) | Aggregate using one or more operations over the specified axis.  |
| [`aggregate`](bach.DataFrame.aggregate/#bach.DataFrame.aggregate)(func[, axis, numeric_only]) | Alias for [`agg()`](bach.DataFrame.agg/#bach.DataFrame.agg)                                                  |
| [`append`](bach.DataFrame.append/#bach.DataFrame.append)(other[, ignore_index, sort])   | Append rows of other dataframes to the the caller dataframe.     |
| [`astype`](bach.DataFrame.astype/#bach.DataFrame.astype)(dtype)                         | Cast all or some of the data columns to a certain dtype.         |
| [`bfill`](bach.DataFrame.bfill/#bach.DataFrame.bfill)([sort_by, ascending])           | Fill missing values by using the next non-nullable value in each series.  |
| [`copy`](bach.DataFrame.copy/#bach.DataFrame.copy)()                                | Return a copy of this DataFrame.                                          |
| [`count`](bach.DataFrame.count/#bach.DataFrame.count)([axis, level, numeric_only])    | Count all non-NULL values in each column.                                 |
| [`create_variable`](bach.DataFrame.create-variable/#bach.DataFrame.create-variable)(name, value, \*[, dtype]) | Create a Series object that can be used as a variable, within the returned DataFrame.  |
| [`cube`](bach.DataFrame.cube/#bach.DataFrame.cube)(by)                                 | Group by and cube over the column(s) `by`.                                               |
| [`describe`](bach.DataFrame.describe/#bach.DataFrame.describe)([percentiles, include, exclude, ...]) | Returns descriptive statistics.                                                        |
| [`drop`](bach.DataFrame.drop/#bach.DataFrame.drop)([labels, index, columns, level, errors])  | Drop columns from the DataFrame                                                        |
| [`drop_duplicates`](bach.DataFrame.drop-duplicates/#bach.DataFrame.drop-duplicates)([subset, keep, ...])           | Return a dataframe with duplicated rows removed based on all series labels or a subset of labels.  |
| [`dropna`](bach.DataFrame.dropna/#bach.DataFrame.dropna)(\*[, axis, how, thresh, subset])         | Removes rows with missing values (NaN, None and SQL NULL).                                         |
| [`expanding`](bach.DataFrame.expanding/#bach.DataFrame.expanding)([min_periods, center])               | Create an expanding window starting with the first row in the group, with at least `min_period` observations.  |
| [`ffill`](bach.DataFrame.ffill/#bach.DataFrame.ffill)([sort_by, ascending])                    | Fill missing values by propagating the last non-nullable value in each series.                               |
| [`fillna`](bach.DataFrame.fillna/#bach.DataFrame.fillna)(\*[, value, method, axis, sort_by, ...]) | Fill any NULL value using a method or with a given value.                                                    |
| [`from_model`](bach.DataFrame.from-model/#bach.DataFrame.from-model)(engine, model, index[, all_dtypes]) | Instantiate a new DataFrame based on the result of the query defined in `model`.                               |
| [`from_pandas`](bach.DataFrame.from-pandas/#bach.DataFrame.from-pandas)(engine, df, convert_objects[, ...]) | Instantiate a new DataFrame based on the content of a Pandas DataFrame.                                      |
| [`from_table`](bach.DataFrame.from-table/#bach.DataFrame.from-table)(engine, table_name, index[, ...])    | Instantiate a new DataFrame based on the content of an existing table in the database.                       |
| [`get_all_variable_usage`](bach.DataFrame.get-all-variable-usage/#bach.DataFrame.get-all-variable-usage)()                        | Get all variables that influence the values of this DataFrame.                                               |
| [`get_dummies`](bach.DataFrame.get-dummies/#bach.DataFrame.get-dummies)([prefix, prefix_sep, dummy_na, ...]) | Convert each unique category/value from a string series into a dummy/indicator variable.                     |
| [`get_sample`](bach.DataFrame.get-sample/#bach.DataFrame.get-sample)(table_name[, filter, ...])            | Returns a DataFrame whose data is a sample of the current DataFrame object.                                  |
| [`get_unsampled`](bach.DataFrame.get-unsampled/#bach.DataFrame.get-unsampled)()                                  | Return a copy of the current sampled DataFrame, that undoes calling [`get_sample()`](bach.DataFrame.get-sample/#bach.DataFrame.get-sample) earlier.                    |
| [`groupby`](bach.DataFrame.groupby/#bach.DataFrame.groupby)([by])                                    | Group by any of the series currently in this DataDrame, both from index as well as data.                     |
| [`head`](bach.DataFrame.head/#bach.DataFrame.head)([n])                                        | Similar to [`to_pandas()`](bach.DataFrame.to-pandas/#bach.DataFrame.to-pandas) but only returns the first `n` rows.                                                    |
| [`materialize`](bach.DataFrame.materialize/#bach.DataFrame.materialize)([node_name, inplace, limit, ...])    | Create a copy of this DataFrame with as base_node the current DataFrame's state.                             |
| [`max`](bach.DataFrame.max/#bach.DataFrame.max)([axis, skipna, level, numeric_only])         | Returns the maximum of all values in each column.                                                            |
| [`mean`](bach.DataFrame.mean/#bach.DataFrame.mean)([axis, skipna, level, numeric_only])        | Returns the mean of all values in each column.                                                               |
| [`median`](bach.DataFrame.median/#bach.DataFrame.median)([axis, skipna, level, numeric_only])      | Returns the median of all values in each column.                                                             |
| [`merge`](bach.DataFrame.merge/#bach.DataFrame.merge)(right[, how, on, left_on, right_on, ...])  | Join the right Dataframe or Series on self.                                                                  |
| [`min`](bach.DataFrame.min/#bach.DataFrame.min)([axis, skipna, level, numeric_only])         | Returns the minimum of all values in each column.                                                            |
| [`minmax_scale`](bach.DataFrame.minmax-scale/#bach.DataFrame.minmax-scale)([feature_range])                    | Scales all numeric series based on a given range.                                                            |
| [`mode`](bach.DataFrame.mode/#bach.DataFrame.mode)([axis, skipna, level, numeric_only])        | Returns the mode of all values in each column.                                                               |
| [`nunique`](bach.DataFrame.nunique/#bach.DataFrame.nunique)([axis, skipna])                          | Returns the number of unique values in each column.                                                          |
| [`quantile`](bach.DataFrame.quantile/#bach.DataFrame.quantile)([q, axis])                              | Returns the quantile per numeric/timedelta column.                                                           |
| [`rename`](bach.DataFrame.rename/#bach.DataFrame.rename)([mapper, index, columns, axis, ...])      | Rename columns.                                                                                              |
| [`reset_index`](bach.DataFrame.reset-index/#bach.DataFrame.reset-index)([level, drop])                       | Drops the current index.                                                                                     |
| [`rolling`](bach.DataFrame.rolling/#bach.DataFrame.rolling)(window[, min_periods, center, closed])   | A rolling window of size 'window', by default right aligned.                                                 |
| [`rollup`](bach.DataFrame.rollup/#bach.DataFrame.rollup)(by)                                       | Group by and roll up over the column(s) `by`, replacing any current grouping.                                  |
| [`round`](bach.DataFrame.round/#bach.DataFrame.round)([decimals])                                | Returns a DataFrame with rounded numerical values                                                            |
| [`scale`](bach.DataFrame.scale/#bach.DataFrame.scale)([with_mean, with_std])                     | Standardizes all numeric series based on mean and population standard deviation.                             |
| [`sem`](bach.DataFrame.sem/#bach.DataFrame.sem)([axis, skipna, level, ddof, numeric_only])   | Returns the unbiased standard error of the mean of each column.                                              |
| [`set_index`](bach.DataFrame.set-index/#bach.DataFrame.set-index)(keys[, drop, append])                  | Set this dataframe's index to the the index given in keys                                                    |
| [`set_savepoint`](bach.DataFrame.set-savepoint/#bach.DataFrame.set-savepoint)(name[, materialization])           | Set the current state as a savepoint in `self.savepoints`.                                                     |
| [`set_variable`](bach.DataFrame.set-variable/#bach.DataFrame.set-variable)(name, value, \*[, dtype])            | Return a copy of this DataFrame with the variable value updated.                                             |
| [`sort_index`](bach.DataFrame.sort-index/#bach.DataFrame.sort-index)([level, ascending])                   | Sort dataframe by index levels.                                                                              |
| [`sort_values`](bach.DataFrame.sort-values/#bach.DataFrame.sort-values)(by[, ascending])                     | Create a new DataFrame with the specified sorting order.                                                     |
| [`stack`](bach.DataFrame.stack/#bach.DataFrame.stack)([dropna])                                  | Stacks all data_columns into a single index series.                                                          |
| [`std`](bach.DataFrame.std/#bach.DataFrame.std)([axis, skipna, level, ddof, numeric_only])   | Returns the sample standard deviation of each column.                                                        |
| [`std_pop`](bach.DataFrame.std-pop/#bach.DataFrame.std-pop)([axis, skipna, level, ddof, ...])        | Returns the population standard deviation of each column.                                                    |
| [`sum`](bach.DataFrame.sum/#bach.DataFrame.sum)([axis, skipna, level, numeric_only, ...])    | Returns the sum of all values in each column.                                                                |
| [`to_numpy`](bach.DataFrame.to-numpy/#bach.DataFrame.to-numpy)()                                       | Return a Numpy representation of the DataFrame akin `pandas.Dataframe.to_numpy`                                |
| [`to_pandas`](bach.DataFrame.to-pandas/#bach.DataFrame.to-pandas)([limit])                               | Run a SQL query representing the current state of this DataFrame against the database and return the resulting data as a Pandas DataFrame.  |
| [`unstack`](bach.DataFrame.unstack/#bach.DataFrame.unstack)([level, fill_value, aggregation])        | Pivot a level of the index labels.                                                                                                          |
| [`value_counts`](bach.DataFrame.value-counts/#bach.DataFrame.value-counts)([subset, normalize, sort, ...])     | Returns a series containing counts of each unique row in the DataFrame                                                                      |
| [`var`](bach.DataFrame.var/#bach.DataFrame.var)([axis, skipna, level, ddof, numeric_only])   | Returns the unbiased variance of each column.                                                                                               |
| [`view_sql`](bach.DataFrame.view-sql/#bach.DataFrame.view-sql)([limit])                                | Translate the current state of this DataFrame into a SQL query.                                                                             |
| [`window`](bach.DataFrame.window/#bach.DataFrame.window)(\*\*frame_args)                             | Create a window on the current dataframe grouping and its sorting.                                                                          |

### Attributes

| &nbsp;                                           | &nbsp;                                                                                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [`all_series`](bach.DataFrame.all-series/#bach.DataFrame.all-series)                                       | Get all index and data Series in a dictionary `{name: Series}`                                                                                |
| [`data`](bach.DataFrame.data/#bach.DataFrame.data)                                             | Get the data dictionary `{name: Series}`                                                                                                      |
| [`data_columns`](bach.DataFrame.data-columns/#bach.DataFrame.data-columns)                                     | Get all the data Series' names in a List                                                                                                    |
| [`dtypes`](bach.DataFrame.dtypes/#bach.DataFrame.dtypes)                                           | Get the data Series' dtypes in a dictionary `{name: dtype}`                                                                                   |
| [`group_by`](bach.DataFrame.group-by/#bach.DataFrame.group-by)                                         | Get this DataFrame's grouping, if any.                                                                                                      |
| [`index`](bach.DataFrame.index/#bach.DataFrame.index)                                            | Get the index dictionary `{name: Series}`                                                                                                     |
| [`index_columns`](bach.DataFrame.index-columns/#bach.DataFrame.index-columns)                                    | Get all the index columns' names in a List                                                                                                  |
| [`index_dtypes`](bach.DataFrame.index-dtypes/#bach.DataFrame.index-dtypes)                                     | Get the index Series' dtypes in a dictionary `{name: dtype}`                                                                                  |
| [`is_materialized`](bach.DataFrame.is-materialized/#bach.DataFrame.is-materialized)                                  | Return true if this DataFrame is in a materialized state, i.e. all information about the DataFrame's values is encoded in self.base_node.   |
| [`loc`](bach.DataFrame.loc/#bach.DataFrame.loc)                                              | The `.loc` accessor offers different methods for label-based selection.                                                                       |
| [`order_by`](bach.DataFrame.order-by/#bach.DataFrame.order-by)                                         | Get the current sort order, if any.                                                                                                         |
| [`plot`](bach.DataFrame.plot/#bach.DataFrame.plot)                                             | The `.plot` accessor offers different methods for data visualization.                                                                         |
| [`savepoints`](bach.DataFrame.savepoints/#bach.DataFrame.savepoints)                                       |                                                                                                                                             |
| [`variables`](bach.DataFrame.variables/#bach.DataFrame.variables)                                        | Get all variables for which values are set, which will be used when querying the database.                                                  |
