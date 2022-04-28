---
date: '2022-04-28T19:24:58.840Z'
id: bach-api-reference-data-frame-bach-data-frame-copy
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.copy/
title: bach.DataFrame.copy
---

# bach.DataFrame.copy


#### DataFrame.copy()
Return a copy of this DataFrame.

As this dataframe only represents data in the backing SQL store, and does not contain any data,
this is a metadata copy only, no actual data is duplicated and changes to the underlying data
will represented in both copy and original.
Changes to data, index, sorting, grouping etc. on the copy will not affect the original.
The savepoints on the other hand will be shared by the original and the copy.

If you want to create a snapshot of the data, have a look at [`get_sample()`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.get-sample/#bach.DataFrame.get-sample)

Calling `copy(df)` will invoke this copy function, i.e. `copy(df)` is implemented as df.copy()


* **Returns**

    a copy of the dataframe


<!-- !! processed by numpydoc !! -->
