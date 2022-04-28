---
date: '2022-04-28T19:19:08.619Z'
id: bach-api-reference-data-frame-bach-data-frame-from-pandas
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.from-pandas/
title: bach.DataFrame.from_pandas
---

# bach.DataFrame.from_pandas


#### _classmethod_ DataFrame.from_pandas(engine, df, convert_objects, name='loaded_data', materialization='cte', if_exists='fail')
Instantiate a new DataFrame based on the content of a Pandas DataFrame.

The index of the Pandas DataFrame is set to the index of the DataFrame. Only single level index is
supported. Supported dtypes are ‘int32’, ‘int64’, ‘float64’, ‘string’, ‘datetime64[ns]’, ‘bool’. If
convert_objects is set to True, other columns are converted to supported data types if possible.

How the data is loaded depends on the chosen materialization:


1. ‘table’: This will first write the data to a database table using pandas
`pandas.DataFrame.to_sql()` method.


2. ‘cte’: The data will be represented using a common table expression of the form
`select \* from values` in future queries.

The ‘table’ method requires database write access. The ‘cte’ method is side-effect free and doesn’t
interact with the database at all. However the ‘cte’ method is only suitable for small quantities
of data. For anything over a dozen kilobytes of data it is recommended to store the data in a table
in the database first (e.g. by specifying ‘table’).

There are some small differences between how the different materializations handle NaN values. e.g.
‘cte’ does not support those for non-numeric columns, whereas ‘table’ converts them to ‘NULL’.


* **Parameters**

    
    * **engine** (*sqlalchemy.engine.base.Engine*) – an sqlalchemy engine for the database.


    * **df** (*pandas.core.frame.DataFrame*) – Pandas DataFrame to instantiate as DataFrame.


    * **convert_objects** (*bool*) – If True, the data in the columns with dtypes not in the list of supported
    dtypes are checked they contain supported data types. ‘Object’ columns that contain strings are
    converted to the ‘string’ dtype and loaded accordingly. Other types can only be loaded if
    materialization is ‘cte’ and the type is supported as Bach Series.


    * **name** (*str*) – 
        * For ‘table’ materialization: name of the table that Pandas will write the data to.


        * For ‘cte’ materialization: name of the node in the underlying SqlModel graph.



    * **materialization** (*str*) – {‘cte’, ‘table’}. How to materialize the data.


    * **if_exists** (*str*) – {‘fail’, ‘replace’, ‘append’}. Only applies to `materialization=’table’`
    How to behave if the table already exists:


        * fail: Raise a ValueError.


        * replace: Drop the table before inserting new values.


        * append: Insert new values to the existing table.




* **Returns**

    A DataFrame based on a pandas DataFrame



* **Return type**

    [bach.dataframe.DataFrame](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)


**WARNING**: This method is only suited for small quantities of data.

<!-- !! processed by numpydoc !! -->
