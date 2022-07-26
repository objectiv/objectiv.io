describe('Home: without cookie consent', () => {
  it('Should not track any events', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://api.github.com/repos/objectiv/objectiv-analytics', { fixture: 'github.json' }).as('github');
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Verify that CookieConsent cookie does not exist
    cy.getCookie('CookieConsent').should('not.exist');

    // Visit home page
    cy.visit("/");

    // Verify that the Cookie banner has been shown
    cy.contains('We use cookies to set your preferences and understand how visitors use the website.');

    // Verify recorded events
    cy.objectiv().its('events').should('have.length', 0);
  })
})
