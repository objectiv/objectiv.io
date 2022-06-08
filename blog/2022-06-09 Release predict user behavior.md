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

[taxonomy]: https://objectiv.io/docs/taxonomy/
[location_stack]: https://objectiv.io/docs/modeling/example-notebooks/open-taxonomy/#location_stack
[model_hub]: https://objectiv.io/docs/modeling/open-model-hub/
[bach]: https://objectiv.io/docs/modeling/bach/
[sklearn-log-reg]: https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html
[launchpad]: https://objectiv.io/blog/introducing-the-launchpad/
[release-office-hours]: https://cal.com/objectiv/release-office-hours?date=2022-06-16%2B0200

*In this release we introduce new models to easily predict and analyze user behavior directly on data collected using the [open analytics taxonomy][taxonomy], and seamlessly switch between the full data set or a sample. No manual cleaning, transformations, exporting samples or complex tooling required.*

<!--truncate-->

TODO


## How to get it
The three new models are now live in the [open model hub][model_hub]. To use them, install the package from 
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
Objectiv, we now have [Release Office Hours][release-office-hours] every Thursday that you can freely dial in 
to. If you're in a timezone that doesn’t fit well, just ping us on <JoinSlackLink linkText="Slack" /> and 
we'll send over an invite for a better moment.

[Join the open office hours][release-office-hours]

