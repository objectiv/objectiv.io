---
date: '2022-04-28T14:46:08.106Z'
id: bach-api-reference-data-frame-bach-data-frame-drop-duplicates
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.drop-duplicates/
title: bach.DataFrame.drop_duplicates
---

# bach.DataFrame.drop_duplicates


#### DataFrame.drop_duplicates(subset=None, keep='first', ignore_index=False, sort_by=None, ascending=True)
Return a dataframe with duplicated rows removed based on all series labels or a subset of labels.


* **Parameters**

    
    * **subset** (*Optional**[**Union**[**str**, **Sequence**[**str**]**]**]*) – series label or sequence of labels.
    Duplications to be dropped are based on the combination of the subset of series.
    If not provided, all series labels will be used by default.


    * **keep** (*Union**[**str**, **bool**]*) – Supported values: “first”, “last” and False. Determines which duplicates to keep:


        * `first`: drop all occurrences except the first one


        * `last`:  drop all occurrences except the last one


        * False: drops all duplicates

    If no value is provided, first occurrences will be kept by default.



    * **ignore_index** (*bool*) – if true, drops indexes of the result


    * **sort_by** (*Optional**[**Union**[**str**, **Sequence**[**str**]**]**]*) – series label or sequence of labels used to sort values.
    Sorting of values is needed since result might be non-deterministic
    when keep == “first” or keep == “last”. If not provided:
    1. If dataframe has already an order_by, first and last values will be performed based on it
    2. Else all series not considered in duplication will be used instead.


    * **ascending** (*Union**[**bool**, **List**[**bool**]**]*) – Whether to sort ascending (True) or descending (False). If this is a list, then the
    `by` must also be a list and `len(ascending) == len(by)`.



* **Returns**

    a new dataframe with dropped duplicates.



* **Return type**

    [bach.dataframe.DataFrame](bach.DataFrame/#bach.DataFrame)


<!-- !! processed by numpydoc !! -->
