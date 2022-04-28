---
date: '2022-04-28T19:19:08.619Z'
id: bach-api-reference-data-frame-bach-data-frame-append
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.append/
title: bach.DataFrame.append
---

# bach.DataFrame.append


#### DataFrame.append(other, ignore_index=False, sort=False)
Append rows of other dataframes to the the caller dataframe.
Non-shared columns between dataframes are added to the caller.


* **Parameters**

    
    * **other** (*Union**[*[*bach.dataframe.DataFrame*](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)*, **List**[*[*bach.dataframe.DataFrame*](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)*]**]*) – objects to be added


    * **ignore_index** (*bool*) – if true, drops indexes of all object to be appended


    * **sort** (*bool*) – if true, columns are sorted alphanumerically



* **Returns**

    a new dataframe with all rows from appended Dataframes.



* **Return type**

    [bach.dataframe.DataFrame](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)


<!-- !! processed by numpydoc !! -->
