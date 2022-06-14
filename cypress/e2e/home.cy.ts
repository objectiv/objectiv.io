Cypress.Commands.add('interceptThirdParties', () => {
  cy.intercept('https://api.github.com/repos/objectiv/objectiv-analytics', { fixture: 'github.json' }).as('github');
  cy.intercept('https://vimeo.com/api/oembed.json*', { fixture: 'vimeo.json' }).as('vimeo');
  cy.intercept('https://consentcdn.cookiebot.com/*', { fixture: 'cookiebot.json' }).as('cookiebot');
  cy.intercept('http://localhost:8081*', {status: 200}).as('collector');
})

Cypress.Commands.add('waitForThirdParties', () => {
  cy.wait('@github');
  cy.wait('@vimeo');
})

declare namespace Cypress {
  interface Chainable<Subject> {
    interceptThirdParties(): Chainable<Subject>
    waitForThirdParties(): Chainable<Subject>
  }
}

describe('Home Page', () => {
  it('Should not track any events if CookieConsent cookie is not present', () => {
    // Intercept async calls so we may stub them
    cy.interceptThirdParties();

    // Verify that CookieConsent does not exist
    cy.getCookie('CookieConsent').should('not.exist');

    // Navigate to the home page
    cy.visit("/");

    // Wait for both GitHub and Vimeo calls
    cy.waitForThirdParties();

    // Verify that the Cookie banner has been shown
    cy.contains('This website uses cookies');

    // Verify that no Events have been recorded, since Cookie consent has not been given yet
    cy.objectivEvents().should('have.length', 0);
  })

  it('Should track events when CookieConsent cookie is present', () => {
    // Intercept async calls so we may stub them
    cy.interceptThirdParties();

    // Set CookieConsent
    cy.setCookie('CookieConsent', '{stamp:%27JXI3Xxh26F+U9VRdt9HagBOrCOCJ/LsqtNDKMIAK0Yaz+l1xzCJH0Q==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cver:1%2Cutc:1655213975331%2Cregion:%27nl%27}');
    cy.getCookie('CookieConsent').should('exist');

    // Visit home page
    cy.visit('/');

    // Scroll all the way to the bottom
    cy.get('.footer__copyright').scrollIntoView();

    // Wait for all async
    cy.waitForThirdParties();

    // This time three Events should have been triggered
    cy.objectivEvents().should('have.length', 3);

    // Check events against snapshot as well, to ensure their contexts are correct
    cy.verifyObjectivSnapshot();
  })
})