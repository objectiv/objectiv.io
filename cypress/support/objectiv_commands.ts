/**
 * Custom commands to interact with Objectiv globals
 */

// Initialization command, waits for all Trackers' queues to be empty, up to 10s, then returns a list of RecordedEvents
Cypress.Commands.add('objectiv', () => {
  return cy.window().its('objectiv.TrackerRepository')
    .invoke('waitForAllQueues', { timeoutMs: 10000 })
    .then(() => {
      return cy.window().its('objectiv.devTools.EventRecorder.events')
    })
})

// RecordedEvents API wrappers
Cypress.Commands.add('filterEvents', { prevSubject: true }, (recordedEvents, options) => {
  return recordedEvents.filter(options);
});

Cypress.Commands.add('withGlobalContext', { prevSubject: true }, (recordedEvents, name, id) => {
  return recordedEvents.withGlobalContext(name, id);
});

Cypress.Commands.add('withLocationContext', { prevSubject: true }, (recordedEvents, name, id) => {
  return recordedEvents.withLocationContext(name, id);
});

Cypress.Commands.add('snapshotEvents', { prevSubject: true }, ({ events }, options) => {
  cy.window().its('objectiv.devTools.EventRecorder.errors').then(errors => {
    return cy.wrap({ errors, events }).snapshot(options);
  })
});

// Event Recorder API wrappers
Cypress.Commands.add('clearEvents', { prevSubject: true }, () => {
  cy.window().its('objectiv.devTools.EventRecorder').invoke('clear');
  cy.objectiv().its('events').should('have.length', 0);
})

Cypress.Commands.add('startRecordingEvents', { prevSubject: true }, () => {
  cy.window().its('objectiv.devTools.EventRecorder').invoke('start');
})

Cypress.Commands.add('stopRecordingEvents', { prevSubject: true }, () => {
  cy.window().its('objectiv.devTools.EventRecorder').invoke('stop');
})

declare namespace Cypress {
  interface Chainable<Subject> {
    objectiv(): Chainable<Subject>,
    clearEvents(): Chainable<Subject>,
    filterEvents(options?: ((event) => boolean) | string[] | string): Chainable<Subject>,
    snapshotEvents(options?: { name?: string, json?: boolean }): Chainable<Subject>,
    startRecordingEvents(): Chainable<Subject>,
    stopRecordingEvents(): Chainable<Subject>,
    withGlobalContext(name: string, id?: string): Chainable<Subject>,
    withLocationContext(name: string, id?: string): Chainable<Subject>,
  }
}
