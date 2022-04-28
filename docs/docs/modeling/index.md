---
date: '2022-04-28T14:46:08.106Z'
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


* [Model overview](models/index/)


    * [Mapping](models/index/#mapping)


        * [modelhub.Map.is_first_session](models/Mapping/modelhub.Map.is-first-session/)


        * [modelhub.Map.is_new_user](models/Mapping/modelhub.Map.is-new-user/)


        * [modelhub.Map.is_conversion_event](models/Mapping/modelhub.Map.is-conversion-event/)


        * [modelhub.Map.conversions_counter](models/Mapping/modelhub.Map.conversions-counter/)


        * [modelhub.Map.conversions_in_time](models/Mapping/modelhub.Map.conversions-in-time/)


        * [modelhub.Map.pre_conversion_hit_number](models/Mapping/modelhub.Map.pre-conversion-hit-number/)


    * [Aggregation](models/index/#aggregation)


        * [modelhub.Aggregate.unique_users](models/Aggregation/modelhub.Aggregate.unique-users/)


        * [modelhub.Aggregate.unique_sessions](models/Aggregation/modelhub.Aggregate.unique-sessions/)


        * [modelhub.Aggregate.session_duration](models/Aggregation/modelhub.Aggregate.session-duration/)


        * [modelhub.Aggregate.frequency](models/Aggregation/modelhub.Aggregate.frequency/)


* [Open model hub API reference](modelhub-api-reference/index/)


    * [ModelHub](modelhub-api-reference/ModelHub/index/)


        * [modelhub.ModelHub](modelhub-api-reference/ModelHub/modelhub.ModelHub/)


            * [modelhub.ModelHub.add_conversion_event](modelhub-api-reference/ModelHub/modelhub.ModelHub.add-conversion-event/)


            * [modelhub.ModelHub.get_objectiv_dataframe](modelhub-api-reference/ModelHub/modelhub.ModelHub.get-objectiv-dataframe/)


            * [modelhub.ModelHub.time_agg](modelhub-api-reference/ModelHub/modelhub.ModelHub.time-agg/)


            * [modelhub.ModelHub.to_metabase](modelhub-api-reference/ModelHub/modelhub.ModelHub.to-metabase/)


            * [modelhub.ModelHub.agg](modelhub-api-reference/ModelHub/modelhub.ModelHub.agg/)


            * [modelhub.ModelHub.aggregate](modelhub-api-reference/ModelHub/modelhub.ModelHub.aggregate/)


            * [modelhub.ModelHub.conversion_events](modelhub-api-reference/ModelHub/modelhub.ModelHub.conversion-events/)


            * [modelhub.ModelHub.map](modelhub-api-reference/ModelHub/modelhub.ModelHub.map/)


            * [modelhub.ModelHub.time_aggregation](modelhub-api-reference/ModelHub/modelhub.ModelHub.time-aggregation/)


    * [SeriesGlobalContexts](modelhub-api-reference/SeriesGlobalContexts/index/)


        * [modelhub.SeriesGlobalContexts](modelhub-api-reference/SeriesGlobalContexts/modelhub.SeriesGlobalContexts/)


            * [modelhub.SeriesGlobalContexts.gc](modelhub-api-reference/SeriesGlobalContexts/modelhub.SeriesGlobalContexts.gc/)


            * [modelhub.SeriesGlobalContexts.global_contexts](modelhub-api-reference/SeriesGlobalContexts/modelhub.SeriesGlobalContexts.global-contexts/)


            * [modelhub.SeriesGlobalContexts.obj](modelhub-api-reference/SeriesGlobalContexts/modelhub.SeriesGlobalContexts.obj/)


            * [modelhub.SeriesGlobalContexts.objectiv](modelhub-api-reference/SeriesGlobalContexts/modelhub.SeriesGlobalContexts.objectiv/)


    * [SeriesLocationStack](modelhub-api-reference/SeriesLocationStack/index/)


        * [modelhub.SeriesLocationStack](modelhub-api-reference/SeriesLocationStack/modelhub.SeriesLocationStack/)


            * [modelhub.SeriesLocationStack.location_stack](modelhub-api-reference/SeriesLocationStack/modelhub.SeriesLocationStack.location-stack/)


            * [modelhub.SeriesLocationStack.ls](modelhub-api-reference/SeriesLocationStack/modelhub.SeriesLocationStack.ls/)


            * [modelhub.SeriesLocationStack.obj](modelhub-api-reference/SeriesLocationStack/modelhub.SeriesLocationStack.obj/)


            * [modelhub.SeriesLocationStack.objectiv](modelhub-api-reference/SeriesLocationStack/modelhub.SeriesLocationStack.objectiv/)


* [Bach](bach/api-reference/index/)


    * [DataFrame](bach/api-reference/DataFrame/index/)


        * [bach.DataFrame](bach/api-reference/DataFrame/bach.DataFrame/)


            * [bach.DataFrame.agg](bach/api-reference/DataFrame/bach.DataFrame.agg/)


            * [bach.DataFrame.aggregate](bach/api-reference/DataFrame/bach.DataFrame.aggregate/)


            * [bach.DataFrame.append](bach/api-reference/DataFrame/bach.DataFrame.append/)


            * [bach.DataFrame.astype](bach/api-reference/DataFrame/bach.DataFrame.astype/)


            * [bach.DataFrame.bfill](bach/api-reference/DataFrame/bach.DataFrame.bfill/)


            * [bach.DataFrame.copy](bach/api-reference/DataFrame/bach.DataFrame.copy/)


            * [bach.DataFrame.count](bach/api-reference/DataFrame/bach.DataFrame.count/)


            * [bach.DataFrame.create_variable](bach/api-reference/DataFrame/bach.DataFrame.create-variable/)


            * [bach.DataFrame.cube](bach/api-reference/DataFrame/bach.DataFrame.cube/)


            * [bach.DataFrame.describe](bach/api-reference/DataFrame/bach.DataFrame.describe/)


            * [bach.DataFrame.drop](bach/api-reference/DataFrame/bach.DataFrame.drop/)


            * [bach.DataFrame.drop_duplicates](bach/api-reference/DataFrame/bach.DataFrame.drop-duplicates/)


            * [bach.DataFrame.dropna](bach/api-reference/DataFrame/bach.DataFrame.dropna/)


            * [bach.DataFrame.expanding](bach/api-reference/DataFrame/bach.DataFrame.expanding/)


            * [bach.DataFrame.ffill](bach/api-reference/DataFrame/bach.DataFrame.ffill/)


            * [bach.DataFrame.fillna](bach/api-reference/DataFrame/bach.DataFrame.fillna/)


            * [bach.DataFrame.from_model](bach/api-reference/DataFrame/bach.DataFrame.from-model/)


            * [bach.DataFrame.from_pandas](bach/api-reference/DataFrame/bach.DataFrame.from-pandas/)


            * [bach.DataFrame.from_table](bach/api-reference/DataFrame/bach.DataFrame.from-table/)


            * [bach.DataFrame.get_all_variable_usage](bach/api-reference/DataFrame/bach.DataFrame.get-all-variable-usage/)


            * [bach.DataFrame.get_dummies](bach/api-reference/DataFrame/bach.DataFrame.get-dummies/)


            * [bach.DataFrame.get_sample](bach/api-reference/DataFrame/bach.DataFrame.get-sample/)


            * [bach.DataFrame.get_unsampled](bach/api-reference/DataFrame/bach.DataFrame.get-unsampled/)


            * [bach.DataFrame.groupby](bach/api-reference/DataFrame/bach.DataFrame.groupby/)


            * [bach.DataFrame.head](bach/api-reference/DataFrame/bach.DataFrame.head/)


            * [bach.DataFrame.materialize](bach/api-reference/DataFrame/bach.DataFrame.materialize/)


            * [bach.DataFrame.max](bach/api-reference/DataFrame/bach.DataFrame.max/)


            * [bach.DataFrame.mean](bach/api-reference/DataFrame/bach.DataFrame.mean/)


            * [bach.DataFrame.median](bach/api-reference/DataFrame/bach.DataFrame.median/)


            * [bach.DataFrame.merge](bach/api-reference/DataFrame/bach.DataFrame.merge/)


            * [bach.DataFrame.min](bach/api-reference/DataFrame/bach.DataFrame.min/)


            * [bach.DataFrame.minmax_scale](bach/api-reference/DataFrame/bach.DataFrame.minmax-scale/)


            * [bach.DataFrame.mode](bach/api-reference/DataFrame/bach.DataFrame.mode/)


            * [bach.DataFrame.nunique](bach/api-reference/DataFrame/bach.DataFrame.nunique/)


            * [bach.DataFrame.quantile](bach/api-reference/DataFrame/bach.DataFrame.quantile/)


            * [bach.DataFrame.rename](bach/api-reference/DataFrame/bach.DataFrame.rename/)


            * [bach.DataFrame.reset_index](bach/api-reference/DataFrame/bach.DataFrame.reset-index/)


            * [bach.DataFrame.rolling](bach/api-reference/DataFrame/bach.DataFrame.rolling/)


            * [bach.DataFrame.rollup](bach/api-reference/DataFrame/bach.DataFrame.rollup/)


            * [bach.DataFrame.round](bach/api-reference/DataFrame/bach.DataFrame.round/)


            * [bach.DataFrame.scale](bach/api-reference/DataFrame/bach.DataFrame.scale/)


            * [bach.DataFrame.sem](bach/api-reference/DataFrame/bach.DataFrame.sem/)


            * [bach.DataFrame.set_index](bach/api-reference/DataFrame/bach.DataFrame.set-index/)


            * [bach.DataFrame.set_savepoint](bach/api-reference/DataFrame/bach.DataFrame.set-savepoint/)


            * [bach.DataFrame.set_variable](bach/api-reference/DataFrame/bach.DataFrame.set-variable/)


            * [bach.DataFrame.sort_index](bach/api-reference/DataFrame/bach.DataFrame.sort-index/)


            * [bach.DataFrame.sort_values](bach/api-reference/DataFrame/bach.DataFrame.sort-values/)


            * [bach.DataFrame.stack](bach/api-reference/DataFrame/bach.DataFrame.stack/)


            * [bach.DataFrame.std](bach/api-reference/DataFrame/bach.DataFrame.std/)


            * [bach.DataFrame.std_pop](bach/api-reference/DataFrame/bach.DataFrame.std-pop/)


            * [bach.DataFrame.sum](bach/api-reference/DataFrame/bach.DataFrame.sum/)


            * [bach.DataFrame.to_numpy](bach/api-reference/DataFrame/bach.DataFrame.to-numpy/)


            * [bach.DataFrame.to_pandas](bach/api-reference/DataFrame/bach.DataFrame.to-pandas/)


            * [bach.DataFrame.unstack](bach/api-reference/DataFrame/bach.DataFrame.unstack/)


            * [bach.DataFrame.value_counts](bach/api-reference/DataFrame/bach.DataFrame.value-counts/)


            * [bach.DataFrame.var](bach/api-reference/DataFrame/bach.DataFrame.var/)


            * [bach.DataFrame.view_sql](bach/api-reference/DataFrame/bach.DataFrame.view-sql/)


            * [bach.DataFrame.window](bach/api-reference/DataFrame/bach.DataFrame.window/)


            * [bach.DataFrame.all_series](bach/api-reference/DataFrame/bach.DataFrame.all-series/)


            * [bach.DataFrame.data](bach/api-reference/DataFrame/bach.DataFrame.data/)


            * [bach.DataFrame.data_columns](bach/api-reference/DataFrame/bach.DataFrame.data-columns/)


            * [bach.DataFrame.dtypes](bach/api-reference/DataFrame/bach.DataFrame.dtypes/)


            * [bach.DataFrame.group_by](bach/api-reference/DataFrame/bach.DataFrame.group-by/)


            * [bach.DataFrame.index](bach/api-reference/DataFrame/bach.DataFrame.index/)


            * [bach.DataFrame.index_columns](bach/api-reference/DataFrame/bach.DataFrame.index-columns/)


            * [bach.DataFrame.index_dtypes](bach/api-reference/DataFrame/bach.DataFrame.index-dtypes/)


            * [bach.DataFrame.is_materialized](bach/api-reference/DataFrame/bach.DataFrame.is-materialized/)


            * [bach.DataFrame.loc](bach/api-reference/DataFrame/bach.DataFrame.loc/)


            * [bach.DataFrame.order_by](bach/api-reference/DataFrame/bach.DataFrame.order-by/)


            * [bach.DataFrame.plot](bach/api-reference/DataFrame/bach.DataFrame.plot/)


            * [bach.DataFrame.savepoints](bach/api-reference/DataFrame/bach.DataFrame.savepoints/)


            * [bach.DataFrame.variables](bach/api-reference/DataFrame/bach.DataFrame.variables/)


    * [Series](bach/api-reference/Series/index/)


        * [bach.Series](bach/api-reference/Series/bach.Series/)


            * [bach.Series.agg](bach/api-reference/Series/bach.Series.agg/)


            * [bach.Series.aggregate](bach/api-reference/Series/bach.Series.aggregate/)


            * [bach.Series.all_values](bach/api-reference/Series/bach.Series.all-values/)


            * [bach.Series.any_value](bach/api-reference/Series/bach.Series.any-value/)


            * [bach.Series.append](bach/api-reference/Series/bach.Series.append/)


            * [bach.Series.apply_func](bach/api-reference/Series/bach.Series.apply-func/)


            * [bach.Series.astype](bach/api-reference/Series/bach.Series.astype/)


            * [bach.Series.copy](bach/api-reference/Series/bach.Series.copy/)


            * [bach.Series.count](bach/api-reference/Series/bach.Series.count/)


            * [bach.Series.describe](bach/api-reference/Series/bach.Series.describe/)


            * [bach.Series.drop_duplicates](bach/api-reference/Series/bach.Series.drop-duplicates/)


            * [bach.Series.dropna](bach/api-reference/Series/bach.Series.dropna/)


            * [bach.Series.exists](bach/api-reference/Series/bach.Series.exists/)


            * [bach.Series.fillna](bach/api-reference/Series/bach.Series.fillna/)


            * [bach.Series.from_const](bach/api-reference/Series/bach.Series.from-const/)


            * [bach.Series.get_db_dtype](bach/api-reference/Series/bach.Series.get-db-dtype/)


            * [bach.Series.head](bach/api-reference/Series/bach.Series.head/)


            * [bach.Series.isin](bach/api-reference/Series/bach.Series.isin/)


            * [bach.Series.isnull](bach/api-reference/Series/bach.Series.isnull/)


            * [bach.Series.max](bach/api-reference/Series/bach.Series.max/)


            * [bach.Series.median](bach/api-reference/Series/bach.Series.median/)


            * [bach.Series.min](bach/api-reference/Series/bach.Series.min/)


            * [bach.Series.mode](bach/api-reference/Series/bach.Series.mode/)


            * [bach.Series.notnull](bach/api-reference/Series/bach.Series.notnull/)


            * [bach.Series.nunique](bach/api-reference/Series/bach.Series.nunique/)


            * [bach.Series.sort_index](bach/api-reference/Series/bach.Series.sort-index/)


            * [bach.Series.sort_values](bach/api-reference/Series/bach.Series.sort-values/)


            * [bach.Series.to_frame](bach/api-reference/Series/bach.Series.to-frame/)


            * [bach.Series.to_numpy](bach/api-reference/Series/bach.Series.to-numpy/)


            * [bach.Series.to_pandas](bach/api-reference/Series/bach.Series.to-pandas/)


            * [bach.Series.unique](bach/api-reference/Series/bach.Series.unique/)


            * [bach.Series.unstack](bach/api-reference/Series/bach.Series.unstack/)


            * [bach.Series.value_counts](bach/api-reference/Series/bach.Series.value-counts/)


            * [bach.Series.view_sql](bach/api-reference/Series/bach.Series.view-sql/)


            * [bach.Series.window_cume_dist](bach/api-reference/Series/bach.Series.window-cume-dist/)


            * [bach.Series.window_dense_rank](bach/api-reference/Series/bach.Series.window-dense-rank/)


            * [bach.Series.window_first_value](bach/api-reference/Series/bach.Series.window-first-value/)


            * [bach.Series.window_lag](bach/api-reference/Series/bach.Series.window-lag/)


            * [bach.Series.window_last_value](bach/api-reference/Series/bach.Series.window-last-value/)


            * [bach.Series.window_lead](bach/api-reference/Series/bach.Series.window-lead/)


            * [bach.Series.window_nth_value](bach/api-reference/Series/bach.Series.window-nth-value/)


            * [bach.Series.window_ntile](bach/api-reference/Series/bach.Series.window-ntile/)


            * [bach.Series.window_percent_rank](bach/api-reference/Series/bach.Series.window-percent-rank/)


            * [bach.Series.window_rank](bach/api-reference/Series/bach.Series.window-rank/)


            * [bach.Series.window_row_number](bach/api-reference/Series/bach.Series.window-row-number/)


            * [bach.Series.array](bach/api-reference/Series/bach.Series.array/)


            * [bach.Series.base_node](bach/api-reference/Series/bach.Series.base-node/)


            * [bach.Series.group_by](bach/api-reference/Series/bach.Series.group-by/)


            * [bach.Series.index](bach/api-reference/Series/bach.Series.index/)


            * [bach.Series.index_sorting](bach/api-reference/Series/bach.Series.index-sorting/)


            * [bach.Series.name](bach/api-reference/Series/bach.Series.name/)


            * [bach.Series.sorted_ascending](bach/api-reference/Series/bach.Series.sorted-ascending/)


            * [bach.Series.value](bach/api-reference/Series/bach.Series.value/)
