---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-from-table
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.from-table/
title: bach.DataFrame.from_table
---

bach.DataFrame.from_table


#### _classmethod_ DataFrame.from_table(engine, table_name, index, all_dtypes=None)
Instantiate a new DataFrame based on the content of an existing table in the database.

If all_dtypes is not specified, the column dtypes are queried from the database’s information
schema.


* **Parameters**

    
    * **engine** (*sqlalchemy.engine.base.Engine*) – an sqlalchemy engine for the database.


    * **table_name** (*str*) – the table name that contains the data to instantiate as DataFrame.


    * **index** (*List**[**str**]*) – list of column names that make up the index. At least one column needs to be
    selected for the index.


    * **all_dtypes** (*Optional**[**Dict**[**str**, **str**]**]*) – Optional. Mapping from column name to dtype.
    Must contain all index and data columns.
    Must be in same order as the columns appear in the the sql-model.



* **Returns**

    A DataFrame based on a sql table.



* **Return type**

    [bach.dataframe.DataFrame](#bach.DataFrame)bach.dataframe.DataFrame


**NOTE**: If all_dtypes is not set, then this will query the database.

<!-- !! processed by numpydoc !! -->
