---
date: '2022-04-28T14:46:08.106Z'
id: bach-api-reference-data-frame-bach-data-frame-set-variable
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.set-variable/
title: bach.DataFrame.set_variable
---

# bach.DataFrame.set_variable


#### DataFrame.set_variable(name, value, \*, dtype=None)
Return a copy of this DataFrame with the variable value updated.


* **Parameters**

    
    * **name** (*str*) – name of variable to update


    * **value** (*Any*) – new value of variable


    * **dtype** (*Optional**[**str**]*) – optional. If not set it will be derived from the value, if set we check that it
    matches the value. If dtype doesn’t match the value’s dtype, then an Exception is raised.



* **Returns**

    copy of this DataFrame, with the value updated.



* **Return type**

    [bach.dataframe.DataFrame](bach.DataFrame/#bach.DataFrame)


<!-- !! processed by numpydoc !! -->
