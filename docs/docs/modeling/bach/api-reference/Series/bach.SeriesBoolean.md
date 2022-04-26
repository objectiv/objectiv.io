---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-boolean
slug: /modeling/bach/api-reference/Series/bach.SeriesBoolean/
title: bach.SeriesBoolean
---

bach.SeriesBoolean


### _class_ bach.SeriesBoolean(engine, base_node, index, name, expression, group_by, sorted_ascending, index_sorting)
A Series that represents the Boolean type and its specific operations

Boolean Series can be used to create complex truth expressions like:
~(a & b ^ c), or in more human readable form not(a and b xor c).

```python
~a     not a (invert a)
a & b  a and b
a | b  a or b
a ^ b  a xor b
```

**Type Conversions**

Boolean Series can be created from int and string values. Not all conversions errors will be caught on
conversion time. Some will lead to database errors later.

<!-- !! processed by numpydoc !! -->
### Methods

| [bach.SeriesBoolean.max](#bach.SeriesBoolean.max)`max`([partition, skipna])

 | Returns the maximum value in the partition.

 |
| [bach.SeriesBoolean.min](#bach.SeriesBoolean.min)`min`([partition, skipna])

                          | Returns the minimum value in the partition.

                                                                                                                                                        |
