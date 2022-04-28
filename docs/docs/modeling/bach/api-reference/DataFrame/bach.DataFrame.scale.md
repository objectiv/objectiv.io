---
date: '2022-04-28T14:46:08.106Z'
id: bach-api-reference-data-frame-bach-data-frame-scale
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.scale/
title: bach.DataFrame.scale
---

# bach.DataFrame.scale


#### DataFrame.scale(with_mean=True, with_std=True)
Standardizes all numeric series based on mean and population standard deviation.


* **Parameters**

    
    * **with_mean** (*bool*) – if true, each feature value will be centered before scaling


    * **with_std** (*bool*) – if true, each feature value will be scaled to unit variance



* **Returns**

    DataFrame



* **Return type**

    [bach.dataframe.DataFrame](bach.DataFrame/#bach.DataFrame)


Each transformation per feature is performed as follows:

<!-- import pandas
data = {'index': ['a', 'b', 'c', 'd'], 'feature': [1, 2, 3, 4]}
pdf = pandas.DataFrame(data)
df = DataFrame.from_pandas(engine=engine, df=pdf, convert_objects=True)
df = df.set_index('index')
agg_df = df.agg(['mean', 'std_pop'], numeric_only=True)

feature = df['feature']
mean_feature = agg_df['feature_mean']
std_feature = agg_df['feature_std_pop']
with_mean = True
with_std = True -->
>>> scaled_feature = feature.copy()
>>> if with_mean:
...     scaled_feature -= mean_feature

>>> if with_std:
...     scaled_feature /= std_feature
```

Where:

* `feature` is the series to be scaled


* `mean_feature` is the mean of `feature`


* `std_feature` is the (population-based) stardard deviation of `feature`


<!-- !! processed by numpydoc !! -->
