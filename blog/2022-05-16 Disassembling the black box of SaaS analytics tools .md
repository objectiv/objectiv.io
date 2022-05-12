---
title: Disassembling the black box of SaaS analytics tools
description: The way data is used has evolved, and the all-in-one-box model that SaaS analytics tools use no longer fits. In order to effectively combine and analyze data from multiple sources and truly serve all data consumers from a single source of truth, we need to disassemble the black box and separate data collection, storage, modeling and visualization.
slug: disassembling-the-black-box-of-saas-analytics-tools
image: /img/open-graph/og-sherlock.png
authors: vincenthoogsteder
---

<head>
  <meta property="og:title" content="Why Objectiv captures the logical structure of your product inside your dataset" />
</head>

import BlogImage from '@site/src/components/blog-image'

*When Google Analytics launched nearly 20 years ago, it took the market by storm. Its success created the mold for the many analytics tools that would follow, popularizing the form of a SaaS-based analytics offering that included everything in one box: data collection, storage, analysis & visualization.*

<!--truncate-->

Ease-of-use and low barrier of entry were two of the main drivers behind this form’s popularity. Instrumentation typically required little in terms of engineering resources and the included analyses, although somewhat limited, were ready to be used by a broad audience. 

<BlogImage url='img/blog/urchin.jpeg'
  caption="Urchin Analytics, to become Google Analytics after acquisition." />

While this form is still very popular and widely used, we’re seeing a major shift where companies are pulling data out of their SaaS analytics tools to get it into their data warehouses.

There are a couple of reasons for that:

## Increased awareness of the potential of raw data
Companies are learning that having a properly set up data warehouse enables them to do a lot more with their data. Data sets that were previously siloed can be combined, and having full access to the raw data means can go way beyond the scope of your SaaS analytics tools: you’re technically only limited by the quality and completeness of the data sets.

## Data warehousing has become easier
Setting up and maintaining a proper, scalable data warehouse used to require a lot of work and expertise. Advancements in cloud technologies have made this significantly easier. As a result, many companies have started storing raw data that previously never left their BI tools.

## The rise of analytics engineering
As product and marketing teams evolve, so do their questions and needs. An increasing number of people with a background in data science and engineering are joining (product) analytics teams to help them get the raw data out and extract answers from it. This further increases their awareness of the potential of raw data.

The rise of analytics engineering is also represented by the popularity and number of tools in this field, with [dbt](https://www.getdbt.com/) as a prime example.

<BlogImage url='img/blog/dbt-cloud.png'
  caption="dbt Cloud in action" />

## The need for a single source of truth
The wild growth of SaaS analytics tools has left the data analysis landscape highly fragmented. Most companies have numerous tools collecting data, and each of them have a different way of consuming it. As a result, it’s hard to get a holistic view of what all that combined data is telling you. 

Data teams have been setting up data warehouses that combine all data sources in an effort to create a single source of truth to serve all their data consumers.

---

## ... but SaaS analytics tools aren’t great input for your DWH
While it’s historically explainable why many data warehouses are fed with data that’s collected by all-in-one-box SaaS analytics tools, this often causes of problems further down the pipeline. It's one of the key reasons that many companies struggle to use their data effectively.

## The data they collect is not designed for in-depth analysis
There is a big difference between what data teams want their raw data to look like and what it actually looks like when it comes from SaaS analytics tools. The data sets they collect were never designed for in-depth analysis on the raw data. It is often incomplete or overcomplete, unstructured and ambiguous. Significant grunt work is typically required before it can be used for modeling. 

## Data duplication frustrates adoption of a single source of truth
By extracting data from SaaS tools and loading it into a data warehouse, you’re effectively duplicating a source.

SaaS analytics tools all offer their own way to consume the collected data, and chances are many of your company’s data consumers still rely on the dashboards of these tools to inform their daily decisions. Either out of habit, or simply because it offers an easy & fast way to get data.

In practice, this often leads to discussions about why numbers of different teams don’t seem to be adding up, as the data team and data consumers both use different versions of the same source of data as input.

<BlogImage url='img/blog/before-saas.png' />

## They operate as black boxes
SaaS analytics tools typically don’t disclose the actual models behind an analysis. As a result, rebuilding an analysis to work with the data set in your data warehouse requires significant reverse engineering effort, and troubleshooting & debugging can be painful when anything is off. 

---

## Unbundling SaaS analytics tools
The way data is used has evolved, and the all-in-one-box model that SaaS analytics tools use no longer fits. In order to effectively combine and analyze data from multiple sources and truly serve all data consumers from a single source of truth, we need to disassemble the black box and separate data collection, storage, modeling and visualization.

## Moving all data consumption down the pipeline
By separating data collection, all collected data can be sent straight into the data warehouse without stopovers. This eliminates source duplication and moves data consumption down the pipeline. It enables all analysis & visualization to occur on a single source of truth: the data warehouse.

<BlogImage url='img/blog/after-saas.png' />

## Shifting from vendor-locked tools to raw data and code
Disassembling the black boxes also provides a big opportunity for the adoption of open standards. Shifting from vendor-locked tools to raw data and code would enable data teams to adopt generic ways of structuring data to share and reuse each others’ tools, models and analyses.

It’s time to unbundle SaaS analytics.
