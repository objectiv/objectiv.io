---
title: Meet Objectiv - Open-source product analytics, designed for data science
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus sit amet dolor sed semper. Nunc faucibus tristique sapien, eu pharetra ligula pulvinar et. Aliquam ullamcorper lacus enim, in vulputate elit rutrum ut. Mauris iaculis varius erat, nec dapibus turpis lobortis eget. Cras vitae magna vitae erat volutpat tincidunt. Vestibulum eu magna eget lacus commodo eleifend sed ut lorem. Nam dapibus eros neque, non vulputate sem sodales placerat.
slug: meet-objectiv
authors: vincenthoogsteder
---

import BlogImage from '@site/src/components/blog-image'
import VimeoPlayer from '@site/src/components/vimeo-player'
import EmbedTweet from '@site/src/components/embed-tweet'
import BlogQuestionAnswer from '@site/src/components/blog-question-answer'


*During the last 12 months, our team has silently worked on an open-source project that aims to effectively integrate data science into the product analytics workflow. In this series of blog posts, we want to take you along our journey and show you what we’ve been working on.*

<!--truncate-->

<br />

For a few years, we’ve had the privilege to look inside the kitchens of many product analytics teams to see how they were organized, how they worked and what they struggled with.

We saw an increasing amount of people with a data science role joining these teams, which isn’t too surprising with the rise of companies that have adopted a data-driven approach.

What we also saw: Front-end engineers that had to implement yet another tracking plan because data science was missing events. Data scientists jokingly calling themselves data janitors because of all the gruntwork they needed to do. Data engineers rebuilding the models of data scientists in order to use them for production. And product owners confused with the amount of time it took to answer seemingly simple product questions.

<BlogImage url='img/blog/implement-tracking.jpg' 
  caption='Hat tip to {1} for the relatable image ' 
  captionLinks={[
    {text: 'Timo Dechau', to: 'https://twitter.com/timdechau'}
  ]} />

They were also all doing the same thing: building models for retention, attribution, user segmentation, churn prediction and such. And all of it was done from scratch.

Product analytics platforms today are simply not designed with data science in mind.

<BlogQuestionAnswer question="So, what's the problem?" answer="We believe there's a couple." />

## Current analytics trackers collect data that’s not great for modeling

There is a big gap between what data scientists want their data to look like for modeling and what data actually looks like when it comes from the tracker. 

<BlogImage url='img/blog/expectations-reality.jpg' caption='What I want from my data' />

While most trackers simply track everything by inserting a simple script, the data they collect often contains errors, such as missing or duplicate events. It is also unstructured and ambiguous, making it hard to identify what event you're looking at without having the UI and source code on hand. 

Significant gruntwork is typically required before it can be used for modeling and validation is often done at a stage where problems are hard to fix.

## There is no common way to collect and model product analytics data

While most teams that work with product analytics data typically have very similar goals, their data and models all look different. Everyone creates their own tracking plan, decides on their own data structure and builds their own models. 

Models typically cannot effectively be reused for any other project than the project they were specifically built for, and in-house knowledge is often required in order to work with them. This prevents meaningful collaboration between data scientists in the field.

## Answering ad-hoc product questions is restricted by dependencies between teams

If a product question arises that is outside of the capabilities of the BI tools that are used, a data scientist is often asked to get involved. This data scientist in turn is dependent on a clean, high quality dataset that enables them to effectively answer the question. 

In a perfect world, this data is readily available. In practice however, it often involves asking a data engineer for an export of the raw data from the BI tool, cleaning it and applying transformations in order to be able to use it for modeling. If that model is going to be used in production, the data engineer once again gets involved to rebuild it (e.g. in SQL) to run it at scale.

<EmbedTweet id="1252291581320757249" />

Dependencies between these parties can mean that even a small change to the question at hand can have a big impact on the amount of time required to answer it.

<BlogQuestionAnswer question="What are you going to do about it?" answer="Well, we've been busy." />

## Meet Objectiv 

Objectiv is open-source product analytics, designed for data science. It is built to collect model-ready data straight out of the box. No tracking plans, data cleaning or transformations required. Just open your notebook and start modeling on your data right away with pandas-like operations that run on the full SQL dataset. 

<VimeoPlayer videoId='670857141' id='objectiv-in-2-minutes' caption='Objectiv in 2 minutes' />

As a result of consistent collection, Objectiv models and datasets are intercompatible and can be shared and reused. Pre-built models are included to cover a range of product analytics use cases right out of the box. With a single command, you can convert your entire model to an SQL query that runs on your full dataset, feeds into your BI tools or integrates into your pipeline. 

Check out [objectiv.io](https://www.objectiv.io) to learn more.

## The first milestone

So there it is. We're super excited to finally be able to show you what we're working on today. With this first public version of Objectiv, we've hit our first big milestone. This is just the start of our journey and we have many miles ahead, but Objectiv is alive, kicking, and ready to put some much needed data science love into your product analytics workflow. 

Give it a try and let us know what you think!
