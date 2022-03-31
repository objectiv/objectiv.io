
module.exports = [
    {
        "type": "doc",
        "label": "Introduction",
        "id": "modeling/intro"
    },
    {
        "type": "category",
        "label": "Example notebooks",
        "link": {
            "type": "doc",
            "id": "modeling/example_notebooks"
        },
        "items": [
            {
                "type": "category",
                "label": "Open model hub basics",
                "link": {
                    "type": "doc",
                    "id": "modeling/modelhub_basics"
                },
                "items": []
            },
            {
                "type": "category",
                "label": "Basic product analytics",
                "link": {
                    "type": "doc",
                    "id": "modeling/product_analytics"
                },
                "items": []
            },
            {
                "type": "category",
                "label": "Open taxonomy how-to",
                "link": {
                    "type": "doc",
                    "id": "modeling/open_taxonomy"
                },
                "items": []
            },
            {
                "type": "category",
                "label": "Feature engineering with Bach",
                "link": {
                    "type": "doc",
                    "id": "modeling/feature_engineering"
                },
                "items": []
            },
            {
                "type": "doc",
                "label": "Bach and sklearn",
                "id": "modeling/machine_learning"
            }
        ]
    },
    {
        "type": "category",
        "label": "Model overview",
        "link": {
            "type": "doc",
            "id": "modeling/models"
        },
        "items": [
            {
                "type": "category",
                "label": "Mapping",
                "link": {
                    "type": "doc",
                    "id": "modeling/models_mapping"
                },
                "items": [
                    {
                        "type": "doc",
                        "label": "is_first_session",
                        "id": "modeling/modelhub_api_reference/modelhub.Map.is_first_session"
                    },
                    {
                        "type": "doc",
                        "label": "is_new_user",
                        "id": "modeling/modelhub_api_reference/modelhub.Map.is_new_user"
                    },
                    {
                        "type": "doc",
                        "label": "is_conversion_event",
                        "id": "modeling/modelhub_api_reference/modelhub.Map.is_conversion_event"
                    },
                    {
                        "type": "doc",
                        "label": "conversions_counter",
                        "id": "modeling/modelhub_api_reference/modelhub.Map.conversions_counter"
                    },
                    {
                        "type": "doc",
                        "label": "conversions_in_time",
                        "id": "modeling/modelhub_api_reference/modelhub.Map.conversions_in_time"
                    },
                    {
                        "type": "doc",
                        "label": "pre_conversion_hit_number",
                        "id": "modeling/modelhub_api_reference/modelhub.Map.pre_conversion_hit_number"
                    }
                ]
            },
            {
                "type": "category",
                "label": "Aggregation",
                "link": {
                    "type": "doc",
                    "id": "modeling/models_aggregation"
                },
                "items": [
                    {
                        "type": "doc",
                        "label": "unique_users",
                        "id": "modeling/modelhub_api_reference/modelhub.Aggregate.unique_users"
                    },
                    {
                        "type": "doc",
                        "label": "unique_sessions",
                        "id": "modeling/modelhub_api_reference/modelhub.Aggregate.unique_sessions"
                    },
                    {
                        "type": "doc",
                        "label": "session_duration",
                        "id": "modeling/modelhub_api_reference/modelhub.Aggregate.session_duration"
                    },
                    {
                        "type": "doc",
                        "label": "frequency",
                        "id": "modeling/modelhub_api_reference/modelhub.Aggregate.frequency"
                    }
                ]
            }
        ]
    },
    {
        "type": "category",
        "label": "Open model hub API reference",
        "link": {
            "type": "doc",
            "id": "modeling/modelhub_api_reference"
        },
        "items": [
            {
                "type": "category",
                "label": "ModelHub",
                "link": {
                    "type": "doc",
                    "id": "modeling/modelhub_api_reference/modelhub.ModelHub"
                },
                "items": [
                    {
                        "type": "doc",
                        "label": "add_conversion_event",
                        "id": "modeling/modelhub_api_reference/modelhub.ModelHub.add_conversion_event"
                    },
                    {
                        "type": "doc",
                        "label": "get_objectiv_dataframe",
                        "id": "modeling/modelhub_api_reference/modelhub.ModelHub.get_objectiv_dataframe"
                    },
                    {
                        "type": "doc",
                        "label": "time_agg",
                        "id": "modeling/modelhub_api_reference/modelhub.ModelHub.time_agg"
                    },
                    {
                        "type": "doc",
                        "label": "to_metabase",
                        "id": "modeling/modelhub_api_reference/modelhub.ModelHub.to_metabase"
                    },
                    {
                        "type": "doc",
                        "label": "agg",
                        "id": "modeling/modelhub_api_reference/modelhub.ModelHub.agg"
                    },
                    {
                        "type": "doc",
                        "label": "aggregate",
                        "id": "modeling/modelhub_api_reference/modelhub.ModelHub.aggregate"
                    },
                    {
                        "type": "doc",
                        "label": "conversion_events",
                        "id": "modeling/modelhub_api_reference/modelhub.ModelHub.conversion_events"
                    },
                    {
                        "type": "doc",
                        "label": "map",
                        "id": "modeling/modelhub_api_reference/modelhub.ModelHub.map"
                    },
                    {
                        "type": "doc",
                        "label": "time_aggregation",
                        "id": "modeling/modelhub_api_reference/modelhub.ModelHub.time_aggregation"
                    }
                ]
            },
            {
                "type": "category",
                "label": "SeriesGlobalContexts",
                "link": {
                    "type": "doc",
                    "id": "modeling/modelhub_api_reference/modelhub.SeriesGlobalContexts"
                },
                "items": [
                    {
                        "type": "doc",
                        "label": "gc",
                        "id": "modeling/modelhub_api_reference/modelhub.SeriesGlobalContexts.gc"
                    },
                    {
                        "type": "doc",
                        "label": "global_contexts",
                        "id": "modeling/modelhub_api_reference/modelhub.SeriesGlobalContexts.global_contexts"
                    },
                    {
                        "type": "doc",
                        "label": "obj",
                        "id": "modeling/modelhub_api_reference/modelhub.SeriesGlobalContexts.obj"
                    },
                    {
                        "type": "doc",
                        "label": "objectiv",
                        "id": "modeling/modelhub_api_reference/modelhub.SeriesGlobalContexts.objectiv"
                    }
                ]
            },
            {
                "type": "category",
                "label": "SeriesLocationStack",
                "link": {
                    "type": "doc",
                    "id": "modeling/modelhub_api_reference/modelhub.SeriesLocationStack"
                },
                "items": [
                    {
                        "type": "doc",
                        "label": "location_stack",
                        "id": "modeling/modelhub_api_reference/modelhub.SeriesLocationStack.location_stack"
                    },
                    {
                        "type": "doc",
                        "label": "ls",
                        "id": "modeling/modelhub_api_reference/modelhub.SeriesLocationStack.ls"
                    },
                    {
                        "type": "doc",
                        "label": "obj",
                        "id": "modeling/modelhub_api_reference/modelhub.SeriesLocationStack.obj"
                    },
                    {
                        "type": "doc",
                        "label": "objectiv",
                        "id": "modeling/modelhub_api_reference/modelhub.SeriesLocationStack.objectiv"
                    }
                ]
            }
        ]
    },
    {
        "type": "category",
        "label": "Bach",
        "link": {
            "type": "doc",
            "id": "modeling/bach"
        },
        "items": [
            {
                "type": "category",
                "label": "What is Bach?",
                "link": {
                    "type": "doc",
                    "id": "modeling/bach_whatisbach"
                },
                "items": []
            },
            {
                "type": "category",
                "label": "Core Concepts",
                "link": {
                    "type": "doc",
                    "id": "modeling/bach_core_concepts"
                },
                "items": []
            },
            {
                "type": "category",
                "label": "Bach basics",
                "link": {
                    "type": "doc",
                    "id": "modeling/bach_examples"
                },
                "items": []
            },
            {
                "type": "category",
                "label": "API Reference",
                "link": {
                    "type": "doc",
                    "id": "modeling/bach_reference"
                },
                "items": [
                    {
                        "type": "category",
                        "label": "DataFrame",
                        "link": {
                            "type": "doc",
                            "id": "modeling/DataFrame"
                        },
                        "items": [
                            {
                                "type": "category",
                                "label": "Reference",
                                "link": {
                                    "type": "doc",
                                    "id": "modeling/bach_reference_dataframe"
                                },
                                "items": [
                                    {
                                        "type": "category",
                                        "label": "DataFrame",
                                        "link": {
                                            "type": "doc",
                                            "id": "modeling/DataFrame/bach.DataFrame"
                                        },
                                        "items": [
                                            {
                                                "type": "doc",
                                                "label": "agg",
                                                "id": "modeling/DataFrame/bach.DataFrame.agg"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "aggregate",
                                                "id": "modeling/DataFrame/bach.DataFrame.aggregate"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "append",
                                                "id": "modeling/DataFrame/bach.DataFrame.append"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "astype",
                                                "id": "modeling/DataFrame/bach.DataFrame.astype"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "bfill",
                                                "id": "modeling/DataFrame/bach.DataFrame.bfill"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "copy",
                                                "id": "modeling/DataFrame/bach.DataFrame.copy"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "count",
                                                "id": "modeling/DataFrame/bach.DataFrame.count"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "create_variable",
                                                "id": "modeling/DataFrame/bach.DataFrame.create_variable"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "cube",
                                                "id": "modeling/DataFrame/bach.DataFrame.cube"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "describe",
                                                "id": "modeling/DataFrame/bach.DataFrame.describe"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "drop",
                                                "id": "modeling/DataFrame/bach.DataFrame.drop"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "drop_duplicates",
                                                "id": "modeling/DataFrame/bach.DataFrame.drop_duplicates"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "dropna",
                                                "id": "modeling/DataFrame/bach.DataFrame.dropna"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "expanding",
                                                "id": "modeling/DataFrame/bach.DataFrame.expanding"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "ffill",
                                                "id": "modeling/DataFrame/bach.DataFrame.ffill"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "fillna",
                                                "id": "modeling/DataFrame/bach.DataFrame.fillna"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "from_model",
                                                "id": "modeling/DataFrame/bach.DataFrame.from_model"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "from_pandas",
                                                "id": "modeling/DataFrame/bach.DataFrame.from_pandas"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "from_table",
                                                "id": "modeling/DataFrame/bach.DataFrame.from_table"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "get_all_variable_usage",
                                                "id": "modeling/DataFrame/bach.DataFrame.get_all_variable_usage"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "get_sample",
                                                "id": "modeling/DataFrame/bach.DataFrame.get_sample"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "get_unsampled",
                                                "id": "modeling/DataFrame/bach.DataFrame.get_unsampled"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "groupby",
                                                "id": "modeling/DataFrame/bach.DataFrame.groupby"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "head",
                                                "id": "modeling/DataFrame/bach.DataFrame.head"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "materialize",
                                                "id": "modeling/DataFrame/bach.DataFrame.materialize"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "max",
                                                "id": "modeling/DataFrame/bach.DataFrame.max"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "mean",
                                                "id": "modeling/DataFrame/bach.DataFrame.mean"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "median",
                                                "id": "modeling/DataFrame/bach.DataFrame.median"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "merge",
                                                "id": "modeling/DataFrame/bach.DataFrame.merge"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "min",
                                                "id": "modeling/DataFrame/bach.DataFrame.min"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "mode",
                                                "id": "modeling/DataFrame/bach.DataFrame.mode"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "nunique",
                                                "id": "modeling/DataFrame/bach.DataFrame.nunique"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "quantile",
                                                "id": "modeling/DataFrame/bach.DataFrame.quantile"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "rename",
                                                "id": "modeling/DataFrame/bach.DataFrame.rename"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "reset_index",
                                                "id": "modeling/DataFrame/bach.DataFrame.reset_index"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "rolling",
                                                "id": "modeling/DataFrame/bach.DataFrame.rolling"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "rollup",
                                                "id": "modeling/DataFrame/bach.DataFrame.rollup"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "round",
                                                "id": "modeling/DataFrame/bach.DataFrame.round"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "sem",
                                                "id": "modeling/DataFrame/bach.DataFrame.sem"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "set_index",
                                                "id": "modeling/DataFrame/bach.DataFrame.set_index"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "set_savepoint",
                                                "id": "modeling/DataFrame/bach.DataFrame.set_savepoint"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "set_variable",
                                                "id": "modeling/DataFrame/bach.DataFrame.set_variable"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "sort_index",
                                                "id": "modeling/DataFrame/bach.DataFrame.sort_index"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "sort_values",
                                                "id": "modeling/DataFrame/bach.DataFrame.sort_values"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "stack",
                                                "id": "modeling/DataFrame/bach.DataFrame.stack"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "std",
                                                "id": "modeling/DataFrame/bach.DataFrame.std"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "sum",
                                                "id": "modeling/DataFrame/bach.DataFrame.sum"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "to_numpy",
                                                "id": "modeling/DataFrame/bach.DataFrame.to_numpy"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "to_pandas",
                                                "id": "modeling/DataFrame/bach.DataFrame.to_pandas"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "value_counts",
                                                "id": "modeling/DataFrame/bach.DataFrame.value_counts"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "var",
                                                "id": "modeling/DataFrame/bach.DataFrame.var"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "view_sql",
                                                "id": "modeling/DataFrame/bach.DataFrame.view_sql"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "window",
                                                "id": "modeling/DataFrame/bach.DataFrame.window"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "all_series",
                                                "id": "modeling/DataFrame/bach.DataFrame.all_series"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "data",
                                                "id": "modeling/DataFrame/bach.DataFrame.data"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "data_columns",
                                                "id": "modeling/DataFrame/bach.DataFrame.data_columns"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "dtypes",
                                                "id": "modeling/DataFrame/bach.DataFrame.dtypes"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "group_by",
                                                "id": "modeling/DataFrame/bach.DataFrame.group_by"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "index",
                                                "id": "modeling/DataFrame/bach.DataFrame.index"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "index_columns",
                                                "id": "modeling/DataFrame/bach.DataFrame.index_columns"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "index_dtypes",
                                                "id": "modeling/DataFrame/bach.DataFrame.index_dtypes"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "is_materialized",
                                                "id": "modeling/DataFrame/bach.DataFrame.is_materialized"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "loc",
                                                "id": "modeling/DataFrame/bach.DataFrame.loc"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "order_by",
                                                "id": "modeling/DataFrame/bach.DataFrame.order_by"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "savepoints",
                                                "id": "modeling/DataFrame/bach.DataFrame.savepoints"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "values",
                                                "id": "modeling/DataFrame/bach.DataFrame.values"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "variables",
                                                "id": "modeling/DataFrame/bach.DataFrame.variables"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "category",
                                "label": "Reference by function",
                                "link": {
                                    "type": "doc",
                                    "id": "modeling/bach_reference_dataframe_by_function"
                                },
                                "items": [
                                    {
                                        "type": "category",
                                        "label": "Creation",
                                        "items": [
                                            {
                                                "type": "doc",
                                                "label": "from_table",
                                                "id": "modeling/DataFrame/bach.DataFrame.from_table"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "from_model",
                                                "id": "modeling/DataFrame/bach.DataFrame.from_model"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "from_pandas",
                                                "id": "modeling/DataFrame/bach.DataFrame.from_pandas"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "copy",
                                                "id": "modeling/DataFrame/bach.DataFrame.copy"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "category",
                                        "label": "Value accessors",
                                        "items": [
                                            {
                                                "type": "doc",
                                                "label": "head",
                                                "id": "modeling/DataFrame/bach.DataFrame.head"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "to_pandas",
                                                "id": "modeling/DataFrame/bach.DataFrame.to_pandas"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "values",
                                                "id": "modeling/DataFrame/bach.DataFrame.values"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "loc",
                                                "id": "modeling/DataFrame/bach.DataFrame.loc"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "category",
                                        "label": "Attributes and underlying data",
                                        "items": [
                                            {
                                                "type": "category",
                                                "label": "Axes",
                                                "items": [
                                                    {
                                                        "type": "doc",
                                                        "label": "index",
                                                        "id": "modeling/DataFrame/bach.DataFrame.index"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "data",
                                                        "id": "modeling/DataFrame/bach.DataFrame.data"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "all_series",
                                                        "id": "modeling/DataFrame/bach.DataFrame.all_series"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "index_columns",
                                                        "id": "modeling/DataFrame/bach.DataFrame.index_columns"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "data_columns",
                                                        "id": "modeling/DataFrame/bach.DataFrame.data_columns"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "group_by",
                                                        "id": "modeling/DataFrame/bach.DataFrame.group_by"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "order_by",
                                                        "id": "modeling/DataFrame/bach.DataFrame.order_by"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "category",
                                                "label": "Types",
                                                "items": [
                                                    {
                                                        "type": "doc",
                                                        "label": "dtypes",
                                                        "id": "modeling/DataFrame/bach.DataFrame.dtypes"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "index_dtypes",
                                                        "id": "modeling/DataFrame/bach.DataFrame.index_dtypes"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "astype",
                                                        "id": "modeling/DataFrame/bach.DataFrame.astype"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "category",
                                                "label": "Sql Model",
                                                "items": [
                                                    {
                                                        "type": "doc",
                                                        "label": "materialize",
                                                        "id": "modeling/DataFrame/bach.DataFrame.materialize"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "get_sample",
                                                        "id": "modeling/DataFrame/bach.DataFrame.get_sample"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "get_unsampled",
                                                        "id": "modeling/DataFrame/bach.DataFrame.get_unsampled"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "view_sql",
                                                        "id": "modeling/DataFrame/bach.DataFrame.view_sql"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "category",
                                                "label": "Variables",
                                                "items": [
                                                    {
                                                        "type": "doc",
                                                        "label": "create_variable",
                                                        "id": "modeling/DataFrame/bach.DataFrame.create_variable"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "set_variable",
                                                        "id": "modeling/DataFrame/bach.DataFrame.set_variable"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "get_all_variable_usage",
                                                        "id": "modeling/DataFrame/bach.DataFrame.get_all_variable_usage"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "category",
                                        "label": "Reshaping, indexing, sorting & merging",
                                        "items": [
                                            {
                                                "type": "doc",
                                                "label": "sort_index",
                                                "id": "modeling/DataFrame/bach.DataFrame.sort_index"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "sort_values",
                                                "id": "modeling/DataFrame/bach.DataFrame.sort_values"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "rename",
                                                "id": "modeling/DataFrame/bach.DataFrame.rename"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "drop",
                                                "id": "modeling/DataFrame/bach.DataFrame.drop"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "drop_duplicates",
                                                "id": "modeling/DataFrame/bach.DataFrame.drop_duplicates"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "dropna",
                                                "id": "modeling/DataFrame/bach.DataFrame.dropna"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "reset_index",
                                                "id": "modeling/DataFrame/bach.DataFrame.reset_index"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "set_index",
                                                "id": "modeling/DataFrame/bach.DataFrame.set_index"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "merge",
                                                "id": "modeling/DataFrame/bach.DataFrame.merge"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "append",
                                                "id": "modeling/DataFrame/bach.DataFrame.append"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "fillna",
                                                "id": "modeling/DataFrame/bach.DataFrame.fillna"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "ffill",
                                                "id": "modeling/DataFrame/bach.DataFrame.ffill"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "bfill",
                                                "id": "modeling/DataFrame/bach.DataFrame.bfill"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "stack",
                                                "id": "modeling/DataFrame/bach.DataFrame.stack"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "category",
                                        "label": "Aggregation & windowing",
                                        "items": [
                                            {
                                                "type": "doc",
                                                "label": "agg",
                                                "id": "modeling/DataFrame/bach.DataFrame.agg"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "aggregate",
                                                "id": "modeling/DataFrame/bach.DataFrame.aggregate"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "groupby",
                                                "id": "modeling/DataFrame/bach.DataFrame.groupby"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "rollup",
                                                "id": "modeling/DataFrame/bach.DataFrame.rollup"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "cube",
                                                "id": "modeling/DataFrame/bach.DataFrame.cube"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "window",
                                                "id": "modeling/DataFrame/bach.DataFrame.window"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "rolling",
                                                "id": "modeling/DataFrame/bach.DataFrame.rolling"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "expanding",
                                                "id": "modeling/DataFrame/bach.DataFrame.expanding"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "category",
                                        "label": "Computations & descriptive stats",
                                        "items": [
                                            {
                                                "type": "category",
                                                "label": "All types",
                                                "items": [
                                                    {
                                                        "type": "doc",
                                                        "label": "describe",
                                                        "id": "modeling/DataFrame/bach.DataFrame.describe"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "count",
                                                        "id": "modeling/DataFrame/bach.DataFrame.count"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "min",
                                                        "id": "modeling/DataFrame/bach.DataFrame.min"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "max",
                                                        "id": "modeling/DataFrame/bach.DataFrame.max"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "median",
                                                        "id": "modeling/DataFrame/bach.DataFrame.median"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "mode",
                                                        "id": "modeling/DataFrame/bach.DataFrame.mode"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "nunique",
                                                        "id": "modeling/DataFrame/bach.DataFrame.nunique"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "value_counts",
                                                        "id": "modeling/DataFrame/bach.DataFrame.value_counts"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "category",
                                                "label": "Numeric",
                                                "items": [
                                                    {
                                                        "type": "doc",
                                                        "label": "mean",
                                                        "id": "modeling/DataFrame/bach.DataFrame.mean"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "quantile",
                                                        "id": "modeling/DataFrame/bach.DataFrame.quantile"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "sem",
                                                        "id": "modeling/DataFrame/bach.DataFrame.sem"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "sum",
                                                        "id": "modeling/DataFrame/bach.DataFrame.sum"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "std",
                                                        "id": "modeling/DataFrame/bach.DataFrame.std"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "var",
                                                        "id": "modeling/DataFrame/bach.DataFrame.var"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "category",
                        "label": "Series",
                        "link": {
                            "type": "doc",
                            "id": "modeling/Series"
                        },
                        "items": [
                            {
                                "type": "category",
                                "label": "Reference",
                                "link": {
                                    "type": "doc",
                                    "id": "modeling/bach_reference_series"
                                },
                                "items": [
                                    {
                                        "type": "category",
                                        "label": "Series",
                                        "link": {
                                            "type": "doc",
                                            "id": "modeling/Series/bach.Series"
                                        },
                                        "items": [
                                            {
                                                "type": "doc",
                                                "label": "agg",
                                                "id": "modeling/Series/bach.Series.agg"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "aggregate",
                                                "id": "modeling/Series/bach.Series.aggregate"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "all_values",
                                                "id": "modeling/Series/bach.Series.all_values"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "any_value",
                                                "id": "modeling/Series/bach.Series.any_value"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "append",
                                                "id": "modeling/Series/bach.Series.append"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "apply_func",
                                                "id": "modeling/Series/bach.Series.apply_func"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "astype",
                                                "id": "modeling/Series/bach.Series.astype"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "copy",
                                                "id": "modeling/Series/bach.Series.copy"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "count",
                                                "id": "modeling/Series/bach.Series.count"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "describe",
                                                "id": "modeling/Series/bach.Series.describe"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "drop_duplicates",
                                                "id": "modeling/Series/bach.Series.drop_duplicates"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "dropna",
                                                "id": "modeling/Series/bach.Series.dropna"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "exists",
                                                "id": "modeling/Series/bach.Series.exists"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "fillna",
                                                "id": "modeling/Series/bach.Series.fillna"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "from_const",
                                                "id": "modeling/Series/bach.Series.from_const"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "head",
                                                "id": "modeling/Series/bach.Series.head"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "isin",
                                                "id": "modeling/Series/bach.Series.isin"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "isnull",
                                                "id": "modeling/Series/bach.Series.isnull"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "max",
                                                "id": "modeling/Series/bach.Series.max"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "median",
                                                "id": "modeling/Series/bach.Series.median"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "min",
                                                "id": "modeling/Series/bach.Series.min"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "mode",
                                                "id": "modeling/Series/bach.Series.mode"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "notnull",
                                                "id": "modeling/Series/bach.Series.notnull"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "nunique",
                                                "id": "modeling/Series/bach.Series.nunique"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "sort_index",
                                                "id": "modeling/Series/bach.Series.sort_index"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "sort_values",
                                                "id": "modeling/Series/bach.Series.sort_values"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "to_frame",
                                                "id": "modeling/Series/bach.Series.to_frame"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "to_numpy",
                                                "id": "modeling/Series/bach.Series.to_numpy"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "to_pandas",
                                                "id": "modeling/Series/bach.Series.to_pandas"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "unique",
                                                "id": "modeling/Series/bach.Series.unique"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "unstack",
                                                "id": "modeling/Series/bach.Series.unstack"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "value_counts",
                                                "id": "modeling/Series/bach.Series.value_counts"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "view_sql",
                                                "id": "modeling/Series/bach.Series.view_sql"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "window_cume_dist",
                                                "id": "modeling/Series/bach.Series.window_cume_dist"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "window_dense_rank",
                                                "id": "modeling/Series/bach.Series.window_dense_rank"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "window_first_value",
                                                "id": "modeling/Series/bach.Series.window_first_value"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "window_lag",
                                                "id": "modeling/Series/bach.Series.window_lag"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "window_last_value",
                                                "id": "modeling/Series/bach.Series.window_last_value"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "window_lead",
                                                "id": "modeling/Series/bach.Series.window_lead"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "window_nth_value",
                                                "id": "modeling/Series/bach.Series.window_nth_value"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "window_ntile",
                                                "id": "modeling/Series/bach.Series.window_ntile"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "window_percent_rank",
                                                "id": "modeling/Series/bach.Series.window_percent_rank"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "window_rank",
                                                "id": "modeling/Series/bach.Series.window_rank"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "window_row_number",
                                                "id": "modeling/Series/bach.Series.window_row_number"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "array",
                                                "id": "modeling/Series/bach.Series.array"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "base_node",
                                                "id": "modeling/Series/bach.Series.base_node"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "group_by",
                                                "id": "modeling/Series/bach.Series.group_by"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "index",
                                                "id": "modeling/Series/bach.Series.index"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "index_sorting",
                                                "id": "modeling/Series/bach.Series.index_sorting"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "name",
                                                "id": "modeling/Series/bach.Series.name"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "sorted_ascending",
                                                "id": "modeling/Series/bach.Series.sorted_ascending"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "value",
                                                "id": "modeling/Series/bach.Series.value"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "values",
                                                "id": "modeling/Series/bach.Series.values"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "category",
                                        "label": "SeriesBoolean",
                                        "link": {
                                            "type": "doc",
                                            "id": "modeling/Series/bach.SeriesBoolean"
                                        },
                                        "items": [
                                            {
                                                "type": "doc",
                                                "label": "max",
                                                "id": "modeling/Series/bach.SeriesBoolean.max"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "min",
                                                "id": "modeling/Series/bach.SeriesBoolean.min"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "category",
                                        "label": "SeriesAbstractNumeric",
                                        "link": {
                                            "type": "doc",
                                            "id": "modeling/Series/bach.SeriesAbstractNumeric"
                                        },
                                        "items": [
                                            {
                                                "type": "doc",
                                                "label": "cut",
                                                "id": "modeling/Series/bach.SeriesAbstractNumeric.cut"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "mean",
                                                "id": "modeling/Series/bach.SeriesAbstractNumeric.mean"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "qcut",
                                                "id": "modeling/Series/bach.SeriesAbstractNumeric.qcut"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "quantile",
                                                "id": "modeling/Series/bach.SeriesAbstractNumeric.quantile"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "round",
                                                "id": "modeling/Series/bach.SeriesAbstractNumeric.round"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "sem",
                                                "id": "modeling/Series/bach.SeriesAbstractNumeric.sem"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "std",
                                                "id": "modeling/Series/bach.SeriesAbstractNumeric.std"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "sum",
                                                "id": "modeling/Series/bach.SeriesAbstractNumeric.sum"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "var",
                                                "id": "modeling/Series/bach.SeriesAbstractNumeric.var"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "category",
                                        "label": "SeriesAbstractDateTime",
                                        "link": {
                                            "type": "doc",
                                            "id": "modeling/Series/bach.SeriesAbstractDateTime"
                                        },
                                        "items": [
                                            {
                                                "type": "doc",
                                                "label": "dt",
                                                "id": "modeling/Series/bach.SeriesAbstractDateTime.dt"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "category",
                                        "label": "SeriesString",
                                        "link": {
                                            "type": "doc",
                                            "id": "modeling/Series/bach.SeriesString"
                                        },
                                        "items": [
                                            {
                                                "type": "doc",
                                                "label": "str",
                                                "id": "modeling/Series/bach.SeriesString.str"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "category",
                                        "label": "SeriesJsonb",
                                        "link": {
                                            "type": "doc",
                                            "id": "modeling/Series/bach.SeriesJsonb"
                                        },
                                        "items": [
                                            {
                                                "type": "doc",
                                                "label": "json",
                                                "id": "modeling/Series/bach.SeriesJsonb.json"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "doc",
                                        "label": "SeriesJson",
                                        "id": "modeling/Series/bach.SeriesJson"
                                    }
                                ]
                            },
                            {
                                "type": "category",
                                "label": "Reference by function",
                                "link": {
                                    "type": "doc",
                                    "id": "modeling/bach_reference_series_by_function"
                                },
                                "items": [
                                    {
                                        "type": "category",
                                        "label": "Creation / re-framing",
                                        "items": [
                                            {
                                                "type": "doc",
                                                "label": "from_const",
                                                "id": "modeling/Series/bach.Series.from_const"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "to_frame",
                                                "id": "modeling/Series/bach.Series.to_frame"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "copy",
                                                "id": "modeling/Series/bach.Series.copy"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "category",
                                        "label": "Value accessors",
                                        "items": [
                                            {
                                                "type": "doc",
                                                "label": "head",
                                                "id": "modeling/Series/bach.Series.head"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "to_pandas",
                                                "id": "modeling/Series/bach.Series.to_pandas"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "array",
                                                "id": "modeling/Series/bach.Series.array"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "values",
                                                "id": "modeling/Series/bach.Series.values"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "value",
                                                "id": "modeling/Series/bach.Series.value"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "category",
                                        "label": "Attributes and underlying data",
                                        "items": [
                                            {
                                                "type": "category",
                                                "label": "Axes",
                                                "items": [
                                                    {
                                                        "type": "doc",
                                                        "label": "name",
                                                        "id": "modeling/Series/bach.Series.name"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "index",
                                                        "id": "modeling/Series/bach.Series.index"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "group_by",
                                                        "id": "modeling/Series/bach.Series.group_by"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "sorted_ascending",
                                                        "id": "modeling/Series/bach.Series.sorted_ascending"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "category",
                                                "label": "Types",
                                                "items": [
                                                    {
                                                        "type": "doc",
                                                        "label": "dtype",
                                                        "id": "modeling/Series/bach.Series.dtype"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "astype",
                                                        "id": "modeling/Series/bach.Series.astype"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "category",
                                                "label": "Sql Model",
                                                "items": [
                                                    {
                                                        "type": "doc",
                                                        "label": "base_node",
                                                        "id": "modeling/Series/bach.Series.base_node"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "view_sql",
                                                        "id": "modeling/Series/bach.Series.view_sql"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "category",
                                        "label": "Comparison and set operations",
                                        "items": [
                                            {
                                                "type": "doc",
                                                "label": "all_values",
                                                "id": "modeling/Series/bach.Series.all_values"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "any_value",
                                                "id": "modeling/Series/bach.Series.any_value"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "exists",
                                                "id": "modeling/Series/bach.Series.exists"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "isin",
                                                "id": "modeling/Series/bach.Series.isin"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "isnull",
                                                "id": "modeling/Series/bach.Series.isnull"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "notnull",
                                                "id": "modeling/Series/bach.Series.notnull"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "category",
                                        "label": "Conversion, reshaping, sorting",
                                        "items": [
                                            {
                                                "type": "doc",
                                                "label": "sort_index",
                                                "id": "modeling/Series/bach.Series.sort_index"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "sort_values",
                                                "id": "modeling/Series/bach.Series.sort_values"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "fillna",
                                                "id": "modeling/Series/bach.Series.fillna"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "append",
                                                "id": "modeling/Series/bach.Series.append"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "drop_duplicates",
                                                "id": "modeling/Series/bach.Series.drop_duplicates"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "dropna",
                                                "id": "modeling/Series/bach.Series.dropna"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "unstack",
                                                "id": "modeling/Series/bach.Series.unstack"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "category",
                                        "label": "Function application, aggregation & windowing",
                                        "items": [
                                            {
                                                "type": "doc",
                                                "label": "agg",
                                                "id": "modeling/Series/bach.Series.agg"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "aggregate",
                                                "id": "modeling/Series/bach.Series.aggregate"
                                            },
                                            {
                                                "type": "doc",
                                                "label": "apply_func",
                                                "id": "modeling/Series/bach.Series.apply_func"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "category",
                                        "label": "Computations & descriptive stats",
                                        "items": [
                                            {
                                                "type": "category",
                                                "label": "All types",
                                                "items": [
                                                    {
                                                        "type": "doc",
                                                        "label": "describe",
                                                        "id": "modeling/Series/bach.Series.describe"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "count",
                                                        "id": "modeling/Series/bach.Series.count"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "min",
                                                        "id": "modeling/Series/bach.Series.min"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "max",
                                                        "id": "modeling/Series/bach.Series.max"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "median",
                                                        "id": "modeling/Series/bach.Series.median"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "mode",
                                                        "id": "modeling/Series/bach.Series.mode"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "nunique",
                                                        "id": "modeling/Series/bach.Series.nunique"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "value_counts",
                                                        "id": "modeling/Series/bach.Series.value_counts"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "category",
                                                "label": "Numeric",
                                                "items": [
                                                    {
                                                        "type": "doc",
                                                        "label": "cut",
                                                        "id": "modeling/Series/bach.SeriesAbstractNumeric.cut"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "qcut",
                                                        "id": "modeling/Series/bach.SeriesAbstractNumeric.qcut"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "mean",
                                                        "id": "modeling/Series/bach.SeriesAbstractNumeric.mean"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "quantile",
                                                        "id": "modeling/Series/bach.SeriesAbstractNumeric.quantile"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "sem",
                                                        "id": "modeling/Series/bach.SeriesAbstractNumeric.sem"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "sum",
                                                        "id": "modeling/Series/bach.SeriesAbstractNumeric.sum"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "std",
                                                        "id": "modeling/Series/bach.SeriesAbstractNumeric.std"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "var",
                                                        "id": "modeling/Series/bach.SeriesAbstractNumeric.var"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "category",
                                                "label": "Window",
                                                "items": [
                                                    {
                                                        "type": "doc",
                                                        "label": "window_first_value",
                                                        "id": "modeling/Series/bach.Series.window_first_value"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "window_lag",
                                                        "id": "modeling/Series/bach.Series.window_lag"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "window_nth_value",
                                                        "id": "modeling/Series/bach.Series.window_nth_value"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "window_lead",
                                                        "id": "modeling/Series/bach.Series.window_lead"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "window_last_value",
                                                        "id": "modeling/Series/bach.Series.window_last_value"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "window_row_number",
                                                        "id": "modeling/Series/bach.Series.window_row_number"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "window_rank",
                                                        "id": "modeling/Series/bach.Series.window_rank"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "window_dense_rank",
                                                        "id": "modeling/Series/bach.Series.window_dense_rank"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "window_percent_rank",
                                                        "id": "modeling/Series/bach.Series.window_percent_rank"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "window_ntile",
                                                        "id": "modeling/Series/bach.Series.window_ntile"
                                                    },
                                                    {
                                                        "type": "doc",
                                                        "label": "window_cume_dist",
                                                        "id": "modeling/Series/bach.Series.window_cume_dist"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
