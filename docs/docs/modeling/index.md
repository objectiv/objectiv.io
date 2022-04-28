---
date: '2022-04-28T19:19:08.619Z'
id: index
sidebar_position: 1
slug: /modeling//
title: Introduction
---

# Introduction

Data collected with Objectiv’s Tracker and stored in an SQL database can be analyzed in a Jupyter notebook with the open model hub. The open model hub is a growing collection of open-source, free to use data models that you can take, combine and run for product analysis and exploration. It includes models for a wide range of typical product analytics use cases.

If you want to use the open model hub, install the package from Pypi as follows:

pip install objectiv-modelhub

See the example notebooks section to get started immediately. View the list of available models here or check out the full open model hub api reference. More information on setting up a development environment for the open model hub and how to configure Metabase is in the readme.

The open model hub is powered by Bach: Objectiv’s data modeling library. With Bach, you can compose models with familiar Pandas-like dataframe operations in your notebook. It uses a SQL abstraction layer that enables models to run on the full dataset, and you can output models to SQL with a single command. Head over to the Bach section to learn all about it.


* [Model overview](/docs/modeling/models/index/)


    * [Mapping](/docs/modeling/models/index/#mapping)


        * [modelhub.Map.is_first_session](/docs/modeling/models/Mapping/modelhub.Map.is-first-session/)


        * [modelhub.Map.is_new_user](/docs/modeling/models/Mapping/modelhub.Map.is-new-user/)


        * [modelhub.Map.is_conversion_event](/docs/modeling/models/Mapping/modelhub.Map.is-conversion-event/)


        * [modelhub.Map.conversions_counter](/docs/modeling/models/Mapping/modelhub.Map.conversions-counter/)


        * [modelhub.Map.conversions_in_time](/docs/modeling/models/Mapping/modelhub.Map.conversions-in-time/)


        * [modelhub.Map.pre_conversion_hit_number](/docs/modeling/models/Mapping/modelhub.Map.pre-conversion-hit-number/)


    * [Aggregation](/docs/modeling/models/index/#aggregation)


        * [modelhub.Aggregate.unique_users](/docs/modeling/models/Aggregation/modelhub.Aggregate.unique-users/)


        * [modelhub.Aggregate.unique_sessions](/docs/modeling/models/Aggregation/modelhub.Aggregate.unique-sessions/)


        * [modelhub.Aggregate.session_duration](/docs/modeling/models/Aggregation/modelhub.Aggregate.session-duration/)


        * [modelhub.Aggregate.frequency](/docs/modeling/models/Aggregation/modelhub.Aggregate.frequency/)


* [Open model hub API reference](/docs/modeling/modelhub-api-reference/index/)


    * [ModelHub](/docs/modeling/modelhub-api-reference/ModelHub/index/)


        * [modelhub.ModelHub](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub/)


            * [modelhub.ModelHub.add_conversion_event](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.add-conversion-event/)


            * [modelhub.ModelHub.get_objectiv_dataframe](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.get-objectiv-dataframe/)


            * [modelhub.ModelHub.time_agg](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.time-agg/)


            * [modelhub.ModelHub.to_metabase](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.to-metabase/)


            * [modelhub.ModelHub.agg](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.agg/)


            * [modelhub.ModelHub.aggregate](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.aggregate/)


            * [modelhub.ModelHub.conversion_events](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.conversion-events/)


            * [modelhub.ModelHub.map](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.map/)


            * [modelhub.ModelHub.time_aggregation](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.time-aggregation/)


    * [SeriesGlobalContexts](/docs/modeling/modelhub-api-reference/SeriesGlobalContexts/index/)


        * [modelhub.SeriesGlobalContexts](/docs/modeling/modelhub-api-reference/SeriesGlobalContexts/modelhub.SeriesGlobalContexts/)


            * [modelhub.SeriesGlobalContexts.gc](/docs/modeling/modelhub-api-reference/SeriesGlobalContexts/modelhub.SeriesGlobalContexts.gc/)


            * [modelhub.SeriesGlobalContexts.global_contexts](/docs/modeling/modelhub-api-reference/SeriesGlobalContexts/modelhub.SeriesGlobalContexts.global-contexts/)


            * [modelhub.SeriesGlobalContexts.obj](/docs/modeling/modelhub-api-reference/SeriesGlobalContexts/modelhub.SeriesGlobalContexts.obj/)


            * [modelhub.SeriesGlobalContexts.objectiv](/docs/modeling/modelhub-api-reference/SeriesGlobalContexts/modelhub.SeriesGlobalContexts.objectiv/)


    * [SeriesLocationStack](/docs/modeling/modelhub-api-reference/SeriesLocationStack/index/)


        * [modelhub.SeriesLocationStack](/docs/modeling/modelhub-api-reference/SeriesLocationStack/modelhub.SeriesLocationStack/)


            * [modelhub.SeriesLocationStack.location_stack](/docs/modeling/modelhub-api-reference/SeriesLocationStack/modelhub.SeriesLocationStack.location-stack/)


            * [modelhub.SeriesLocationStack.ls](/docs/modeling/modelhub-api-reference/SeriesLocationStack/modelhub.SeriesLocationStack.ls/)


            * [modelhub.SeriesLocationStack.obj](/docs/modeling/modelhub-api-reference/SeriesLocationStack/modelhub.SeriesLocationStack.obj/)


            * [modelhub.SeriesLocationStack.objectiv](/docs/modeling/modelhub-api-reference/SeriesLocationStack/modelhub.SeriesLocationStack.objectiv/)


* [Bach](/docs/modeling/bach/api-reference/index/)


    * [DataFrame](/docs/modeling/bach/api-reference/DataFrame/index/)


        * [bach.DataFrame](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/)


            * [bach.DataFrame.agg](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.agg/)


            * [bach.DataFrame.aggregate](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.aggregate/)


            * [bach.DataFrame.append](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.append/)


            * [bach.DataFrame.astype](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.astype/)


            * [bach.DataFrame.bfill](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.bfill/)


            * [bach.DataFrame.copy](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.copy/)


            * [bach.DataFrame.count](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.count/)


            * [bach.DataFrame.create_variable](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.create-variable/)


            * [bach.DataFrame.cube](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.cube/)


            * [bach.DataFrame.describe](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.describe/)


            * [bach.DataFrame.drop](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.drop/)


            * [bach.DataFrame.drop_duplicates](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.drop-duplicates/)


            * [bach.DataFrame.dropna](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.dropna/)


            * [bach.DataFrame.expanding](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.expanding/)


            * [bach.DataFrame.ffill](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.ffill/)


            * [bach.DataFrame.fillna](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.fillna/)


            * [bach.DataFrame.from_model](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.from-model/)


            * [bach.DataFrame.from_pandas](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.from-pandas/)


            * [bach.DataFrame.from_table](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.from-table/)


            * [bach.DataFrame.get_all_variable_usage](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.get-all-variable-usage/)


            * [bach.DataFrame.get_dummies](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.get-dummies/)


            * [bach.DataFrame.get_sample](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.get-sample/)


            * [bach.DataFrame.get_unsampled](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.get-unsampled/)


            * [bach.DataFrame.groupby](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.groupby/)


            * [bach.DataFrame.head](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.head/)


            * [bach.DataFrame.materialize](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.materialize/)


            * [bach.DataFrame.max](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.max/)


            * [bach.DataFrame.mean](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.mean/)


            * [bach.DataFrame.median](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.median/)


            * [bach.DataFrame.merge](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.merge/)


            * [bach.DataFrame.min](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.min/)


            * [bach.DataFrame.minmax_scale](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.minmax-scale/)


            * [bach.DataFrame.mode](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.mode/)


            * [bach.DataFrame.nunique](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.nunique/)


            * [bach.DataFrame.quantile](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.quantile/)


            * [bach.DataFrame.rename](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.rename/)


            * [bach.DataFrame.reset_index](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.reset-index/)


            * [bach.DataFrame.rolling](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.rolling/)


            * [bach.DataFrame.rollup](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.rollup/)


            * [bach.DataFrame.round](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.round/)


            * [bach.DataFrame.scale](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.scale/)


            * [bach.DataFrame.sem](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.sem/)


            * [bach.DataFrame.set_index](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.set-index/)


            * [bach.DataFrame.set_savepoint](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.set-savepoint/)


            * [bach.DataFrame.set_variable](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.set-variable/)


            * [bach.DataFrame.sort_index](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.sort-index/)


            * [bach.DataFrame.sort_values](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.sort-values/)


            * [bach.DataFrame.stack](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.stack/)


            * [bach.DataFrame.std](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.std/)


            * [bach.DataFrame.std_pop](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.std-pop/)


            * [bach.DataFrame.sum](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.sum/)


            * [bach.DataFrame.to_numpy](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.to-numpy/)


            * [bach.DataFrame.to_pandas](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.to-pandas/)


            * [bach.DataFrame.unstack](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.unstack/)


            * [bach.DataFrame.value_counts](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.value-counts/)


            * [bach.DataFrame.var](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.var/)


            * [bach.DataFrame.view_sql](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.view-sql/)


            * [bach.DataFrame.window](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.window/)


            * [bach.DataFrame.all_series](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.all-series/)


            * [bach.DataFrame.data](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.data/)


            * [bach.DataFrame.data_columns](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.data-columns/)


            * [bach.DataFrame.dtypes](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.dtypes/)


            * [bach.DataFrame.group_by](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.group-by/)


            * [bach.DataFrame.index](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.index/)


            * [bach.DataFrame.index_columns](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.index-columns/)


            * [bach.DataFrame.index_dtypes](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.index-dtypes/)


            * [bach.DataFrame.is_materialized](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.is-materialized/)


            * [bach.DataFrame.loc](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.loc/)


            * [bach.DataFrame.order_by](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.order-by/)


            * [bach.DataFrame.plot](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.plot/)


            * [bach.DataFrame.savepoints](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.savepoints/)


            * [bach.DataFrame.variables](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.variables/)


    * [Series](/docs/modeling/bach/api-reference/Series/index/)


        * [bach.Series](/docs/modeling/bach/api-reference/Series/bach.Series/)


            * [bach.Series.agg](/docs/modeling/bach/api-reference/Series/bach.Series.agg/)


            * [bach.Series.aggregate](/docs/modeling/bach/api-reference/Series/bach.Series.aggregate/)


            * [bach.Series.all_values](/docs/modeling/bach/api-reference/Series/bach.Series.all-values/)


            * [bach.Series.any_value](/docs/modeling/bach/api-reference/Series/bach.Series.any-value/)


            * [bach.Series.append](/docs/modeling/bach/api-reference/Series/bach.Series.append/)


            * [bach.Series.apply_func](/docs/modeling/bach/api-reference/Series/bach.Series.apply-func/)


            * [bach.Series.astype](/docs/modeling/bach/api-reference/Series/bach.Series.astype/)


            * [bach.Series.copy](/docs/modeling/bach/api-reference/Series/bach.Series.copy/)


            * [bach.Series.count](/docs/modeling/bach/api-reference/Series/bach.Series.count/)


            * [bach.Series.describe](/docs/modeling/bach/api-reference/Series/bach.Series.describe/)


            * [bach.Series.drop_duplicates](/docs/modeling/bach/api-reference/Series/bach.Series.drop-duplicates/)


            * [bach.Series.dropna](/docs/modeling/bach/api-reference/Series/bach.Series.dropna/)


            * [bach.Series.exists](/docs/modeling/bach/api-reference/Series/bach.Series.exists/)


            * [bach.Series.fillna](/docs/modeling/bach/api-reference/Series/bach.Series.fillna/)


            * [bach.Series.from_const](/docs/modeling/bach/api-reference/Series/bach.Series.from-const/)


            * [bach.Series.get_db_dtype](/docs/modeling/bach/api-reference/Series/bach.Series.get-db-dtype/)


            * [bach.Series.head](/docs/modeling/bach/api-reference/Series/bach.Series.head/)


            * [bach.Series.isin](/docs/modeling/bach/api-reference/Series/bach.Series.isin/)


            * [bach.Series.isnull](/docs/modeling/bach/api-reference/Series/bach.Series.isnull/)


            * [bach.Series.max](/docs/modeling/bach/api-reference/Series/bach.Series.max/)


            * [bach.Series.median](/docs/modeling/bach/api-reference/Series/bach.Series.median/)


            * [bach.Series.min](/docs/modeling/bach/api-reference/Series/bach.Series.min/)


            * [bach.Series.mode](/docs/modeling/bach/api-reference/Series/bach.Series.mode/)


            * [bach.Series.notnull](/docs/modeling/bach/api-reference/Series/bach.Series.notnull/)


            * [bach.Series.nunique](/docs/modeling/bach/api-reference/Series/bach.Series.nunique/)


            * [bach.Series.sort_index](/docs/modeling/bach/api-reference/Series/bach.Series.sort-index/)


            * [bach.Series.sort_values](/docs/modeling/bach/api-reference/Series/bach.Series.sort-values/)


            * [bach.Series.to_frame](/docs/modeling/bach/api-reference/Series/bach.Series.to-frame/)


            * [bach.Series.to_numpy](/docs/modeling/bach/api-reference/Series/bach.Series.to-numpy/)


            * [bach.Series.to_pandas](/docs/modeling/bach/api-reference/Series/bach.Series.to-pandas/)


            * [bach.Series.unique](/docs/modeling/bach/api-reference/Series/bach.Series.unique/)


            * [bach.Series.unstack](/docs/modeling/bach/api-reference/Series/bach.Series.unstack/)


            * [bach.Series.value_counts](/docs/modeling/bach/api-reference/Series/bach.Series.value-counts/)


            * [bach.Series.view_sql](/docs/modeling/bach/api-reference/Series/bach.Series.view-sql/)


            * [bach.Series.window_cume_dist](/docs/modeling/bach/api-reference/Series/bach.Series.window-cume-dist/)


            * [bach.Series.window_dense_rank](/docs/modeling/bach/api-reference/Series/bach.Series.window-dense-rank/)


            * [bach.Series.window_first_value](/docs/modeling/bach/api-reference/Series/bach.Series.window-first-value/)


            * [bach.Series.window_lag](/docs/modeling/bach/api-reference/Series/bach.Series.window-lag/)


            * [bach.Series.window_last_value](/docs/modeling/bach/api-reference/Series/bach.Series.window-last-value/)


            * [bach.Series.window_lead](/docs/modeling/bach/api-reference/Series/bach.Series.window-lead/)


            * [bach.Series.window_nth_value](/docs/modeling/bach/api-reference/Series/bach.Series.window-nth-value/)


            * [bach.Series.window_ntile](/docs/modeling/bach/api-reference/Series/bach.Series.window-ntile/)


            * [bach.Series.window_percent_rank](/docs/modeling/bach/api-reference/Series/bach.Series.window-percent-rank/)


            * [bach.Series.window_rank](/docs/modeling/bach/api-reference/Series/bach.Series.window-rank/)


            * [bach.Series.window_row_number](/docs/modeling/bach/api-reference/Series/bach.Series.window-row-number/)


            * [bach.Series.array](/docs/modeling/bach/api-reference/Series/bach.Series.array/)


            * [bach.Series.base_node](/docs/modeling/bach/api-reference/Series/bach.Series.base-node/)


            * [bach.Series.group_by](/docs/modeling/bach/api-reference/Series/bach.Series.group-by/)


            * [bach.Series.index](/docs/modeling/bach/api-reference/Series/bach.Series.index/)


            * [bach.Series.index_sorting](/docs/modeling/bach/api-reference/Series/bach.Series.index-sorting/)


            * [bach.Series.name](/docs/modeling/bach/api-reference/Series/bach.Series.name/)


            * [bach.Series.sorted_ascending](/docs/modeling/bach/api-reference/Series/bach.Series.sorted-ascending/)


            * [bach.Series.value](/docs/modeling/bach/api-reference/Series/bach.Series.value/)
