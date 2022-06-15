describe('Home: bottom navigation', () => {
  it('Should track PressEvents on navigation items', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://api.github.com/repos/objectiv/objectiv-analytics', { fixture: 'github.json' }).as('github');
    cy.intercept('https://vimeo.com/api/oembed.json*', { statusCode: 404 }).as('vimeo');
    cy.intercept('https://consentcdn.cookiebot.com/*', { fixture: 'cookiebot.json' }).as('cookiebot');
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit home page
    cy.visit('/');

    // Scroll to footer
    cy.get('.footer').scrollIntoView();

    // Wait for star us notification to show up, it has an animation of 600ms
    cy.wait(1000);
    cy.get('div').contains('Star us on GitHub').should('be.visible');

    // Clear recorded events, we don't care about ApplicationLoadedEvent and others
    cy.objectivClearEvents();

    // We don't want any anchor to actually navigate. See support/commands.ts for how `preventDefault` has been made
    cy.get('a').contains('Privacy Policy').preventDefault().click();
    cy.get('a').contains('Cookies').preventDefault().click();

    // Verify recorded events, we add 1 to the list of selectors to account for ApplicationLoadedEvent
    cy.objectivGetEvents().should('have.length', 2).snapshot();
  })
})