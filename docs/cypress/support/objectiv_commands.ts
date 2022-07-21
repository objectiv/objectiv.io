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