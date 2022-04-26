---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-abstract-date-time-dt
slug: /modeling/bach/api-reference/Series/bach.SeriesAbstractDateTime.dt/
title: bach.SeriesAbstractDateTime.dt
---

bach.SeriesAbstractDateTime.dt


#### _property_ SeriesAbstractDateTime.dt(_: bach.series.series_datetime.DateTimeOperatio_ )
Get access to date operations.


#### _class_ DateTimeOperation(series)
<!-- !! processed by numpydoc !! -->

#### DateTimeOperation.sql_format(format_str)
Allow formatting of this Series (to a string type).


* **Parameters**

    **format_str** – The format to apply to the date/time column.
    Currently, this uses Postgres’ data format string syntax:
    https://www.postgresql.org/docs/14/functions-formatting.html


```python
df['year'] = df.some_date_series.dt.sql_format('YYYY')  # return year
df['date'] = df.some_date_series.dt.sql_format('YYYYMMDD')  # return date
```


* **Returns**

    a SeriesString containing the formatted date.


<!-- !! processed by numpydoc !! -->
<!-- !! processed by numpydoc !! -->
