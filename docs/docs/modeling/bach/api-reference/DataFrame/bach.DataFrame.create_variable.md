---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-create-variable
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.create-variable/
title: bach.DataFrame.create_variable
---

bach.DataFrame.create_variable


#### DataFrame.create_variable(name, value, \*, dtype=None)
Create a Series object that can be used as a variable, within the returned DataFrame. The
DataFrame will have the variable with the given values set in [bach.DataFrame.variables](#bach.DataFrame.variables)`DataFrame.variables()`.

The variable value can later be changed using [bach.DataFrame.set_variable](#bach.DataFrame.set_variable)`DataFrame.set_variable()`

**Multiple variables with the same name**

For variables the combination (name, dtype) uniquely identifies a variable. That means that there
can be multiple variables with the same name, if they are of different types. This is counter to
how a lot of programming languages handle variables. But it prevents a lot of error conditions and
edge cases around merging DataFrames and Series with the same variables, and building on top of
SqlModels that already have variables.


* **Parameters**

    
    * **name** (*str*) – name of variable to update


    * **value** (*Any*) – value of variable


    * **dtype** (*Optional**[**str**]*) – optional. If not set it will be derived from the value, if set we check that it
    matches the value. If dtype doesn’t match the value’s dtype, then an Exception is raised.



* **Returns**

    Tuple with DataFrame and the Series object that can be used as a variable.



* **Return type**

    *Tuple*[[bach.DataFrame](#bach.DataFrame)DataFrame, [bach.Series](#bach.Series)Series]


<!-- !! processed by numpydoc !! -->
