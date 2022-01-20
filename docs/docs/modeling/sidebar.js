
module.exports = [
    {
        "type": "doc",
        "label": "Introduction",
        "id": "modeling/intro"
    },
    {
        "type": "doc",
        "label": "Core Concepts",
        "id": "modeling/core_concepts"
    },
    {
        "type": "doc",
        "label": "Examples",
        "id": "modeling/examples"
    },
    {
        "type": "category",
        "label": "API Reference",
        "items": [
            {
                "type": "doc",
                "label": "Overview",
                "id": "modeling/reference"
            },
            {
                "type": "category",
                "label": "DataFrame",
                "items": [
                    {
                        "type": "doc",
                        "label": "Overview",
                        "id": "modeling/DataFrame"
                    },
                    {
                        "type": "category",
                        "label": "Usage",
                        "items": [
                            {
                                "type": "link",
                                "label": "Overview",
                                "href": "/modeling/DataFrame#usage"
                            },
                            {
                                "type": "link",
                                "label": "Getting & Setting columns",
                                "href": "/modeling/DataFrame#getting-setting-columns"
                            },
                            {
                                "type": "link",
                                "label": "Moving Series around",
                                "href": "/modeling/DataFrame#moving-series-around"
                            },
                            {
                                "type": "link",
                                "label": "Examples",
                                "href": "/modeling/DataFrame#examples"
                            },
                            {
                                "type": "link",
                                "label": "Database access",
                                "href": "/modeling/DataFrame#database-access"
                            }
                        ]
                    },
                    {
                        "type": "category",
                        "label": "Reference",
                        "items": [
                            {
                                "type": "link",
                                "label": "Overview",
                                "href": "/modeling/DataFrame#reference"
                            },
                            {
                                "type": "category",
                                "label": "DataFrame",
                                "items": [
                                    {
                                        "type": "doc",
                                        "label": "Overview",
                                        "id": "modeling/DataFrame/bach.DataFrame"
                                    },
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
                                        "label": "astype",
                                        "id": "modeling/DataFrame/bach.DataFrame.astype"
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
                                        "label": "drop",
                                        "id": "modeling/DataFrame/bach.DataFrame.drop"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "expanding",
                                        "id": "modeling/DataFrame/bach.DataFrame.expanding"
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
                                        "label": "sort_values",
                                        "id": "modeling/DataFrame/bach.DataFrame.sort_values"
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
                                        "label": "to_pandas",
                                        "id": "modeling/DataFrame/bach.DataFrame.to_pandas"
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
                        "items": [
                            {
                                "type": "link",
                                "label": "Overview",
                                "href": "/modeling/DataFrame#reference-by-function"
                            },
                            {
                                "type": "category",
                                "label": "Creation",
                                "items": [
                                    {
                                        "type": "link",
                                        "label": "Overview",
                                        "href": "/modeling/DataFrame#creation"
                                    },
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
                                        "type": "link",
                                        "label": "Overview",
                                        "href": "/modeling/DataFrame#value-accessors"
                                    },
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
                                    }
                                ]
                            },
                            {
                                "type": "category",
                                "label": "Attributes and underlying data",
                                "items": [
                                    {
                                        "type": "link",
                                        "label": "Overview",
                                        "href": "/modeling/DataFrame#attributes-and-underlying-data"
                                    },
                                    {
                                        "type": "link",
                                        "label": "Axes",
                                        "href": "/modeling/DataFrame#axes"
                                    },
                                    {
                                        "type": "link",
                                        "label": "Types",
                                        "href": "/modeling/DataFrame#types"
                                    },
                                    {
                                        "type": "link",
                                        "label": "Sql Model",
                                        "href": "/modeling/DataFrame#sql-model"
                                    }
                                ]
                            },
                            {
                                "type": "category",
                                "label": "Reshaping, indexing, sorting & merging",
                                "items": [
                                    {
                                        "type": "link",
                                        "label": "Overview",
                                        "href": "/modeling/DataFrame#reshaping-indexing-sorting-merging"
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
                                    }
                                ]
                            },
                            {
                                "type": "category",
                                "label": "Aggregation & windowing",
                                "items": [
                                    {
                                        "type": "link",
                                        "label": "Overview",
                                        "href": "/modeling/DataFrame#aggregation-windowing"
                                    },
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
                                        "type": "link",
                                        "label": "Overview",
                                        "href": "/modeling/DataFrame#computations-descriptive-stats"
                                    },
                                    {
                                        "type": "link",
                                        "label": "All types",
                                        "href": "/modeling/DataFrame#all-types"
                                    },
                                    {
                                        "type": "link",
                                        "label": "Numeric",
                                        "href": "/modeling/DataFrame#numeric"
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
                "items": [
                    {
                        "type": "doc",
                        "label": "Overview",
                        "id": "modeling/Series"
                    },
                    {
                        "type": "category",
                        "label": "Usage",
                        "items": [
                            {
                                "type": "link",
                                "label": "Overview",
                                "href": "/modeling/Series#usage"
                            },
                            {
                                "type": "link",
                                "label": "Slicing and index access",
                                "href": "/modeling/Series#slicing-and-index-access"
                            },
                            {
                                "type": "link",
                                "label": "Database access",
                                "href": "/modeling/Series#database-access"
                            },
                            {
                                "type": "link",
                                "label": "Boolean Operations",
                                "href": "/modeling/Series#boolean-operations"
                            },
                            {
                                "type": "link",
                                "label": "Aggregations",
                                "href": "/modeling/Series#aggregations"
                            },
                            {
                                "type": "link",
                                "label": "Window Functions",
                                "href": "/modeling/Series#window-functions"
                            },
                            {
                                "type": "link",
                                "label": "Types",
                                "href": "/modeling/Series#types"
                            }
                        ]
                    },
                    {
                        "type": "category",
                        "label": "Reference",
                        "items": [
                            {
                                "type": "link",
                                "label": "Overview",
                                "href": "/modeling/Series#reference"
                            },
                            {
                                "type": "category",
                                "label": "Series",
                                "items": [
                                    {
                                        "type": "doc",
                                        "label": "Overview",
                                        "id": "modeling/Series/bach.Series"
                                    },
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
                                        "label": "dtype",
                                        "id": "modeling/Series/bach.Series.dtype"
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
                                "type": "doc",
                                "label": "SeriesBoolean",
                                "id": "modeling/Series/bach.SeriesBoolean"
                            },
                            {
                                "type": "category",
                                "label": "SeriesAbstractNumeric",
                                "items": [
                                    {
                                        "type": "doc",
                                        "label": "Overview",
                                        "id": "modeling/Series/bach.SeriesAbstractNumeric"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "kurt",
                                        "id": "modeling/Series/bach.SeriesAbstractNumeric.kurt"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "kurtosis",
                                        "id": "modeling/Series/bach.SeriesAbstractNumeric.kurtosis"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "mad",
                                        "id": "modeling/Series/bach.SeriesAbstractNumeric.mad"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "mean",
                                        "id": "modeling/Series/bach.SeriesAbstractNumeric.mean"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "prod",
                                        "id": "modeling/Series/bach.SeriesAbstractNumeric.prod"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "product",
                                        "id": "modeling/Series/bach.SeriesAbstractNumeric.product"
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
                                        "label": "skew",
                                        "id": "modeling/Series/bach.SeriesAbstractNumeric.skew"
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
                                "items": [
                                    {
                                        "type": "doc",
                                        "label": "Overview",
                                        "id": "modeling/Series/bach.SeriesAbstractDateTime"
                                    },
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
                                "items": [
                                    {
                                        "type": "doc",
                                        "label": "Overview",
                                        "id": "modeling/Series/bach.SeriesString"
                                    },
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
                                "items": [
                                    {
                                        "type": "doc",
                                        "label": "Overview",
                                        "id": "modeling/Series/bach.SeriesJsonb"
                                    },
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
                        "items": [
                            {
                                "type": "link",
                                "label": "Overview",
                                "href": "/modeling/Series#reference-by-function"
                            },
                            {
                                "type": "category",
                                "label": "Creation / re-framing",
                                "items": [
                                    {
                                        "type": "link",
                                        "label": "Overview",
                                        "href": "/modeling/Series#creation-re-framing"
                                    },
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
                                        "type": "link",
                                        "label": "Overview",
                                        "href": "/modeling/Series#value-accessors"
                                    },
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
                                        "type": "link",
                                        "label": "Overview",
                                        "href": "/modeling/Series#attributes-and-underlying-data"
                                    },
                                    {
                                        "type": "link",
                                        "label": "Axes",
                                        "href": "/modeling/Series#axes"
                                    },
                                    {
                                        "type": "link",
                                        "label": "Types",
                                        "href": "/modeling/Series#id1"
                                    },
                                    {
                                        "type": "link",
                                        "label": "Sql Model",
                                        "href": "/modeling/Series#sql-model"
                                    }
                                ]
                            },
                            {
                                "type": "category",
                                "label": "Comparison and set operations",
                                "items": [
                                    {
                                        "type": "link",
                                        "label": "Overview",
                                        "href": "/modeling/Series#comparison-and-set-operations"
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
                                        "type": "link",
                                        "label": "Overview",
                                        "href": "/modeling/Series#conversion-reshaping-sorting"
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
                                    }
                                ]
                            },
                            {
                                "type": "category",
                                "label": "Function application, aggregation & windowing",
                                "items": [
                                    {
                                        "type": "link",
                                        "label": "Overview",
                                        "href": "/modeling/Series#function-application-aggregation-windowing"
                                    },
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
                                        "type": "link",
                                        "label": "Overview",
                                        "href": "/modeling/Series#computations-descriptive-stats"
                                    },
                                    {
                                        "type": "link",
                                        "label": "All types",
                                        "href": "/modeling/Series#all-types"
                                    },
                                    {
                                        "type": "link",
                                        "label": "Numeric",
                                        "href": "/modeling/Series#numeric"
                                    },
                                    {
                                        "type": "link",
                                        "label": "Window",
                                        "href": "/modeling/Series#window"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "category",
                "label": "Objectiv Bach Open Taxonomy",
                "items": [
                    {
                        "type": "doc",
                        "label": "Overview",
                        "id": "modeling/Objectiv"
                    },
                    {
                        "type": "category",
                        "label": "Reference",
                        "items": [
                            {
                                "type": "link",
                                "label": "Overview",
                                "href": "/modeling/Objectiv#reference"
                            },
                            {
                                "type": "category",
                                "label": "ObjectivFrame",
                                "items": [
                                    {
                                        "type": "doc",
                                        "label": "Overview",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ObjectivFrame"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "add_conversion_event",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ObjectivFrame.add_conversion_event"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "apply_feature_frame_sample_changes",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ObjectivFrame.apply_feature_frame_sample_changes"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "create_sample_feature_frame",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ObjectivFrame.create_sample_feature_frame"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "display_sankey",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ObjectivFrame.display_sankey"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "from_objectiv_data",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ObjectivFrame.from_objectiv_data"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "materialize",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ObjectivFrame.materialize"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "stack_flows_from_feature_df",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ObjectivFrame.stack_flows_from_feature_df"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "conversion_events",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ObjectivFrame.conversion_events"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "end_date",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ObjectivFrame.end_date"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "mh",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ObjectivFrame.mh"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "model_hub",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ObjectivFrame.model_hub"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "start_date",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ObjectivFrame.start_date"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "time_aggregation",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ObjectivFrame.time_aggregation"
                                    }
                                ]
                            },
                            {
                                "type": "category",
                                "label": "ModelHub",
                                "items": [
                                    {
                                        "type": "doc",
                                        "label": "Overview",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ModelHub"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "filter",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ModelHub.filter"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "to_metabase",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ModelHub.to_metabase"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "agg",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ModelHub.agg"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "aggregate",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ModelHub.aggregate"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "map",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.ModelHub.map"
                                    }
                                ]
                            },
                            {
                                "type": "category",
                                "label": "SeriesGlobalContexts",
                                "items": [
                                    {
                                        "type": "doc",
                                        "label": "Overview",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.SeriesGlobalContexts"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "gc",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.SeriesGlobalContexts.gc"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "global_contexts",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.SeriesGlobalContexts.global_contexts"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "obj",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.SeriesGlobalContexts.obj"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "objectiv",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.SeriesGlobalContexts.objectiv"
                                    }
                                ]
                            },
                            {
                                "type": "category",
                                "label": "SeriesLocationStack",
                                "items": [
                                    {
                                        "type": "doc",
                                        "label": "Overview",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.SeriesLocationStack"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "location_stack",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.SeriesLocationStack.location_stack"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "ls",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.SeriesLocationStack.ls"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "obj",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.SeriesLocationStack.obj"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "objectiv",
                                        "id": "modeling/Objectiv/bach_open_taxonomy.SeriesLocationStack.objectiv"
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
