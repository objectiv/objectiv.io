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

    // We don't want any anchor to actually navigate. See support/commands.ts for how `preventDefault` has been made
    cy.get('a').contains('Privacy Policy').preventDefault().click();
    cy.get('a').contains('Cookies').preventDefault().click();

    // Verify recorded events
    cy.objectivGetEvents().objectivFilterEvents('PressEvent').snapshot();
  })
})