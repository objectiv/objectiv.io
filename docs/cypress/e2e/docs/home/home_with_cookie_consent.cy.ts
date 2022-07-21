describe('Docs home: with cookie consent', () => {
  it('Should track ApplicationLoadedEvent', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://consentcdn.cookiebot.com/*', { fixture: 'cookiebot.json' }).as('cookiebot');
    cy.intercept('http://localhost:8081*', {status: 200}).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit home page
    cy.visit('/');

    // Verify recorded events
    cy.objectiv().filterEvents(['ApplicationLoadedEvent']).snapshotEvents();
  })
})
