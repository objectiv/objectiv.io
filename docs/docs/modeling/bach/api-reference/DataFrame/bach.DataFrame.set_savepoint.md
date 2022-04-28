---
date: '2022-04-28T19:19:08.619Z'
id: bach-api-reference-data-frame-bach-data-frame-set-savepoint
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.set-savepoint/
title: bach.DataFrame.set_savepoint
---

# bach.DataFrame.set_savepoint


#### DataFrame.set_savepoint(name, materialization=Materialization.CTE)
Set the current state as a savepoint in `self.savepoints`.


* **Parameters**

    
    * **save_points** – Savepoints object that’s responsible for tracking all savepoints.


    * **name** (*str*) – Name for the savepoint. This will be the name of the table or view if that’s set as
    materialization. Must be unique both within the Savepoints and within the base_node.


    * **materialization** (*Union**[**sql_models.model.Materialization**, **str**]*) – Optional materialization of the savepoint in the database. This doesn’t do
    anything unless self.savepoints.write_to_db() gets called and the savepoints are actually
    materialized into the database.


<!-- !! processed by numpydoc !! -->
