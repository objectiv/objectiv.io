describe('Docs home: without cookie consent', () => {
  it('Should not track any events', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://consentcdn.cookiebot.com/*', { fixture: 'cookiebot.json' }).as('cookiebot');
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Verify that CookieConsent cookie does not exist
    cy.getCookie('CookieConsent').should('not.exist');

    // Visit home page
    cy.visit("/docs");

    // Verify that the Cookie banner has been shown
    cy.contains('This website uses cookies');
    cy.contains('Powered by Cookiebot');

    // Verify recorded events
    cy.objectiv().its('events').should('have.length', 0);
  })
})
