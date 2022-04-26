---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-from-model
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.from-model/
title: bach.DataFrame.from_model
---

bach.DataFrame.from_model


#### _classmethod_ DataFrame.from_model(engine, model, index, all_dtypes=None)
Instantiate a new DataFrame based on the result of the query defined in model.

If all_dtypes is not specified, then a transaction scoped temporary table will be created with
0 result rows from the model. The meta data of this table will be used to deduce the dtypes.


* **Parameters**

    
    * **engine** (*sqlalchemy.engine.base.Engine*) – a sqlalchemy engine for the database.


    * **model** (*sql_models.model.SqlModel*) – an SqlModel that specifies the queries to instantiate as DataFrame.


    * **index** (*List**[**str**]*) – list of column names that make up the index. At least one column needs to be
    selected for the index.


    * **all_dtypes** (*Optional**[**Dict**[**str**, **str**]**]*) – Optional. Mapping from column name to dtype.
    Must contain all index and data columns.
    Must be in same order as the columns appear in the the sql-model.



* **Returns**

    A DataFrame based on an SqlModel



* **Return type**

    [bach.dataframe.DataFrame](#bach.DataFrame)bach.dataframe.DataFrame


**NOTE**: If all_dtypes is not set, then this will query the database and create and remove a temporary
table.

<!-- !! processed by numpydoc !! -->
