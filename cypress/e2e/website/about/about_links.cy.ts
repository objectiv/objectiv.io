describe('About: Content links', () => {
  it('Should track PressEvents on links in content on About page', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://consentcdn.cookiebot.com/*', { fixture: 'cookiebot.json' }).as('cookiebot');
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit about page
    cy.visit('/about');

    // We don't want any anchor to actually navigate. See support/commands.ts for how `preventDefault` has been made
    cy.get('a').contains('Fly Ventures').preventDefault().click();
    cy.get('a').contains('LocalGlobe').preventDefault().click();
    cy.get('a').contains("we're hiring a Data Scientist. Join us!").preventDefault().click();

    // Verify recorded events
    cy.objectiv().filterEvents('PressEvent').snapshotEvents();
  })
})
