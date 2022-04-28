---
date: '2022-04-28T19:24:58.840Z'
id: modelhub-api-reference-model-hub-modelhub-model-hub-get-objectiv-dataframe
slug: /modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.get-objectiv-dataframe/
title: modelhub.ModelHub.get_objectiv_dataframe
---

# modelhub.ModelHub.get_objectiv_dataframe


#### ModelHub.get_objectiv_dataframe(db_url=None, table_name='data', start_date=None, end_date=None)
Sets data from sql table into an [`bach.DataFrame`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame) object.

The created DataFrame points to where the data is stored in the sql database, makes several
transformations and sets the right data types for all columns. As such, the models from the model hub
can be applied to a DataFrame created with this method.


* **Parameters**

    
    * **db_url** (*Optional**[**str**]*) – the url that indicate database dialect and connection arguments. If not given, env DSN
    is used to create one. If that’s not there, the default of
    ‘postgresql://objectiv:@localhost:5432/objectiv’ will be used.


    * **table_name** (*str*) – the name of the sql table where the data is stored.


    * **start_date** (*Optional**[**str**]*) – first date for which data is loaded to the DataFrame. If None, data is loaded from
    the first date in the sql table. Format as ‘YYYY-MM-DD’.


    * **end_date** (*Optional**[**str**]*) – last date for which data is loaded to the DataFrame. If None, data is loaded up to
    and including the last date in the sql table. Format as ‘YYYY-MM-DD’.



* **Returns**

    [`bach.DataFrame`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame) with Objectiv data.


<!-- !! processed by numpydoc !! -->
