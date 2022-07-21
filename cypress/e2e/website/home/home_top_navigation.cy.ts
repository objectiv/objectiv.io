describe('Home: top navigation', () => {
  it('Should track PressEvents on navigation items', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://api.github.com/repos/objectiv/objectiv-analytics', { fixture: 'github.json' }).as('github');
    cy.intercept('https://consentcdn.cookiebot.com/*', { fixture: 'cookiebot.json' }).as('cookiebot');
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit home page
    cy.visit('/');

    // We don't want any anchor to actually navigate. See support/commands.ts for how `preventDefault` has been made
    cy.get('a.navbar__brand').preventDefault().click();
    cy.get('a').contains('About us').preventDefault().click();
    cy.get('a').contains('Blog').preventDefault().click();
    cy.get('a').contains('Jobs').preventDefault().click();
    cy.get('a').contains('FAQ').preventDefault().click();
    cy.get('a').contains('Docs').preventDefault().click();
    cy.get('a.navGitHub').preventDefault().click();
    cy.get('a.navSlack').preventDefault().click();
    cy.get('a.navTwitter').preventDefault().click();
    cy.get('a.navEmail').preventDefault().click();

    // Verify recorded events
    cy.objectiv().filterEvents('PressEvent').snapshotEvents();
  })
})
