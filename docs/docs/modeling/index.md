---
date: '2022-04-26T12:27:56.237Z'
id: index
sidebar_position: 1
slug: /modeling//
title: Introduction
---

sidebar_position: 1
Introduction

Data collected with Objectiv’s Tracker and stored in an SQL database can be analyzed in a Jupyter notebook with the open model hub. The open model hub is a growing collection of open-source, free to use data models that you can take, combine and run for product analysis and exploration. It includes models for a wide range of typical product analytics use cases.

If you want to use the open model hub, install the package from Pypi as follows:

pip install objectiv-modelhub

See the example notebooks section to get started immediately. View the list of available models here or check out the full open model hub api reference. More information on setting up a development environment for the open model hub and how to configure Metabase is in the readme.

The open model hub is powered by Bach: Objectiv’s data modeling library. With Bach, you can compose models with familiar Pandas-like dataframe operations in your notebook. It uses a SQL abstraction layer that enables models to run on the full dataset, and you can output models to SQL with a single command. Head over to the Bach section to learn all about it.


* Model overview


* Mapping


    * modelhub.Map.is_first_session


    * modelhub.Map.is_new_user


    * modelhub.Map.is_conversion_event


    * modelhub.Map.conversions_counter


    * modelhub.Map.conversions_in_time


    * modelhub.Map.pre_conversion_hit_number


* Aggregation


    * modelhub.Aggregate.unique_users


    * modelhub.Aggregate.unique_sessions


    * modelhub.Aggregate.session_duration


    * modelhub.Aggregate.frequency


* Open model hub API reference


    * ModelHub


        * modelhub.ModelHub


            * modelhub.ModelHub.add_conversion_event


            * modelhub.ModelHub.get_objectiv_dataframe


            * modelhub.ModelHub.time_agg


            * modelhub.ModelHub.to_metabase


            * modelhub.ModelHub.agg


            * modelhub.ModelHub.aggregate


            * modelhub.ModelHub.conversion_events


            * modelhub.ModelHub.map


            * modelhub.ModelHub.time_aggregation


    * SeriesGlobalContexts


        * modelhub.SeriesGlobalContexts


            * modelhub.SeriesGlobalContexts.gc


            * modelhub.SeriesGlobalContexts.global_contexts


            * modelhub.SeriesGlobalContexts.obj


            * modelhub.SeriesGlobalContexts.objectiv


    * SeriesLocationStack


        * modelhub.SeriesLocationStack


            * modelhub.SeriesLocationStack.location_stack


            * modelhub.SeriesLocationStack.ls


            * modelhub.SeriesLocationStack.obj


            * modelhub.SeriesLocationStack.objectiv


* Bach


    * DataFrame


        * bach.DataFrame


            * bach.DataFrame.agg


            * bach.DataFrame.aggregate


            * bach.DataFrame.append


            * bach.DataFrame.astype


            * bach.DataFrame.bfill


            * bach.DataFrame.copy


            * bach.DataFrame.count


            * bach.DataFrame.create_variable


            * bach.DataFrame.cube


            * bach.DataFrame.describe


            * bach.DataFrame.drop


            * bach.DataFrame.drop_duplicates


            * bach.DataFrame.dropna


            * bach.DataFrame.expanding


            * bach.DataFrame.ffill


            * bach.DataFrame.fillna


            * bach.DataFrame.from_model


            * bach.DataFrame.from_pandas


            * bach.DataFrame.from_table


            * bach.DataFrame.get_all_variable_usage


            * bach.DataFrame.get_dummies


            * bach.DataFrame.get_sample


            * bach.DataFrame.get_unsampled


            * bach.DataFrame.groupby


            * bach.DataFrame.head


            * bach.DataFrame.materialize


            * bach.DataFrame.max


            * bach.DataFrame.mean


            * bach.DataFrame.median


            * bach.DataFrame.merge


            * bach.DataFrame.min


            * bach.DataFrame.minmax_scale


            * bach.DataFrame.mode


            * bach.DataFrame.nunique


            * bach.DataFrame.quantile


            * bach.DataFrame.rename


            * bach.DataFrame.reset_index


            * bach.DataFrame.rolling


            * bach.DataFrame.rollup


            * bach.DataFrame.round


            * bach.DataFrame.scale


            * bach.DataFrame.sem


            * bach.DataFrame.set_index


            * bach.DataFrame.set_savepoint


            * bach.DataFrame.set_variable


            * bach.DataFrame.sort_index


            * bach.DataFrame.sort_values


            * bach.DataFrame.stack


            * bach.DataFrame.std


            * bach.DataFrame.std_pop


            * bach.DataFrame.sum


            * bach.DataFrame.to_numpy


            * bach.DataFrame.to_pandas


            * bach.DataFrame.unstack


            * bach.DataFrame.value_counts


            * bach.DataFrame.var


            * bach.DataFrame.view_sql


            * bach.DataFrame.window


            * bach.DataFrame.all_series


            * bach.DataFrame.data


            * bach.DataFrame.data_columns


            * bach.DataFrame.dtypes


            * bach.DataFrame.group_by


            * bach.DataFrame.index


            * bach.DataFrame.index_columns


            * bach.DataFrame.index_dtypes


            * bach.DataFrame.is_materialized


            * bach.DataFrame.loc


            * bach.DataFrame.order_by


            * bach.DataFrame.plot


            * bach.DataFrame.savepoints


            * bach.DataFrame.variables


    * DataFrame reference by function


        * Creation


        * Value accessors


        * Attributes and underlying data


            * Axes


            * Types


            * Sql Model


            * Variables


        * Reshaping, indexing, sorting & merging


        * Aggregation & windowing


        * Computations & descriptive stats


            * All types


            * Numeric


            * Visualization


    * Series


        * bach.Series


            * bach.Series.agg


            * bach.Series.aggregate


            * bach.Series.all_values


            * bach.Series.any_value


            * bach.Series.append


            * bach.Series.apply_func


            * bach.Series.astype


            * bach.Series.copy


            * bach.Series.count


            * bach.Series.describe


            * bach.Series.drop_duplicates


            * bach.Series.dropna


            * bach.Series.exists


            * bach.Series.fillna


            * bach.Series.from_const


            * bach.Series.get_db_dtype


            * bach.Series.head


            * bach.Series.isin


            * bach.Series.isnull


            * bach.Series.max


            * bach.Series.median


            * bach.Series.min


            * bach.Series.mode


            * bach.Series.notnull


            * bach.Series.nunique


            * bach.Series.sort_index


            * bach.Series.sort_values


            * bach.Series.to_frame


            * bach.Series.to_numpy


            * bach.Series.to_pandas


            * bach.Series.unique


            * bach.Series.unstack


            * bach.Series.value_counts


            * bach.Series.view_sql


            * bach.Series.window_cume_dist


            * bach.Series.window_dense_rank


            * bach.Series.window_first_value


            * bach.Series.window_lag


            * bach.Series.window_last_value


            * bach.Series.window_lead


            * bach.Series.window_nth_value


            * bach.Series.window_ntile


            * bach.Series.window_percent_rank


            * bach.Series.window_rank


            * bach.Series.window_row_number


            * bach.Series.array


            * bach.Series.base_node


            * bach.Series.group_by


            * bach.Series.index


            * bach.Series.index_sorting


            * bach.Series.name


            * bach.Series.sorted_ascending


            * bach.Series.value


        * bach.SeriesBoolean


            * bach.SeriesBoolean.max


            * bach.SeriesBoolean.min


        * bach.SeriesAbstractNumeric


            * bach.SeriesAbstractNumeric.cut


            * bach.SeriesAbstractNumeric.mean


            * bach.SeriesAbstractNumeric.minmax_scale


            * bach.SeriesAbstractNumeric.qcut


            * bach.SeriesAbstractNumeric.quantile


            * bach.SeriesAbstractNumeric.round


            * bach.SeriesAbstractNumeric.scale


            * bach.SeriesAbstractNumeric.sem


            * bach.SeriesAbstractNumeric.std


            * bach.SeriesAbstractNumeric.sum


            * bach.SeriesAbstractNumeric.var


        * bach.SeriesAbstractDateTime


            * bach.SeriesAbstractDateTime.dt


        * bach.SeriesString


            * bach.SeriesString.get_dummies


            * bach.SeriesString.str


        * bach.SeriesJsonb


            * bach.SeriesJsonb.json


        * bach.SeriesJson


    * Bach Series reference by function


        * Creation / re-framing


        * Value accessors


        * Attributes and underlying data


            * Axes


            * Types


            * Sql Model


        * Comparison and set operations


        * Conversion, reshaping, sorting


        * Function application, aggregation & windowing


        * Computations & descriptive stats


            * All types


            * Numeric


            * Window
