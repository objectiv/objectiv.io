---
title: Contributing
slug: /the-project/contribute
sidebar_label: Contribute
sidebar_position: 3
---

import Mermaid from '@theme/Mermaid';

First off, thank you for considering to contribute to Objectiv! Please feel welcome - we need volunteer developers like yourself. Community adoption and contribution are critical to Objectiv's success. We're here to help you find things to work on that you're excited about.

## Where to start?

There are many ways to contribute, from improving [the documentation](https://objectiv.io/docs/), submitting [bug reports & feature requests](https://github.com/objectiv/objectiv-analytics/issues), to [writing code ](https://github.com/objectiv/objectiv-analytics/). 

To jump straight to what you're looking for, see Objectiv's contribution map below:

<Mermaid chart={`
	graph LR
    SecurityIssue["Security Issue"] ----> SecurityPolicy["See Security Policy"];
    Question --> Docs["See Documentation"]
    Docs ---> PostSlack["Post on Slack"]
		Bug ---> CheckIssues["Check GitHub Issues"];
    CheckIssues --> Comment["Comment/+1"];
    CheckIssues --> GitHubIssue["Create GitHub Issue"];
    FeatureRequest["Feature Request"] ---> CheckIssues;
    Contribution ----> PR["Create a Pull Request"];
    LabelUpdate["GitHub Label update"] ----> PR["Create a Pull Request"];
    StayUpToDate["Receive Updates"] ----> GitHubReleases["Follow Releases on GitHub"];
    click PostSlack "https://join.slack.com/t/objectiv-io/shared_invite/zt-u6xma89w-DLDvOB7pQer5QUs5B_~5pg" "Join Objectiv on Slack" _blank;
`} 
  caption="Figure: How To Contribute" 
  baseColor="basic" 
  links={[
    { name: 'SecurityPolicy', to: 'https://github.com/objectiv/objectiv-analytics/blob/main/SECURITY.md', tooltip: 'See Security Policy', target: '_blank' }, 
    { name: 'Docs', to: 'https://objectiv.io/docs', tooltip: 'See Objectiv Documentation', target: '_self' },
    { name: 'CheckIssues', to: 'https://github.com/objectiv/objectiv-analytics/issues', tooltip: 'Go to GitHub Issues', target: '_blank' },
    { name: 'GitHubIssue', to: 'https://github.com/objectiv/objectiv-analytics/issues', tooltip: 'Go to GitHub Issues', target: '_blank' },
    { name: 'PR', to: 'https://github.com/objectiv/objectiv-analytics/pulls', tooltip: 'Go to GitHub Pull Requests', target: '_blank' },
    { name: 'GitHubReleases', to: 'https://github.com/objectiv/objectiv-analytics', tooltip: 'Follow Releases on GitHub', target: '_blank' },
    { name: 'PostSlack', to: 'https://join.slack.com/t/objectiv-io/shared_invite/zt-u6xma89w-DLDvOB7pQer5QUs5B_~5pg', tooltip: 'Join Objectiv on Slack', target: '_blank' }
  ]}
/>

The following is a set of guidelines for contributing that help communicate respect for each other's time & contributions. These are mostly guidelines, not rules; simply use your best judgment, and feel free to propose changes to this document in a pull request. 

## Code of Conduct {#code-of-conduct}

This project and everyone participating in it is governed by the [Objectiv Code of Conduct](https://github.com/objectiv/objectiv-analytics/blob/main/CODE_OF_CONDUCT.md). By participating in any form, you are expected to uphold this code. Please report unacceptable behavior to [abuse@objectiv.io](mailto:abuse@objectiv.io).


## I Found A Security Issue {#i-found-a-security-issue}

We take security issues very seriously. Please do not open up a GitHub issue if the bug is a security vulnerability, and instead to refer to our [security policy](https://github.com/objectiv/objectiv-analytics/blob/main/SECURITY.md).


## I Just Have A Question {#i-just-have-a-question}

:::note

Please don't file an issue to ask a question. You'll get faster results by posting it in [Objectiv's Slack channels](https://join.slack.com/t/objectiv-io/shared_invite/zt-u6xma89w-DLDvOB7pQer5QUs5B_~5pg).

:::


## Reporting Bugs {#reporting-bugs}

Following the guidelines below helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

:::caution

If you find a security vulnerability, please do NOT open an issue; instead, refer to our [security policy](https://github.com/objectiv/objectiv-analytics/blob/main/SECURITY.md).

:::


### Before Submitting A Bug Report {#before-submitting-a-bug-report}

Before creating bug reports, please check the list below, as you might find out that you don't need to create one:

1. Check if you can reproduce the problem in the latest version of Objectiv.
2. Perform a cursory search in the [GitHub repo](https://github.com/objectiv/objectiv-analytics/issues) to see if the problem has already been reported. 
    1. If it has and the issue is still Open, please use that issue for any comments (if needed), instead of opening a new one. 
    2. If you find a Closed issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.


### Submitting A New Bug Report

If you haven't found any related issues in the previous step, create a new issue on the repository, using the Bug Report template. When you are creating a bug report, please include as many details as possible. Fill out the required fields in the template, the information it asks for helps resolve issues faster.


## Making A Feature Request

This section guides you through submitting a new feature suggestion for Objectiv, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion and find related suggestions.


### Before Submitting A Feature Request

Before creating a feature request, please check the list below, as you might find out that you don't need to create one:

1. Use the latest version of Objectiv to check if the request has already been made.
2. Perform a cursory search to see if the request has already been made. If it has, either:
    1. Vote on it using GitHub Reactions; or
    2. Add any relevant comments to the existing issue instead of opening a new one.


### Submitting A Feature Request

If you haven’t found any related issues in the previous step, create a new issue on the repository, using the Feature Request template. When you are creating a Feature Request report, please include as many details as possible. Fill out the required fields in the template, the information it asks for helps us understand and prioritize the issue.


## Finding An Issue To Work On

We use GitHub [Issues](https://github.com/objectiv/objectiv-analytics/issues) and [Pull Requests](https://github.com/objectiv/objectiv-analytics/pulls) to track the work associated with the project. That's where you can find things to work on.

We make use of issue labels to designate the priority, status and beginner-friendliness of various issues. We have a standard set of labels, 
fully documented below. Here are some of the ones that are most relevant to finding a good issue or PR to work on:

**Issues available for community contribution**:

* _Status: Help Wanted_: Open to participation from the community. Not necessarily beginner-friendly.
* _Status: Good First Issue_: Open to participation from the community, and friendly towards new contributors.

You do not need our permission to work on one of these issues. You may work on an issue labeled 'Good First Issue' even if it's not your first issue.

**Issues not ready for work**:

* _Status: Blocked_: Blocked by something else that needs to be done first.
* _Status: Wontfix_: Decided not to fix for now, either because it works as intended or for some other reason.
* _Status: Duplicate_: Duplicate of other issue/PR, i.e. has been reported before.
* _Status: Invalid_: Not valid, e.g. user error
* _Status: Awaiting Triage_: Has not yet been triaged by a maintainer.
* _Status: More Information Needed_: More information needs to be collected (e.g. steps to reproduce).

Do not work on these.

**Issues without any of the above labels**: 

These issues may or may not be open for contribution. Please add a comment asking one of the maintainers to triage the issue and label it as appropriate.

Once you've found an issue you'd like to work on, please comment on it and say you're working on that issue. This is to avoid conflicts with others also working on the issue.


## Setting Up Your Environment And Running Tests

Please refer to our [README](https://github.com/objectiv/objectiv-analytics/blob/main/README.md), or the [Objectiv Documentation](https://objectiv.io/docs/) for help on getting the project up-and-running, and on how to write & run tests for your contribution.


## Submitting A Contribution


### If You Are A First-Time Contributor

Feel free to ask for help on the respective GitHub issue; everyone is a beginner at first. You can learn how to open a Pull Request from this free series: [How to Contribute to an Open Source Project on GitHub](https://kcd.im/pull-request), or from [FirstTimersOnly](https://www.firsttimersonly.com/).


### WIP PRs

Contributors can ask for a review on any PR, without this PR being done and/or ready to merge. Asking for a review is asking for feedback on the implementation, not approval of the PR.


### Submitting A PR

Once you’re ready to submit your contribution, please open up a [GitHub Pull Request](https://github.com/objectiv/objectiv-analytics/pulls) with a clear list of:

1. What you've done.
2. Why you've done it.
3. Links to any Issues you're solving with this.
4. Pointers on how to test the changes.

When you send a pull request, we highly appreciate including tests. We can always use more test coverage. 

Please also follow our coding conventions and make sure all of your commits are atomic (one feature per commit).


### My PR Was Submitted

After you submit your PR, please verify that all status checks are passing, and fix any issues that may have arisen. 

Once all status checks have passed, wait for code review by the maintainers, and address any issues raised as soon as you can. Reviewer(s) may ask you to complete additional code changes, tests, or other changes before your PR can ultimately be accepted. 

Maintainers generally pick up PRs within 48h on weekdays, but in some cases this may take a bit longer.


### My PR Was Merged

First off: a big thank you for contributing! 

We like to recognize all contributors to the project, by adding your GitHub name in the humans.txt file in the repository. If you do not want to be added, or if we forget to add you within 24 hours of merging your contribution, please feel free to ping us in your PR!

## Issue And Pull Request Labels

This section lists the GitHub Labels we use to help us track and manage Issues and Pull Requests. The Labels are loosely grouped by their purpose, but it's not required that every issue has a Label from every group or that an issue can't have more than one Label from the same group.

You can use the filters in the GitHub [Issues](https://github.com/objectiv/objectiv-analytics/issues) and [Pull Request](https://github.com/objectiv/objectiv-analytics/pulls) sections to find the ones you're interested in.

Please open an Issue if you have suggestions for new Labels.

The Labels we use:

* Type: 
    * _Epic_: Collection of User Stories and Bugs.
    * _Story_: User Story.
    * _Enhancement_: Small improvement that is not a feature or bug.
    * _Bug_: Broken functionality
    * _Task_: Small item of work that is not functionality
* Area: 
    * _Taxonomy_: The Objectiv Taxonomy.
    * _Tracker_: Product trackers.
    * _Backend_: The Backend.
    * _Modeling_: DS tools & Models.
    * _Project_: Overall Project related.
* Priority: Based on impact, a product of urgency (e.g. occurrence) and importance.
    * _1. Critical_: High Urgency and High Importance.
    * _2. High_: High Urgency or Importance.
    * _3. Medium_: Medium Urgency or Importance.
    * _4. Low_: Low Urgency and Importance.
* Status: 
    * _Blocked_: Blocked by something else that needs to be done first.
    * _Awaiting Triage_: Needs triaging from core team.
    * _More Information Needed_: More information needs to be collected (e.g. steps to reproduce).
    * _Duplicate_: Duplicate of other issue/PR, i.e. has been reported before.
    * _Wontfix_: Decided not to fix for now, either because it works as intended or for some other reason.
    * _Invalid_: Not valid, e.g. user error.
* Community:
    * _Status: Help Wanted_: Open to participation from the community, not necessarily beginner-friendly.
    * _Status: Good First Issue_: Open to participation from the community, and friendly towards new contributors.