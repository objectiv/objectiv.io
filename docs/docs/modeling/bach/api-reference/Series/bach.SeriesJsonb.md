---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-jsonb
slug: /modeling/bach/api-reference/Series/bach.SeriesJsonb/
title: bach.SeriesJsonb
---

bach.SeriesJsonb


### _class_ bach.SeriesJsonb(engine, base_node, index, name, expression, group_by, sorted_ascending, index_sorting)
A Series that represents the postgres jsonb type and its specific operations.

This is the standard and recommended type to use for handling json like data.

**Getting data**

It is possible to get a selection of data from the json in the json type column. For selecting data from
json, arrays and objects are supported. The data can be selected using .json[] on the json column

Selecting data from an array is based on position. It works similar to slicing through python lists.

**NOTE**: Slicing is only possible if *all* values in the column are lists or None.

Selecting from objects is possible by key.

Examples:

> <!-- data = ['["a","b","c"]', '["d","e","f","g"]', '[{"h":"i","j":"k"},{"l":["m","n","o"]},{"p":"q"}]']
> pdf = pd.DataFrame(data=data, columns=['jsonb_column'])
> df = DataFrame.from_pandas(engine, pdf, convert_objects=True)
> df['jsonb_column'] = df.jsonb_column.astype('jsonb') -->
```pycon3
>>> pdf
                                        jsonb_column
0                                      ["a","b","c"]
1                                  ["d","e","f","g"]
2  [{"h":"i","j":"k"},{"l":["m","n","o"]},{"p":"q"}]
```

```pycon3
>>> df = DataFrame.from_pandas(engine, pdf, convert_objects=True)
>>> df['jsonb_column'] = df.jsonb_column.astype('jsonb')
>>> # load some json strings and convert them to jsonb type
>>> # slice and show with .head()
>>> df.jsonb_column.json[:2].head()
_index_0
0                                            [a, b]
1                                            [d, e]
2    [{'h': 'i', 'j': 'k'}, {'l': ['m', 'n', 'o']}]
Name: jsonb_column, dtype: object
```

```pycon3
>>> df.jsonb_column.json[1].head()
_index_0
0                         b
1                         e
2    {'l': ['m', 'n', 'o']}
Name: jsonb_column, dtype: object
```

```pycon3
>>> # selecting from objects is done by entering a key:
>>> df.jsonb_column.json[1].json['l'].head()
_index_0
0         None
1         None
2    [m, n, o]
Name: jsonb_column, dtype: object
```

A last case is selecting based on the objects *in* an array.
With this method, a dict is passed in the .json[] selector. The value of the first match with the dict
to the objects in a json array is returned for the .json[] selector. A match is when all key/value pairs
of the dict are found in an object. This can be used for selecting a subset of a json array with objects.

```pycon3
>>> # selecting from arrays by searching objects in the array.
>>> df.jsonb_column.json[:{"j":"k"}].head()
_index_0
0                      None
1                      None
2    [{'h': 'i', 'j': 'k'}]
Name: jsonb_column, dtype: object
```

```pycon3
>>> # or:
>>> df.jsonb_column.json[{"l":["m","n","o"]}:].head()
_index_0
0                                    None
1                                    None
2    [{'l': ['m', 'n', 'o']}, {'p': 'q'}]
Name: jsonb_column, dtype: object
```

<!-- !! processed by numpydoc !! -->
### Attributes

| [bach.SeriesJsonb.json](#bach.SeriesJsonb.json)`json`
 | 

 |
