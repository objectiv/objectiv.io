---
date: '2022-04-28T19:19:08.619Z'
id: bach-api-reference-data-frame-bach-data-frame-minmax-scale
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.minmax-scale/
title: bach.DataFrame.minmax_scale
---

# bach.DataFrame.minmax_scale


#### DataFrame.minmax_scale(feature_range=(0, 1))
Scales all numeric series based on a given range.


* **Parameters**

    **feature_range** (*Tuple**[**int**, **int**]*) – `tuple(min, max)` desired range to use for scaling.



* **Returns**

    DataFrame



* **Return type**

    [bach.dataframe.DataFrame](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)


Each transformation per feature is performed as follows:

<!-- import pandas
data = {'index': ['a', 'b', 'c', 'd'], 'feature': [1, 2, 3, 4]}
pdf = pandas.DataFrame(data)

df = DataFrame.from_pandas(engine=engine, df=pdf, convert_objects=True)
df = df.set_index('index')
agg_df = df.agg(['min', 'max'], numeric_only=True)
agg_df = agg_df.merge(df, how='cross')

feature = df['feature']
min_feature = agg_df['feature_min']
max_feature = agg_df['feature_max'] -->
>>> range_min,  = (0, 1)
>>> feature_std = (feature - min_feature) / (max_feature - min_feature)
>>> scaled_feature = feature_std \* (range_max - range_min) + range_min
```

Where:

* `feature` is the series to be scaled


* `feature_min` is the minimum value of `feature`


* `feature_max` is the maximum value of `feature`


* `range_min, range_max` = `feature_range`


<!-- !! processed by numpydoc !! -->
