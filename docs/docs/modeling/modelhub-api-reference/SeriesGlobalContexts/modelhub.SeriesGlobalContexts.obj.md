---
date: '2022-04-28T19:24:58.840Z'
id: modelhub-api-reference-series-global-contexts-modelhub-series-global-contexts-obj
slug: /modeling/modelhub-api-reference/SeriesGlobalContexts/modelhub.SeriesGlobalContexts.obj/
title: modelhub.SeriesGlobalContexts.obj
---

# modelhub.SeriesGlobalContexts.obj


#### _property_ SeriesGlobalContexts.obj()
Accessor for Objectiv stack data. All methods of `json` can also be accessed with this
accessor. Same as [`objectiv`](/docs/modeling/modelhub-api-reference/SeriesGlobalContexts/modelhub.SeriesGlobalContexts.objectiv/#modelhub.SeriesGlobalContexts.objectiv)


#### _class_ ObjectivStack(series_object)
<!-- !! processed by numpydoc !! -->

#### ObjectivStack.get_from_context_with_type_series(type, key, dtype='string')
Returns the value of `key` from the first context in an Objectiv stack where `_type` matches `type`.


* **Parameters**

    
    * **type** – the _type to search for in the contexts of the stack.


    * **key** – the value of the key to return of the context with matching type.


    * **dtype** – the dtype of the series to return.



* **Returns**

    a series of type `dtype`


<!-- !! processed by numpydoc !! -->
<!-- !! processed by numpydoc !! -->
