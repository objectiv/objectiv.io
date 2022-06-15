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

require('@cypress/snapshot').register()
declare namespace Cypress {
  interface Chainable<Subject> {
    snapshot(options?: { name?:string, json?:boolean }): Chainable<Subject>
  }
}

Cypress.Commands.add('objectivGetEvents', () => cy.window().its('objectiv.EventRecorder.events'))
Cypress.Commands.add('objectivClearEvents', () => {
  cy.window().its('objectiv.EventRecorder').invoke('clear');
  cy.objectivGetEvents().should('have.length', 0);
})
declare namespace Cypress {
  interface Chainable<Subject> {
    objectivClearEvents(): Chainable<Subject>,
    objectivGetEvents(): Chainable<Subject>,
  }
}

Cypress.Commands.add('setCookieConsent', () => {
  cy.setCookie('CookieConsent', '{stamp:%27JXI3Xxh26F+U9VRdt9HagBOrCOCJ/LsqtNDKMIAK0Yaz+l1xzCJH0Q==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cver:1%2Cutc:1655213975331%2Cregion:%27nl%27}');
  cy.getCookie('CookieConsent').should('exist');
})
declare namespace Cypress {
  interface Chainable<Subject> {
    setCookieConsent(): Chainable<Subject>,
  }
}

Cypress.Commands.add('preventDefault', { prevSubject: true }, (subject) => {
  return cy.wrap(subject).invoke('attr', 'onclick', 'event.preventDefault()')
})
declare namespace Cypress {
  interface Chainable<Subject> {
    preventDefault(): Chainable<Subject>,
  }
}
