---
date: '2022-04-28T19:19:08.619Z'
id: bach-api-reference-data-frame-bach-data-frame-get-unsampled
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.get-unsampled/
title: bach.DataFrame.get_unsampled
---

# bach.DataFrame.get_unsampled


#### DataFrame.get_unsampled()
Return a copy of the current sampled DataFrame, that undoes calling [`get_sample()`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.get-sample/#bach.DataFrame.get-sample) earlier.

All other operations that have been done on the sample DataFrame will be applied on the DataFrame
that is returned. This does not remove the table that was written to the database by
[`get_sample()`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.get-sample/#bach.DataFrame.get-sample), the new DataFrame just does not query that table anymore.

Will raise an error if the current DataFrame is not sample data of another DataFrame, i.e.
[`get_sample()`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.get-sample/#bach.DataFrame.get-sample) has not been called.


* **Returns**

    an unsampled copy of the current sampled DataFrame.



* **Return type**

    [bach.dataframe.DataFrame](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)


<!-- !! processed by numpydoc !! -->
