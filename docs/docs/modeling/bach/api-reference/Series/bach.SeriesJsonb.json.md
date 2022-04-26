---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-jsonb-json
slug: /modeling/bach/api-reference/Series/bach.SeriesJsonb.json/
title: bach.SeriesJsonb.json
---

bach.SeriesJsonb.json


#### _property_ SeriesJsonb.json()
Get access to json operations via the class that’s return through this accessor.
Use as my_series.json.get_value() or my_series.json[:2]


#### _class_ Json(series_object)
class with accessor methods to json(b) type data columns.

<!-- !! processed by numpydoc !! -->

#### Json.\__getitem__(key)
Slice this jsonb database object in pythonic ways:


* **Parameters**

    **key** – A very mixed key to slice on, please see below.


<!-- data = [
    '["a","b","c"]', '["d","e","f","g"]', '[{"h":"i","j":"k"},{"l":["m","n","o"]},{"p":"q"}]',
]
pdf = pd.DataFrame(data=data, columns=['jsonb_column'])
df = DataFrame.from_pandas(engine, pdf, convert_objects=True)
df['jsonb_column'] = df.jsonb_column.astype('jsonb') -->
```pycon3
>>> # slice and show with .head()
>>> df.jsonb_column.json[:2].head()
_index_0
0                                            [a, b]
1                                            [d, e]
2    [{'h': 'i', 'j': 'k'}, {'l': ['m', 'n', 'o']}]
Name: jsonb_column, dtype: object
```

```pycon3
>>> # selecting one position returns the single entry:
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

Or select based on the objects *in* an array.
With this method, a dict is passed in the .json[] selector. The value of the first match with
the dict to the objects in a json array is returned for the .json[] selector. A match is when
all key/value pairs of the dict are found in an object. This can be used for selecting a subset
of a json array with objects.

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

#### Json.get_value(key, as_str=False)
Select values from objects by key. Same as using .json[key] on the json column.


* **Parameters**

    
    * **key** – the key to return the values for.


    * **as_str** – if True, it returns a string Series, jsonb otherwise.



* **Returns**

    series with the selected object value.


<!-- !! processed by numpydoc !! -->
<!-- !! processed by numpydoc !! -->
