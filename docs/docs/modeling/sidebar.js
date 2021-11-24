
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
                                        "id": "modeling/dataframe/bach.DataFrame"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "agg",
                                        "id": "modeling/dataframe/bach.DataFrame.agg"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "aggregate",
                                        "id": "modeling/dataframe/bach.DataFrame.aggregate"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "astype",
                                        "id": "modeling/dataframe/bach.DataFrame.astype"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "copy",
                                        "id": "modeling/dataframe/bach.DataFrame.copy"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "count",
                                        "id": "modeling/dataframe/bach.DataFrame.count"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "cube",
                                        "id": "modeling/dataframe/bach.DataFrame.cube"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "drop",
                                        "id": "modeling/dataframe/bach.DataFrame.drop"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "expanding",
                                        "id": "modeling/dataframe/bach.DataFrame.expanding"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "from_model",
                                        "id": "modeling/dataframe/bach.DataFrame.from_model"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "from_pandas",
                                        "id": "modeling/dataframe/bach.DataFrame.from_pandas"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "from_table",
                                        "id": "modeling/dataframe/bach.DataFrame.from_table"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "get_sample",
                                        "id": "modeling/dataframe/bach.DataFrame.get_sample"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "get_unsampled",
                                        "id": "modeling/dataframe/bach.DataFrame.get_unsampled"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "groupby",
                                        "id": "modeling/dataframe/bach.DataFrame.groupby"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "head",
                                        "id": "modeling/dataframe/bach.DataFrame.head"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "materialize",
                                        "id": "modeling/dataframe/bach.DataFrame.materialize"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "max",
                                        "id": "modeling/dataframe/bach.DataFrame.max"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "mean",
                                        "id": "modeling/dataframe/bach.DataFrame.mean"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "median",
                                        "id": "modeling/dataframe/bach.DataFrame.median"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "merge",
                                        "id": "modeling/dataframe/bach.DataFrame.merge"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "min",
                                        "id": "modeling/dataframe/bach.DataFrame.min"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "mode",
                                        "id": "modeling/dataframe/bach.DataFrame.mode"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "nunique",
                                        "id": "modeling/dataframe/bach.DataFrame.nunique"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "rename",
                                        "id": "modeling/dataframe/bach.DataFrame.rename"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "reset_index",
                                        "id": "modeling/dataframe/bach.DataFrame.reset_index"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "rolling",
                                        "id": "modeling/dataframe/bach.DataFrame.rolling"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "rollup",
                                        "id": "modeling/dataframe/bach.DataFrame.rollup"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "sem",
                                        "id": "modeling/dataframe/bach.DataFrame.sem"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "set_index",
                                        "id": "modeling/dataframe/bach.DataFrame.set_index"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "sort_values",
                                        "id": "modeling/dataframe/bach.DataFrame.sort_values"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "std",
                                        "id": "modeling/dataframe/bach.DataFrame.std"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "sum",
                                        "id": "modeling/dataframe/bach.DataFrame.sum"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "to_pandas",
                                        "id": "modeling/dataframe/bach.DataFrame.to_pandas"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "var",
                                        "id": "modeling/dataframe/bach.DataFrame.var"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "view_sql",
                                        "id": "modeling/dataframe/bach.DataFrame.view_sql"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "window",
                                        "id": "modeling/dataframe/bach.DataFrame.window"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "all_series",
                                        "id": "modeling/dataframe/bach.DataFrame.all_series"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "data",
                                        "id": "modeling/dataframe/bach.DataFrame.data"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "data_columns",
                                        "id": "modeling/dataframe/bach.DataFrame.data_columns"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "dtypes",
                                        "id": "modeling/dataframe/bach.DataFrame.dtypes"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "group_by",
                                        "id": "modeling/dataframe/bach.DataFrame.group_by"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "index",
                                        "id": "modeling/dataframe/bach.DataFrame.index"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "index_columns",
                                        "id": "modeling/dataframe/bach.DataFrame.index_columns"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "index_dtypes",
                                        "id": "modeling/dataframe/bach.DataFrame.index_dtypes"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "order_by",
                                        "id": "modeling/dataframe/bach.DataFrame.order_by"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "values",
                                        "id": "modeling/dataframe/bach.DataFrame.values"
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
                                        "id": "modeling/dataframe/bach.DataFrame.from_table"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "from_model",
                                        "id": "modeling/dataframe/bach.DataFrame.from_model"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "from_pandas",
                                        "id": "modeling/dataframe/bach.DataFrame.from_pandas"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "copy",
                                        "id": "modeling/dataframe/bach.DataFrame.copy"
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
                                        "id": "modeling/dataframe/bach.DataFrame.head"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "to_pandas",
                                        "id": "modeling/dataframe/bach.DataFrame.to_pandas"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "values",
                                        "id": "modeling/dataframe/bach.DataFrame.values"
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
                                        "id": "modeling/dataframe/bach.DataFrame.sort_values"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "rename",
                                        "id": "modeling/dataframe/bach.DataFrame.rename"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "drop",
                                        "id": "modeling/dataframe/bach.DataFrame.drop"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "reset_index",
                                        "id": "modeling/dataframe/bach.DataFrame.reset_index"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "set_index",
                                        "id": "modeling/dataframe/bach.DataFrame.set_index"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "merge",
                                        "id": "modeling/dataframe/bach.DataFrame.merge"
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
                                        "id": "modeling/dataframe/bach.DataFrame.agg"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "aggregate",
                                        "id": "modeling/dataframe/bach.DataFrame.aggregate"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "groupby",
                                        "id": "modeling/dataframe/bach.DataFrame.groupby"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "rollup",
                                        "id": "modeling/dataframe/bach.DataFrame.rollup"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "cube",
                                        "id": "modeling/dataframe/bach.DataFrame.cube"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "window",
                                        "id": "modeling/dataframe/bach.DataFrame.window"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "rolling",
                                        "id": "modeling/dataframe/bach.DataFrame.rolling"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "expanding",
                                        "id": "modeling/dataframe/bach.DataFrame.expanding"
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
                                        "id": "modeling/series/bach.Series"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "agg",
                                        "id": "modeling/series/bach.Series.agg"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "aggregate",
                                        "id": "modeling/series/bach.Series.aggregate"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "all_values",
                                        "id": "modeling/series/bach.Series.all_values"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "any_value",
                                        "id": "modeling/series/bach.Series.any_value"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "apply_func",
                                        "id": "modeling/series/bach.Series.apply_func"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "astype",
                                        "id": "modeling/series/bach.Series.astype"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "copy",
                                        "id": "modeling/series/bach.Series.copy"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "count",
                                        "id": "modeling/series/bach.Series.count"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "exists",
                                        "id": "modeling/series/bach.Series.exists"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "fillna",
                                        "id": "modeling/series/bach.Series.fillna"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "from_const",
                                        "id": "modeling/series/bach.Series.from_const"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "head",
                                        "id": "modeling/series/bach.Series.head"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "isin",
                                        "id": "modeling/series/bach.Series.isin"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "isnull",
                                        "id": "modeling/series/bach.Series.isnull"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "max",
                                        "id": "modeling/series/bach.Series.max"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "median",
                                        "id": "modeling/series/bach.Series.median"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "min",
                                        "id": "modeling/series/bach.Series.min"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "mode",
                                        "id": "modeling/series/bach.Series.mode"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "notnull",
                                        "id": "modeling/series/bach.Series.notnull"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "nunique",
                                        "id": "modeling/series/bach.Series.nunique"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "sort_values",
                                        "id": "modeling/series/bach.Series.sort_values"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "to_frame",
                                        "id": "modeling/series/bach.Series.to_frame"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "to_pandas",
                                        "id": "modeling/series/bach.Series.to_pandas"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "unique",
                                        "id": "modeling/series/bach.Series.unique"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "view_sql",
                                        "id": "modeling/series/bach.Series.view_sql"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "window_cume_dist",
                                        "id": "modeling/series/bach.Series.window_cume_dist"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "window_dense_rank",
                                        "id": "modeling/series/bach.Series.window_dense_rank"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "window_first_value",
                                        "id": "modeling/series/bach.Series.window_first_value"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "window_lag",
                                        "id": "modeling/series/bach.Series.window_lag"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "window_last_value",
                                        "id": "modeling/series/bach.Series.window_last_value"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "window_lead",
                                        "id": "modeling/series/bach.Series.window_lead"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "window_nth_value",
                                        "id": "modeling/series/bach.Series.window_nth_value"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "window_ntile",
                                        "id": "modeling/series/bach.Series.window_ntile"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "window_percent_rank",
                                        "id": "modeling/series/bach.Series.window_percent_rank"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "window_rank",
                                        "id": "modeling/series/bach.Series.window_rank"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "window_row_number",
                                        "id": "modeling/series/bach.Series.window_row_number"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "array",
                                        "id": "modeling/series/bach.Series.array"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "base_node",
                                        "id": "modeling/series/bach.Series.base_node"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "dtype",
                                        "id": "modeling/series/bach.Series.dtype"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "group_by",
                                        "id": "modeling/series/bach.Series.group_by"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "index",
                                        "id": "modeling/series/bach.Series.index"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "name",
                                        "id": "modeling/series/bach.Series.name"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "sorted_ascending",
                                        "id": "modeling/series/bach.Series.sorted_ascending"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "value",
                                        "id": "modeling/series/bach.Series.value"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "values",
                                        "id": "modeling/series/bach.Series.values"
                                    }
                                ]
                            },
                            {
                                "type": "doc",
                                "label": "SeriesBoolean",
                                "id": "modeling/series/bach.SeriesBoolean"
                            },
                            {
                                "type": "category",
                                "label": "SeriesAbstractNumeric",
                                "items": [
                                    {
                                        "type": "doc",
                                        "label": "Overview",
                                        "id": "modeling/series/bach.SeriesAbstractNumeric"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "kurt",
                                        "id": "modeling/series/bach.SeriesAbstractNumeric.kurt"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "kurtosis",
                                        "id": "modeling/series/bach.SeriesAbstractNumeric.kurtosis"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "mad",
                                        "id": "modeling/series/bach.SeriesAbstractNumeric.mad"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "mean",
                                        "id": "modeling/series/bach.SeriesAbstractNumeric.mean"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "prod",
                                        "id": "modeling/series/bach.SeriesAbstractNumeric.prod"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "product",
                                        "id": "modeling/series/bach.SeriesAbstractNumeric.product"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "round",
                                        "id": "modeling/series/bach.SeriesAbstractNumeric.round"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "sem",
                                        "id": "modeling/series/bach.SeriesAbstractNumeric.sem"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "skew",
                                        "id": "modeling/series/bach.SeriesAbstractNumeric.skew"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "std",
                                        "id": "modeling/series/bach.SeriesAbstractNumeric.std"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "sum",
                                        "id": "modeling/series/bach.SeriesAbstractNumeric.sum"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "var",
                                        "id": "modeling/series/bach.SeriesAbstractNumeric.var"
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
                                        "id": "modeling/series/bach.SeriesAbstractDateTime"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "dt",
                                        "id": "modeling/series/bach.SeriesAbstractDateTime.dt"
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
                                        "id": "modeling/series/bach.SeriesString"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "str",
                                        "id": "modeling/series/bach.SeriesString.str"
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
                                        "id": "modeling/series/bach.SeriesJsonb"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "json",
                                        "id": "modeling/series/bach.SeriesJsonb.json"
                                    }
                                ]
                            },
                            {
                                "type": "doc",
                                "label": "SeriesJson",
                                "id": "modeling/series/bach.SeriesJson"
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
                                        "id": "modeling/series/bach.Series.from_const"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "to_frame",
                                        "id": "modeling/series/bach.Series.to_frame"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "copy",
                                        "id": "modeling/series/bach.Series.copy"
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
                                        "id": "modeling/series/bach.Series.head"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "to_pandas",
                                        "id": "modeling/series/bach.Series.to_pandas"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "array",
                                        "id": "modeling/series/bach.Series.array"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "values",
                                        "id": "modeling/series/bach.Series.values"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "value",
                                        "id": "modeling/series/bach.Series.value"
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
                                        "id": "modeling/series/bach.Series.all_values"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "any_value",
                                        "id": "modeling/series/bach.Series.any_value"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "exists",
                                        "id": "modeling/series/bach.Series.exists"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "isin",
                                        "id": "modeling/series/bach.Series.isin"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "isnull",
                                        "id": "modeling/series/bach.Series.isnull"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "notnull",
                                        "id": "modeling/series/bach.Series.notnull"
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
                                        "id": "modeling/series/bach.Series.sort_values"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "fillna",
                                        "id": "modeling/series/bach.Series.fillna"
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
                                        "id": "modeling/series/bach.Series.agg"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "aggregate",
                                        "id": "modeling/series/bach.Series.aggregate"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "apply_func",
                                        "id": "modeling/series/bach.Series.apply_func"
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
                                "label": "ObjectivStack",
                                "items": [
                                    {
                                        "type": "doc",
                                        "label": "Overview",
                                        "id": "modeling/objectiv/bach_open_taxonomy.ObjectivStack"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "get_from_context_with_type_series",
                                        "id": "modeling/objectiv/bach_open_taxonomy.ObjectivStack.get_from_context_with_type_series"
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
                                        "id": "modeling/objectiv/bach_open_taxonomy.SeriesGlobalContexts"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "gc",
                                        "id": "modeling/objectiv/bach_open_taxonomy.SeriesGlobalContexts.gc"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "global_contexts",
                                        "id": "modeling/objectiv/bach_open_taxonomy.SeriesGlobalContexts.global_contexts"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "obj",
                                        "id": "modeling/objectiv/bach_open_taxonomy.SeriesGlobalContexts.obj"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "objectiv",
                                        "id": "modeling/objectiv/bach_open_taxonomy.SeriesGlobalContexts.objectiv"
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
                                        "id": "modeling/objectiv/bach_open_taxonomy.SeriesLocationStack"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "location_stack",
                                        "id": "modeling/objectiv/bach_open_taxonomy.SeriesLocationStack.location_stack"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "ls",
                                        "id": "modeling/objectiv/bach_open_taxonomy.SeriesLocationStack.ls"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "obj",
                                        "id": "modeling/objectiv/bach_open_taxonomy.SeriesLocationStack.obj"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "objectiv",
                                        "id": "modeling/objectiv/bach_open_taxonomy.SeriesLocationStack.objectiv"
                                    }
                                ]
                            },
                            {
                                "type": "category",
                                "label": "FeatureFrame",
                                "items": [
                                    {
                                        "type": "doc",
                                        "label": "Overview",
                                        "id": "modeling/objectiv/bach_open_taxonomy.FeatureFrame"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "check_supported",
                                        "id": "modeling/objectiv/bach_open_taxonomy.FeatureFrame.check_supported"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "copy_override",
                                        "id": "modeling/objectiv/bach_open_taxonomy.FeatureFrame.copy_override"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "display_sankey",
                                        "id": "modeling/objectiv/bach_open_taxonomy.FeatureFrame.display_sankey"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "from_data_frame",
                                        "id": "modeling/objectiv/bach_open_taxonomy.FeatureFrame.from_data_frame"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "hash_features",
                                        "id": "modeling/objectiv/bach_open_taxonomy.FeatureFrame.hash_features"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "stack_flows_from_feature_df",
                                        "id": "modeling/objectiv/bach_open_taxonomy.FeatureFrame.stack_flows_from_feature_df"
                                    },
                                    {
                                        "type": "doc",
                                        "label": "write_to_full_frame",
                                        "id": "modeling/objectiv/bach_open_taxonomy.FeatureFrame.write_to_full_frame"
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
