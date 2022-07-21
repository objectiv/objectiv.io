describe('Home: solutions', () => {
  it('Should track PressEvents on Solution buttons leading to docs', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://api.github.com/repos/objectiv/objectiv-analytics', { fixture: 'github.json' }).as('github');
    cy.intercept('https://consentcdn.cookiebot.com/*', { fixture: 'cookiebot.json' }).as('cookiebot');
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit home page
    cy.visit('/');

    // We don't want any anchor to actually navigate. See support/commands.ts for how `preventDefault` has been made
    cy.get('div[class*="solutionArea"] a.button').contains('Docs - Taxonomy').preventDefault().click();
    cy.get('div[class*="solutionArea"] a.button').contains('Docs - Tracking').preventDefault().click();
    cy.get('div[class*="solutionArea"] a.button').contains('Docs - Open Model Hub').preventDefault().click();
    cy.get('div[class*="solutionArea"] a.button').contains('Docs - Modeling').preventDefault().click();

    cy.get('div[class*="taxonomy"] a.button').contains('Docs - Taxonomy').preventDefault().click();

    // Verify recorded events
    cy.objectiv().filterEvents('PressEvent').snapshotEvents();
  })
})
