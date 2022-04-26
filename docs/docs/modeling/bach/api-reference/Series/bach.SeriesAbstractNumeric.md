---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-abstract-numeric
slug: /modeling/bach/api-reference/Series/bach.SeriesAbstractNumeric/
title: bach.SeriesAbstractNumeric
---

bach.SeriesAbstractNumeric


### _class_ bach.SeriesAbstractNumeric(engine, base_node, index, name, expression, group_by, sorted_ascending, index_sorting)
A Series that represents the base numeric types and its specific operations

\*\* Operations \*\*

All common arithmetic operations are supported, as well as the most common aggregation operations:


* add (+), subtract (-)


* multiply (\*), divide (/), floordiv (//)


* lshift (<<) and rshift(>>) for Integer types

And the aggregations/statistical functions:


* [bach.SeriesAbstractNumeric.sum](#bach.SeriesAbstractNumeric.sum)`sum()`, [bach.SeriesAbstractNumeric.mean](#bach.SeriesAbstractNumeric.mean)`mean()`


* [bach.SeriesAbstractNumeric.sem](#bach.SeriesAbstractNumeric.sem)`sem()`, [bach.SeriesAbstractNumeric.std](#bach.SeriesAbstractNumeric.std)`std()`, [bach.SeriesAbstractNumeric.var](#bach.SeriesAbstractNumeric.var)`var()`

Integer types also support lshift (<<) and rshift(>>)

<!-- !! processed by numpydoc !! -->
### Methods

| [bach.SeriesAbstractNumeric.cut](#bach.SeriesAbstractNumeric.cut)`cut`(bins[, right])

 | Segments values into bins.

 |
| [bach.SeriesAbstractNumeric.mean](#bach.SeriesAbstractNumeric.mean)`mean`([partition, skipna])

                         | Get the mean/average of the input values.

                                                                                                  |
| [bach.SeriesAbstractNumeric.minmax_scale](#bach.SeriesAbstractNumeric.minmax_scale)`minmax_scale`([feature_range])

                     | Scales series based on a given range.

                                                                                                      |
| [bach.SeriesAbstractNumeric.qcut](#bach.SeriesAbstractNumeric.qcut)`qcut`(q)

                                           | Segments values into equal-sized buckets based on rank or sample quantiles.

                                                                |
| [bach.SeriesAbstractNumeric.quantile](#bach.SeriesAbstractNumeric.quantile)`quantile`([partition, q])

                          | When q is a float or len(q) == 1, the resultant series index will remain In case multiple quantiles are calculated, the resultant series index will have all calculated quantiles as index values.

 |
| [bach.SeriesAbstractNumeric.round](#bach.SeriesAbstractNumeric.round)`round`([decimals])

                                 | Round the value of this series to the given amount of decimals.

                                                                                                                                    |
| [bach.SeriesAbstractNumeric.scale](#bach.SeriesAbstractNumeric.scale)`scale`([with_mean, with_std])

                      | Standardizes series based on mean and population standard deviation.

                                                                                                                               |
| [bach.SeriesAbstractNumeric.sem](#bach.SeriesAbstractNumeric.sem)`sem`([partition, skipna, ddof])

                    | Get the unbiased standard error of the mean.

                                                                                                                                                       |
| [bach.SeriesAbstractNumeric.std](#bach.SeriesAbstractNumeric.std)`std`([partition, skipna, ddof])

                    | Get the standard deviation of the input values Normalized by N-1 by default.

                                                                                                                       |
| [bach.SeriesAbstractNumeric.sum](#bach.SeriesAbstractNumeric.sum)`sum`([partition, skipna, min_count])

               | Get the sum of the input values.

                                                                                                                                                                   |
| [bach.SeriesAbstractNumeric.var](#bach.SeriesAbstractNumeric.var)`var`([partition, skipna, ddof])

                    | Get the sample variance of the input values (square of the sample standard deviation) Normalized by N-1 by default.

                                                                                |
