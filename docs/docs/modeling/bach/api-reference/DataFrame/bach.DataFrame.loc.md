---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-loc
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.loc/
title: bach.DataFrame.loc
---

bach.DataFrame.loc


#### _property_ DataFrame.loc()
The `.loc` accessor offers different methods for label-based selection. The following are
valid use-cases:

**Examples**

<!-- import pandas
data = {'index': ['a', 'b', 'c', 'd'], 'values': [1, 2, 3, 4]}
pdf = pandas.DataFrame(data)

df = DataFrame.from_pandas(engine=engine, df=pdf, convert_objects=True)
df = df.set_index('index') -->
```pycon3
>>> df.to_pandas()
       values
index
a           1
b           2
c           3
d           4
```

**Getting Values**

**Single-label selection**: Returns all rows where the index column is equal to the label.
This returns a Bach Series, where all selected columns are stacked as a single index column.

```pycon3
>>> df.loc['a'].to_pandas()
__stacked_index
values    1
Name: __stacked, dtype: int64
```

**List-label selection**: Returns all rows where the index column is equal to any of
the labels to be selected. Returns a Bach DataFrame.

```pycon3
>>> df.loc[['a', 'b']].to_pandas()
       values
index
a           1
b           2
```

**Slicing selection by labels**: Returns all rows between the start and stop of the slice
(start and stop are inclusive).

```pycon3
>>> df = df.sort_index()  # slicing is supported only when frame is sorted
>>> df.loc['a':'c'].to_pandas()
       values
index
a           1
b           2
c           3
```

**Slicing by series boolean**: Returns all rows where the series boolean
is true.

```pycon3
>>> df.loc[df['values'] == 2].to_pandas()
       values
index
b           2
```

For each of the previous types of selection, column selection is supported,
this can be by just passing a label, list of labels or a slice. For example:

```pycon3
>>> df['extra_col'] = 1
>>> df.loc['a', 'extra_col'].to_pandas()
__stacked_index
extra_col    1
Name: __stacked, dtype: int64
```

**Setting Values**

**Set values for an entire row**: Will modify all columns where index is matched.

```pycon3
>>> df.loc['a'] = 2
>>> df.to_pandas()
       values  extra_col
index
a           2          2
b           2          1
c           3          1
d           4          1
```

**Set values for multiple rows and specific columns**: Modifies only the passed columns.

```pycon3
>>> df.loc[['b', 'd'], 'values'] = 10
>>> df.to_pandas()
       values  extra_col
index
a           2          2
b          10          1
c           3          1
d          10          1
```

**Set values for row slice**: Modifies all rows included in the slice.

```pycon3
>>> df.loc['a':'c', 'values'] = 3
>>> df.to_pandas()
        values   extra_col
index
a           3           2
b           3           1
c           3           1
d          10           1
```

**NOTE**: 
* .loc supports access-only for first-level index.


* Slicing rows is supported-only when the dataframe is sorted.

<!-- !! processed by numpydoc !! -->
