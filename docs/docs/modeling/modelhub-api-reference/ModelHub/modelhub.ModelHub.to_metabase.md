---
date: '2022-04-28T14:46:08.106Z'
id: modelhub-api-reference-model-hub-modelhub-model-hub-to-metabase
slug: /modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.to-metabase/
title: modelhub.ModelHub.to_metabase
---

# modelhub.ModelHub.to_metabase


#### ModelHub.to_metabase(data, model_type=None, config=None)
Plot data in `data` to Metabase. If a card already exists, it will be updated. If `data` is a
[`bach.Series`](../../bach/api-reference/Series/bach.Series/#bach.Series), it will call [`bach.Series.to_frame()`](../../bach/api-reference/Series/bach.Series.to-frame/#bach.Series.to-frame).

Default options can be overridden using the config dictionary.


* **Parameters**

    
    * **data** – [`bach.DataFrame`](../../bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame) or [`bach.Series`](../../bach/api-reference/Series/bach.Series/#bach.Series) to push to MetaBase.


    * **model_type** (*Optional**[**str**]*) – Preset output to Metabase for a specific model. eg, ‘unique_users’


    * **config** (*Optional**[**dict**]*) – Override default config options for the graph to be added/updated in Metabase.


<!-- !! processed by numpydoc !! -->
