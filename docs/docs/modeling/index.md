---
sidebar_position: 1
slug: /modeling/
title: Introduction
---

# Introduction

Data collected with Objectiv’s Tracker and stored in an SQL database can be analyzed in a Jupyter notebook with the open model hub. The open model hub is a growing collection of open-source, free to use data models that you can take, combine and run for product analysis and exploration. It includes models for a wide range of typical product analytics use cases.

If you want to use the open model hub, install the package from Pypi as follows:

```console
pip install objectiv-modelhub
```

See the [example notebooks](./example_notebooks.md) section to get started immediately. [View the list of available models](./models/index.md) or check out the full [open model hub API reference](./modelhub-api-reference/index.md). More information on setting up a development environment for the open model hub and how to configure Metabase is in the [readme](https://github.com/objectiv/objectiv-analytics/tree/main/modelhub).

The open model hub is powered by Bach: Objectiv’s data modeling library. With Bach, you can compose models with familiar Pandas-like dataframe operations in your notebook. It uses a SQL abstraction layer that enables models to run on the full dataset, and you can output models to SQL with a single command. Head over to [the Bach section](./bach/index.md) to learn all about it.