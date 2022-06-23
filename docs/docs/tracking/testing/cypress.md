---
sidebar_position: 3
title: Cypress
---

EventRecorder can be used during development in the Browser's console, as a debugging tool, but it's even more useful when paired with a testing framework.

Let's have look at how to set things up with [Cypress](https://www.cypress.io/).

:::info
We picked Cypress for this example due to its popularity, but the same methodology can easily be applied to other e2e frameworks, such as [Nightwatch](https://nightwatch.io/) or [WebdriverIO](https://webdriver.io/). Or even to unit / component testing with tools like [Jest](https://jestjs.io/).

In general, choosing a tool that supports snapshot-testing makes things a bit easier to configure, but it's definitely not a strict requirement.
:::

>**Disclaimer**   
> We are not going to dive too deep into the installation and configuration process of Cypress.  
> Check out Cypress' [Getting Started](https://docs.cypress.io/guides/getting-started/installing-cypress) for a much more thorough guide on that.

## Install dependencies
To begin we need to make sure we have Cypress in our project. And since we want to do snapshot-testing, let's pick a library for that as well:

```shell
yarn add cypress @cypress/snapshot --dev
```

> **NOTE** [@cypress/snapshot](https://github.com/cypress-io/snapshot) will automatically create a `snapshots.js` file at the root of your project. If that doesn't suit your requirements, [check their docs](https://github.com/cypress-io/snapshot#userelativesnapshots) on how to set things up with relative snapshots, or feel free to use a different plugin. 
 
## Optional: package.json scripts
This step is optional, but makes opening and running Cypress a bit easier. Just two scripts to add to `package.json`.

```text title=package.json
"scripts": {
  … 
  "cypress:open": "cypress open",
  "cypress:run": "cypress run",
  …
}
```

## Configure Cypress
The first time running Cypress, it will open LaunchPad to further guide the user through the configuration process.

```shell
yarn run cypress open

# or, if you customized your package.json scripts

yarn cypress:open
```

Simply follow Cypress' docs on how to [choose E2E Testing in Cypress LaunchPad](https://docs.cypress.io/guides/getting-started/opening-the-app#The-Launchpad).  

When finished Cypress will have automatically generated the `cypress.config.ts` configuration file and a `cypress` folder with some support scripts and examples. 

Let's tweak a few things in `cypress.config.ts`. Here is our configuration:
```ts title=cypress.config.ts
import { defineConfig } from "cypress";

export default defineConfig({
  userAgent: "mocked-user-agent",     
  video: false,                       
  e2e: {
    baseUrl: "http://localhost:3000",  
  },
});
```

A few notes:
- We stub `userAgent` with a fixed value because they contain Cypress and Browser versions. We don't want those ending up in our snapshots ([HttpContext](/taxonomy/reference/global-contexts/HttpContext.md)).
- Videos are not so useful in the context of event tracking, on top of that disabling them speeds up things a bit.
- `baseUrl` is the development url of our test Application. This will make `cy.visit` commands shorter and easier to maintain.

## Enable Snapshot Plugin
The snapshot plugin we installed above, needs to be required in `cypress/support/commands.ts`. 
```ts title=cypress/support/commands.ts
require('@cypress/snapshot').register()

declare namespace Cypress {
  interface Chainable<Subject> {
    snapshot(options?: { name?:string, json?:boolean }): Chainable<Subject>
  }
}
```

## Custom cypress commands
To make it easier to interact with [EventRecorder](/tracking/testing/event-recorder.md) we created a set of custom commands. 

:::info
We may release these as a Cypress plugin eventually. Meanwhile, feel free to use, tweak and customize as needed.
:::

We added all of our commands in a separate file `cypress/support/objectiv_commands.ts`. Here is the full content: 

```ts title=cypress/support/objectiv_commands.ts
/**
 * Custom commands to interact with Objectiv EventRecorder
 */

// Subject of all other commands. Internally, also waits for the Trackers to be idle.
Cypress.Commands.add('objectiv', () => {
  return cy.window().its('objectiv.TrackerRepository')
    .invoke('waitForAllQueues', { timeoutMs: 10000 })
    .then(() => {
      return cy.window().its('objectiv.devTools.EventRecorder.events')
    })
})

// Filter events by their names, a list of their names or a predicate.
Cypress.Commands.add('filterEvents', { prevSubject: true }, (events, options) => {
  return events.filter(options);
});

// Filter events by a Global Context Name and, optionally, its id.
Cypress.Commands.add('withGlobalContext', { prevSubject: true }, (events, name, id) => {
  return events.withGlobalContext(name, id);
});

// Filter events by a Location Context Name and, optionally, its id.
Cypress.Commands.add('withLocationContext', { prevSubject: true }, (events, name, id) => {
  return events.withLocationContext(name, id);
});

// Takes a snapshot of the list of recorded events and errors using `@cypress/snapshot`.
Cypress.Commands.add('snapshotEvents', { prevSubject: true }, ({ events }, options) => {
  cy.window().its('objectiv.devTools.EventRecorder.errors').then(errors => {
    return cy.wrap({ errors, events }).snapshot(options);
  })
});

// Deletes all recorded events.
Cypress.Commands.add('clearEvents', { prevSubject: true }, () => {
  cy.window().its('objectiv.devTools.EventRecorder').invoke('clear');
  cy.objectiv().its('events').should('have.length', 0);
})

// Start recording events, if EventRecorder was stopped.
Cypress.Commands.add('startRecordingEvents', { prevSubject: true }, () => {
  cy.window().its('objectiv.devTools.EventRecorder').invoke('start');
})

// Stop recording events, if EventRecorder was running.
Cypress.Commands.add('stopRecordingEvents', { prevSubject: true }, () => {
  cy.window().its('objectiv.devTools.EventRecorder').invoke('stop');
})

declare namespace Cypress {
  interface Chainable<Subject> {
    objectiv(): Chainable<Subject>,
    clearEvents(): Chainable<Subject>,
    filterEvents(options?: ((event: unknown) => boolean) | string[] | string): Chainable<Subject>,
    snapshotEvents(options?: { name?: string, json?: boolean }): Chainable<Subject>,
    startRecordingEvents(): Chainable<Subject>,
    stopRecordingEvents(): Chainable<Subject>,
    withGlobalContext(name: string, id?: string): Chainable<Subject>,
    withLocationContext(name: string, id?: string): Chainable<Subject>,
  }
}
```

Finally, the new commands can be used by requiring them in `cypress/support/e2e.ts`, like so:
```ts title=cypress/support/e2e.ts
import './commands'
import './objectiv_commands'
```

:::info  
As you may have already noticed, most commands are very simple and, for the most part, simply wrap around devTools like [EventRecorder](/tracking/testing/event-recorder.md) and TrackerRepository.  

A few have different names to avoid clashes with Cypress native ones.
:::

## Test examples
We are now ready for writing some tests.

### Verify `ApplicationLoadedEvent` 
This event is triggered automatically by all SDKs. It's a good starting point to check whether the Tracker initializes correctly.

Let's create a new test suite in the `cypress/e2e` directory and name it something like `ApplicationLoadedEvent.cy.ts`.   

```ts title=cypress/e2e/ApplicationLoadedEvent.cy.ts
describe('ApplicationLoadedEvent', () => {
  it('should track once', () => {
    // First we visit our home page
    cy.visit('/');

    // Then we wait for an Element to be visibile to make sure the DOM finished loading
    cy.get('header').should('be.visible');

    // Get events, filter what we are looking for and snapshot the resulting list and errors
    cy.objectiv().filterEvents('ApplicationLoadedEvent').snapshotEvents();
  })
})
```

The following snapshot will be produced:
```json title=snapshots.js
{
  "ApplicationLoadedEvent": {
    "should track once": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "ApplicationLoadedEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "home"
              }
            ],
            "global_contexts": [
              {
                "_type": "HttpContext",
                "id": "http_context",
                "referrer": "",
                "user_agent": "mocked-user-agent",
                "remote_address": null
              },
              {
                "_type": "ApplicationContext",
                "id": "reactsdk-next-react-18-cra"
              },
              {
                "_type": "PathContext",
                "id": "http://localhost:3000/"
              }
            ],
            "id": "ApplicationLoadedEvent#1"
          }
        ]
      }
    }
  }
}
```

:::tip
Always review carefully snapshots when they get created for the first time:  
- Verify whether the Location Stack is as expected, especially for InteractiveEvents
- Check Global Contexts, like PathContext, to make sure automatic tracking is working as intended 
- Make sure the error snapshot is an empty array. This will safeguard against validation / collision regressions.
:::

### Verifying Visibility Events
Here is another example where we want to ensure a toggleable content triggers [VisibleEvent](/taxonomy/reference/events/VisibleEvent.md) and [HiddenEvent](/taxonomy/reference/events/HiddenEvent.md) whenever it's displayed or hidden.

As before, let's create a new test suite in the `cypress/e2e` directory and name it something like `VisibilityEvents.cy.ts`.   

```ts title=cypress/e2e/VisibilityEvents.cy.ts
describe('VisibilityEvents', () => {
  it('should track VisibleEvent and Hidden Event', () => {
    // First we visit our home page
    cy.visit('/');

    // Retrieve the toggle button and click it
    cy.get('button').contains('Toggle').click();
    
    // Retrieve the toggleable content div and verify that it's been shown 
    cy.get('div').contains('now you see me...').should('exist');

    // Snapshot all VisibleEvents, we can assign a name to it as well 
    cy.objectiv().filterEvents('VisibleEvent').snapshotEvents({ name: 'visible event' });

    // We are going to continue testing in the same suite, reset the EventRecorder 
    cy.objectiv().clearEvents();

    // Click the toggle button again
    cy.get('button').contains('Toggle').click();
    
    // This time around we should not be able to find the toggleable div
    cy.get('div').contains('now you see me...').should('not.exist');
    
    // Snapshot all HiddenEvents, different name
    cy.objectiv().filterEvents('HiddenEvent').snapshotEvents({ name: 'hidden event' });
  })
})
```

The following snapshot will be produced:
```json title=snapshots.js
{
  "VisibilityEvents": {
    "should track VisibleEvent and Hidden Event": {
      "visible event": {
        "errors": [],
        "events": [
          {
            "_type": "VisibleEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "home"
              },
              {
                "_type": "ExpandableContext",
                "id": "now you see me..."
              }
            ],
            "global_contexts": [
              {
                "_type": "HttpContext",
                "id": "http_context",
                "referrer": "",
                "user_agent": "mocked-user-agent",
                "remote_address": null
              },
              {
                "_type": "ApplicationContext",
                "id": "reactsdk-next-react-18-cra"
              },
              {
                "_type": "PathContext",
                "id": "http://localhost:3000/"
              }
            ],
            "id": "VisibleEvent#1"
          }
        ]
      },
      "hidden event": {
        "errors": [],
        "events": [
          {
            "_type": "HiddenEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "home"
              },
              {
                "_type": "ExpandableContext",
                "id": "now you see me..."
              }
            ],
            "global_contexts": [
              {
                "_type": "HttpContext",
                "id": "http_context",
                "referrer": "",
                "user_agent": "mocked-user-agent",
                "remote_address": null
              },
              {
                "_type": "ApplicationContext",
                "id": "reactsdk-next-react-18-cra"
              },
              {
                "_type": "PathContext",
                "id": "http://localhost:3000/"
              }
            ],
            "id": "HiddenEvent#1"
          }
        ]
      }
    }
  }
}
```

:::tip
In theory one could simply snapshot all the events of a whole page by using:
```js
  cy.objectiv().snapshotEvents();
```

In reality, most Applications will have asynchronous code resolving at unpredictable moments and thus big snapshots 
like the one above wouldn't be very reliable. They may or may not include the same events every time. 

Filtering out sessions and snapshotting as little as possible is preferable. It forces the developer to review and evaluate one concern at the time, which is often easier, and required anyway, when dealing with interactions. 
:::

## Automate with a GitHub Action
Check out [Cypress GitHub Actions Documentation](https://docs.cypress.io/guides/continuous-integration/github-actions) for a detailed guide on how to set these up in a variety of cases.  

Here is an example of a workflow we ended up with for one of our Applications:
```yaml
name: E2E Tests

on: [push]

jobs:
  cypress-run:
    runs-on: ubuntu-20.04
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Install dependencies
        run: yarn install

      - name: Run Cypress tests
        uses: cypress-io/github-action@v4
        with:
          browser: chrome
          install: false
          start: yarn start
          wait-on: 'http://localhost:3000'

```

