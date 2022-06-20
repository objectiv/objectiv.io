/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// Import snapshot plugin
require('@cypress/snapshot').register()
declare namespace Cypress {
  interface Chainable<Subject> {
    snapshot(options?: { name?:string, json?:boolean }): Chainable<Subject>
  }
}

type Context = {
  _type: string,
  id: string,
}

type RecordedEvent = {
  _type: string,
  id: string,
  location_stack: Context[],
  global_contexts: Context[]
}

type RecordedEventPredicate = (event: RecordedEvent) => boolean;

class RecordedEvents {
  /**
   * Filters events by Event name (_type attribute). It supports querying by:
   *
   * - a single event name, e.g. `PressEvent`
   * - a list of event names, e.g. [`PressEvent`, `ApplicationLoadedEvent`]
   * - a predicate, for advanced operations, e.g. (event) => boolean
   *
   * `filter` returns a new instance of RecordedEvents for further chaining.
   */
  static filter(events: RecordedEvent[], options: unknown) {
    console.log('filter')
    if (typeof options === 'string') {
      console.log('string', events.length, options, events.filter((event) => event._type === options))
      return events.filter((event) => event._type === options);
    }

    if (Array.isArray(options) && options.length) {
      console.log('array')
      return events.filter((event) => options.includes(event._type));
    }

    if (options instanceof Function) {
      console.log('predicate')
      return events.filter(options as RecordedEventPredicate);
    }

    throw new Error(`Invalid event filter options: ${JSON.stringify(options)}`);
  }

  // /**
  //  * Filters events by their LocationContext's name (_type attribute), name and id or just name.
  //  * `withLocationContext` returns a new instance of RecordedEvents for further chaining.
  //  */
  // withLocationContext(name: string, id?: string) {
  //   if (typeof name !== 'string') {
  //     throw new Error(`Invalid location context filter name option: ${JSON.stringify(name)}`);
  //   }
  //   if (id !== undefined && typeof id !== 'string') {
  //     throw new Error(`Invalid location context filter id option: ${JSON.stringify(id)}`);
  //   }
  //
  //   return new RecordedEvents(this.events.filter((event) => hasContext(event.location_stack, name, id)));
  // }
  //
  // /**
  //  * Filters events by their GlobalContext's name (_type attribute), name and id or just name.
  //  * `withGlobalContext` returns a new instance of RecordedEvents for further chaining.
  //  */
  // withGlobalContext(name: string, id?: string) {
  //   if (typeof name !== 'string') {
  //     throw new Error(`Invalid global context filter name option: ${JSON.stringify(name)}`);
  //   }
  //   if (id !== undefined && typeof id !== 'string') {
  //     throw new Error(`Invalid location context filter id option: ${JSON.stringify(id)}`);
  //   }
  //
  //   return new RecordedEvents(this.events.filter((event) => hasContext(event.global_contexts, name, id)));
  // }
}

/**
 * Helper private predicate to match a Context in the given list of contexts by name and id or just name.
 */

// FIXME improve this to support the latest EventRecorder API
// Custom commands for interacting with EventRecorder
type objectivGetEventsFilterOption = ((event) => boolean) | string[] | string;
Cypress.Commands.add('objectivGetEvents', () => {
  // todo make shortcut to get TrackerRepository
  // todo make shortcut to get EventRecorder
  return cy.window().its('objectiv.TrackerRepository').invoke('waitForAllQueues', { timeoutMs: 10000 }).then(() => {
    return cy.window().its('objectiv.devTools.EventRecorder._events');
  })
})
Cypress.Commands.add('objectivFilterEvents', { prevSubject: true }, (events:RecordedEvent[], filter?: objectivGetEventsFilterOption) => {
  return cy.wrap(RecordedEvents.filter(events, filter));
})
Cypress.Commands.add('objectivClearEvents', () => {
  cy.window().its('objectiv.devTools.EventRecorder').invoke('clear');
  cy.objectivGetEvents().should('have.length', 0);
})
declare namespace Cypress {
  interface Chainable<Subject> {
    objectivClearEvents(): Chainable<Subject>,
    objectivGetEvents(): Chainable<Subject>,
    objectivFilterEvents(filter?: objectivGetEventsFilterOption): Chainable<Subject>,
  }
}

// Custom command to set a fake cookie for Cookiebot
Cypress.Commands.add('setCookieConsent', () => {
  cy.setCookie('CookieConsent', '{stamp:%27JXI3Xxh26F+U9VRdt9HagBOrCOCJ/LsqtNDKMIAK0Yaz+l1xzCJH0Q==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cver:1%2Cutc:1655213975331%2Cregion:%27nl%27}');
  cy.getCookie('CookieConsent').should('exist');
})
declare namespace Cypress {
  interface Chainable<Subject> {
    setCookieConsent(): Chainable<Subject>,
  }
}

// Custom command chainable to DOM clickable elements. It prevents their default behavior, e.g. navigation, redirects.
Cypress.Commands.add('preventDefault', { prevSubject: 'element' }, (subject) => {
  return cy.wrap(subject).invoke('attr', 'onclick', 'event.preventDefault()');
})
declare namespace Cypress {
  interface Chainable<Subject> {
    preventDefault(): Chainable<Subject>,
  }
}
