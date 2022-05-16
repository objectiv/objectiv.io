---
title: Frequently Asked Questions
slug: /home/the-project/faq
description: Frequently Asked Questions
sidebar_label: FAQ
sidebar_position: 1
---

import JoinSlackLink from '@site/src/components/join-slack-link';

#### How is Objectiv different from product analytics tools?

Many data teams extract data out of their SaaS analytics tools to perform analyses that are outside of its scope, but the data sets collected by these tools were never designed for this purpose. As a result, significant grunt work is required to get that data ready for in-depth analysis and andvanced modeling.

Objectiv’s tracker collects clean, well-structured data that’s ready for modeling without any additional cleaning and transformation, and feeds it straight into your data warehouse. It embraces a [generic event taxonomy](/taxonomy/introduction.md) that enables all models to be shared and reused between projects, teams and companies. This enables data teams to skip the grunt work and build on shared knowledge to speed up their data projects.
- - -
## Taxonomy

#### What is the open analytics taxonomy?
The [open analytics taxonomy](/taxonomy/introduction.md) is a generic classifification of common event types and the contexts in which they can happen. It is a proposal for a common way to collect & structure analytics data in an effort to enable models to be universally shared and reused between projects, teams and companies.

Check out the [Taxonomy](/taxonomy/introduction.md) section of our Docs to see what it looks like, or try the [Quickstart Guide](/home/quickstart-guide.md) to spin up a fully functional dockerized demo and see it in practice (takes 5 minutes).

#### Why an open analytics taxonomy?
When it comes to product analytics, we noticed that most data teams have similar goals (optimize conversion, increase engagement, reduce churn, etc.) yet their data and models all look different. Models are often built from scratch. Someone in your field has probably already written a very similar analysis, but data teams keep reinventing the wheel because there is no common way to structure data. This leads to isolated knowledge and no meaningful way for the data community to collaborate. 

We believe a widespread adoption of an [open analytics taxonomy](/taxonomy/introduction.md) would be beneficial for the data community on multiple levels:

* The recurring discussion on what to track and how to track it can be eliminated because the modeling requirements are carried by the design of the taxonomy.
* The classification of events & contexts enables trackers to collect validated, well-structured data that is ready for modeling without additional cleaning or transformation.
* Any model from any source can be shared and reused between projects, teams and companies.


- - - 
## Tracking

#### Does Objectiv work for mobile and web?
Objectiv currently has Tracking SDKs for React, React Native, Angular and Browser (JavaScript). They're built on top of Objectiv’s core tracker, which has been designed to be platform & device agnostic and have minimal dependencies. You can combine data from various platforms and devices in your analyses without additional transformation.

#### Do I need to replace my existing analytics tracker?
No. You can typically instrument Objectiv’s tracker and leave your existing tracking instrumentation alone and both will work fine. You can start small and expand as you go.

#### Do I need a tracking plan?
In most cases, the recurring discussion on what to track and how to track it can be eliminated because the modeling requirements are carried by the design of the [open analytics taxonomy](/taxonomy/introduction.md). It ensures that you collect the required data to effectively build models for common analyses (conversion, retention, engagement, etc.). The taxonomy can be extended to also cover less common analyses.

#### Does the tracker auto-capture events?
No. While setting up auto-capture trackers is very convenient, the data sets they collect are often incomplete, overcomplete unstructured and ambiguous. Significant gruntwork is typically required before it can be used for modeling & analysis. 

Instrumenting Objectiv's tracker involves [mapping sections of your product's UI](/tracking/core-concepts/locations.md) and tagging events. Our tracking SDK provides tools to make this process as efficient as possible. 

Tagging sections and events serves multiple purposes:

* The collected data becomes rich and descriptive. You can pinpoint exactly what event happened, which type it was, in which context it happened and from which location in the UI it was triggered.
* Your tracking instrumentation becomes debuggable. You’ll be able to catch tracking instrumentation errors early on because it is being validated as you’re developing it. 
* The collected data no longer requires significant cleaning and restructuring before it can be used for modeling because it was collected in a structured manner and validated at the first step of the pipeline.





- - - 
## Modeling

#### What does data captured with Objectiv look like?
Rich, descriptive, clean and well-structured. Check out our our [Quickstart Guide](/home/quickstart-guide.md) to play with Objectiv locally. It includes real, untransformed data that was collected with an unaltered version of Objectiv's tracker. 

#### Why is Objectiv SQL-based?
SQL is widely used, versatile, not overly complex, and with developments in cloud technology, SQL databases have become very powerful and scalable. It’s supported by all major cloud providers and easy to self host.

Objectiv Bach, our modeling library, features an SQL abstraction layer that enables you to use Pandas-like operations on your full data set, combining the modeling power of Pandas with the versatility of SQL

#### Which Pandas-like operations can I use to build SQL models?
For all supported pandas operations, check the reference in the [Bach documentation](/modeling/bach/index.mdx) section.

#### Can I run these models in production?
Yes. You can use [dbt](https://www.getdbt.com/) for example to run these in production. We plan to offer seamless integration for [dbt](https://www.getdbt.com/) in the future.

#### Does Objectiv include any data visualisation/dashboards for BI purposes?
Objectiv does not include its own data visualisation tools as we believe there are many excellent solutions out there already that serve this purpose. We have instead focused our efforts on enabling you to easily feed your Objectiv data into your BI tool of choice. 
- - -
## Data privacy & legal
#### Does Objectiv’s tracker collect personally identifiable information? (PII)
Yes, but not before the user has given explicit consent. In order to identify returning users, Objectiv creates a unique user ID. Objectiv only tracks what is strictly required in order to model effectively. 

#### Does Objectiv store or share any user data?
No. Objectiv’s data is strictly first party and we do not have access to the generated event data. You’re free to choose how and where to store your data and have full control over who gets to see and use it.

#### What’s the default expiration date on Objectiv’s cookies?
One year. You can change the expiration date in your Objectiv configuration.

#### What kind of license does Objectiv use?
Objectiv is licensed under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0) . It is a permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

- - -
## OPS

#### Does it work with my stack?
Objectiv currently requires a PostgreSQL database and works in any environment where you can run containers. We're working on support for Snowplow and BigQuery for event handling at scale. Amazon Redshift is planned next and more will follow.

#### What's the fastest way to test-drive Objectiv with my current app/website?
If you want to test Objectiv with your own project, we're here to help out. We can set up a test collector & back-end for you. All you'll have to do is instrument Objectiv's tracker to a part of your app. <JoinSlackLink linkText='Join us on Slack' /> and reach out if you're interested.

#### Does it scale?
Objectiv’s architecture is built to scale. It is only restricted by the capacity of your databases. Collection is stateless and can be run in parallel. Objectiv currently uses PostgreSQL as a database backend and features an SQL abstraction layer that enables you to run Pandas operations from your notebook on the full dataset. We have plans to support other databases as well. 

#### Can I run it on-premise?
Yes. We don’t have any plans for a hosted version. Check out our [Quickstart Guide](/home/quickstart-guide.md) for installation instructions.

- - - 
## Company
#### Is it supported properly?
We’re well-funded and are actively working on the project on a daily basis with 10 full-time team members. Check out our [Github repo](https://github.com/objectiv/objectiv-analytics) to see our activity.

#### What’s your business model?
Objectiv ultimately wants to monetize with paid offerings to users of the ecosystem that we believe will emerge around the open taxonomy for analytics. Objectiv’s core library and the taxonomy are and always will be open source and free to use.

#### How do you plan to develop the project?
We want to make sure the taxonomy enables collection of data that meets the requirements of the data community for effective modeling. As such, we will be looking to create a continuous feedback loop with said community to ensure it meets their needs. As widespread adoption is a goal, we will put effort in seeing that it can be used for a wide range of DS use cases.

#### Do you plan to develop a taxonomy for other areas?
The current version of our taxonomy is built for product analytics as we believe it's the cornerstone of the user journey. We're currently extending it to cover marketing use cases as well. 

We’ve built a solid foundation that can be used to create taxonomies for other fields, e.g. Payments and CRM. If you’ve got a lot of experience in a particular field and would like to contribute, please  <JoinSlackLink linkText='join us on Slack' />.
