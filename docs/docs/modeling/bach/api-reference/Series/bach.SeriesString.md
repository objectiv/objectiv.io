---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-string
slug: /modeling/bach/api-reference/Series/bach.SeriesString/
title: bach.SeriesString
---

bach.SeriesString


### _class_ bach.SeriesString(engine, base_node, index, name, expression, group_by, sorted_ascending, index_sorting)
A Series that represents the string type and its specific operations

**Operations**

Strings can be concatenated using the ‘+’ operator, and the ‘str’ accessor can be used to get access
to slices.

Example:

```python
c = a + b  # concat the strings.
a.str[3]   # get one char
a.str[3:5] # get a slice from char 3-5
```

<!-- !! processed by numpydoc !! -->
### Methods

| [bach.SeriesString.get_dummies](#bach.SeriesString.get_dummies)`get_dummies`([prefix, prefix_sep, dummy_na, ...])

 | Convert each unique category/value from the series into a dummy/indicator variable.

 |
### Attributes

| [bach.SeriesString.str](#bach.SeriesString.str)`str`
                                               | Get access to string operations.

                                                                                                                                                                   |
