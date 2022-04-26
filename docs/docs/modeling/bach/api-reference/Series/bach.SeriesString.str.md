---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-string-str
slug: /modeling/bach/api-reference/Series/bach.SeriesString.str/
title: bach.SeriesString.str
---

bach.SeriesString.str


#### _property_ SeriesString.str(_: bach.series.series_string.StringOperatio_ )
Get access to string operations.


#### _class_ StringOperation(base)
<!-- !! processed by numpydoc !! -->

#### StringOperation.slice(start=None, stop=None)
slice a string like you would in Python, either by calling this method, or by slicing directly
on the str accessor.

```python
a.str[3]            # get one char
a.str[3:5]          # get a slice from char 3-5
a.str.slice(3, 5)   # idem
```

<!-- !! processed by numpydoc !! -->
<!-- !! processed by numpydoc !! -->
