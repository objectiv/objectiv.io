---
title: "Release: Predict user behavior with the open model hub"
description: "Introduces new models to easily predict and analyze user behavior directly on data collected using the open analytics taxonomy, and seamlessly switch between the full data set or a sample. No manual cleaning, transformations, exporting samples or complex tooling required."
slug: release-predict-user-behavior-with-the-open-model-hub/
tags: [releases]
image: /img/open-graph/og-predict-user-behavior.png
authors: ivarpruijn
---

<head>
  <meta property="og:title" content="Release: Predict user behavior with the open model hub" />
</head>

import BlogImage from '@site/src/components/blog-image'
import JoinSlackLink from '@site/src/components/join-slack-link';

[logistic-regression-model]: https://objectiv.io/docs/modeling/open-model-hub/api-reference/ModelHub/LogisticRegression/LogisticRegression/
[logistic-regression-notebook]: https://objectiv.io/docs/modeling/example-notebooks/logistic-regression/
[top-used-features-model]: https://objectiv.io/docs/modeling/open-model-hub/models/Aggregate/top_product_features/
[top-features-before-conversion-model]: https://objectiv.io/docs/modeling/open-model-hub/models/Aggregate/top_product_features_before_conversion/
[model-hub]: https://objectiv.io/docs/modeling/open-model-hub/
[modeling]: https://objectiv.io/docs/modeling/
[root-location]: https://objectiv.io/docs/taxonomy/reference/location-contexts/RootLocationContext/
[location-stack]: https://objectiv.io/docs/modeling/example-notebooks/open-taxonomy/#location-stack
[taxonomy]: https://objectiv.io/docs/taxonomy/
[bach]: https://objectiv.io/docs/modeling/bach/
[sklearn-log-reg]: https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html
[launchpad]: https://objectiv.io/blog/introducing-the-launchpad/
[release-office-hours]: https://meet.google.com/sgc-jqgb-mtc
[website]: https://www.objectiv.io


*In this release we introduce new models to easily predict and analyze user behavior directly on data collected using the [open analytics taxonomy][taxonomy], and seamlessly switch between the full data set or a sample. No manual cleaning, transformations, exporting samples or complex tooling required.*

<!--truncate-->


The first model added to the [open model hub][model-hub] is Logistic Regression, to predict user behavior 
such as:
- Will a user convert?
- Will a user start using a specific product feature or area?
- Will a user have a long active session duration?

Next to this, two new models are added to analyze which features are used the most in any stage of your 
analysis, and what users did _before_ converting.

## Logistic Regression
Data collected with Objectiv's tracker is [very well-structured][taxonomy], which makes it ideal for various 
machine learning applications. 

The new [`LogisticRegression`][logistic-regression-model] model in the [open model hub][model-hub] works 
directly with data collected with Objectiv's tracker, and is based on 
[sklearn's LogisticRegression][sklearn-log-reg], with all its parameters supported.

As a simple example below, we will predict if users on our own [website][website] will reach the 
[modeling section][modeling] of our docs, by looking at interactions that users have with all the other main 
sections of our website. We’ll use the simple dataframe below, which counts the number of clicks per user in 
each section of our website, using the [root location][root-location]:

<BlogImage url="/img/blog/releases/20220609/results-lr-df.png" size="medium" />

See the [example notebook][logistic-regression-notebook] for the intermediate steps of sampling the data, 
initializing the model, and fitting it. Note that for fitting the model, data is extracted from the database 
under the hood.

We can then create columns for the predicted values and labels in the sampled data set, and show the predictions (True if probability is >0.5):

```python
features_set_sample['predicted_values'] = lr.predict_proba(X)
features_set_sample['predicted_labels'] = lr.predict(X)
# show the sampled data set, including predictions
features_set_sample.head(10)
```

<BlogImage url="/img/blog/releases/20220609/results-lr-predicted.png" size="large" />

Now that we have the model results, the data can easily be unsampled to work with the full data set, and its 
SQL exported to run in production:

```python
features_set_full = features_set_sample.get_unsampled()
display_sql_as_markdown(features_set_full)
```

That’s all there is to running a logistic regression model on the full data set collected with Objectiv’s 
tracker, using the [open model hub][model-hub].

## Top Used Product Features
The second model added to the open model hub is [`top_product_features`][top-used-features-model]. It 
enables you to understand which features are used the most in your full product, a subset of your product 
(using the [location stack][location-stack]), or a selection of users (e.g. new users).

As an example:

```python
top_product_features = modelhub.aggregate.top_product_features(df)
top_product_features.head()
```

... outputs the most used features overall:

<BlogImage url="/img/blog/releases/20220609/results-tupf-overall.png" size="large" />

You can narrow it down to a selection of users, e.g. new users:

```python
df['is_new_user'] = modelhub.map.is_new_user(df)
top_product_features_new_users = modelhub.aggregate.top_product_features(df[df['is_new_user']])
top_product_features_new_users.head()
```

<BlogImage url="/img/blog/releases/20220609/results-tupf-new-users.png" size="large" />


Or you can analyze a subset of your product, by using the [location stack][location-stack]. For example, we 
can see the top used features on our blog, using the [root location][root-location]:

```python
# Slice on the blog
top_product_features_blog_section = modelhub.aggregate.top_product_features(df[df.root_location == 'blog'])
top_product_features_blog_section.head()
```

<BlogImage url="/img/blog/releases/20220609/results-tupf-blog.png" size="large" />

## Top Product Features Before Conversion
The final model added to the open model hub is 
[`top_product_features_before_conversion`][top-features-before-conversion-model]. It calculates what users 
did _before_ converting. You can specify which Event represents conversion, and optionally a subset of the 
[location stack][location-stack] you want to know about.

As an example we can calculate which features were most used before clicking a link leading to our blog:

```python
modelhub.add_conversion_event(location-stack=df.location-stack.json[{'id': 'blog', '_type': 'LinkContext'}:],
                              event_type='PressEvent',
                              name='blog_press')
top_features_before_conversion = modelhub.agg.top_product_features_before_conversion(df, name='blog_press')
top_features_before_conversion.head()
```

<BlogImage url="/img/blog/releases/20220609/results-tfbc.png" size="large" />

Similar to the [`top_product_features`][top-used-features-model] model, you can also slice on subsets of 
your product (using the location stack) or a selection of users.


## How to get it
The three new models are now live in the [open model hub][model-hub]. To use them, install the package from 
PyPI:

```bash
pip install objectiv-modelhub
```

If you already have the package installed, don't forget to upgrade:

```console
pip install --upgrade objectiv-modelhub
```

:::tip

If you want to test run these models on your own product without worrying about the Ops part, reach out to us 
to get a [Launchpad][launchpad]: a free-to-use, fully managed Objectiv back-end and data store without any 
setup or configuration.

:::

## Introducing: Release Office Hours
If you have any questions about this release or anything else, or if you just want to say 'Hi!' to team 
Objectiv, we now have [Release Office Hours][release-office-hours] every Thursday at 4pm CET, 10am EST that 
you can freely dial in to. If you're in a timezone that doesn’t fit well, just ping us 
on <JoinSlackLink linkText="Slack" /> and we'll send over an invite for a better moment.

[Join the Release Office Hours][release-office-hours]

