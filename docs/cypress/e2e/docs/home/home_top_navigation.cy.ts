describe('Docs home: top navigation', () => {
  it('Should track PressEvents on navigation items', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit home page
    cy.visit('/');

    // We don't want any anchor to actually navigate. See support/commands.ts for how `preventDefault` has been made
    cy.get('nav.navbar--fixed-top a.navbar__brand').preventDefault().click();
    cy.get('nav.navbar--fixed-top a').contains('Tracking').preventDefault().click();
    cy.get('nav.navbar--fixed-top a').contains('Modeling').preventDefault().click();
    cy.get('nav.navbar--fixed-top a').contains('Taxonomy').preventDefault().click();
    cy.get('nav.navbar--fixed-top a.navGitHub').preventDefault().click();
    cy.get('nav.navbar--fixed-top a.navSlack').preventDefault().click();
    cy.get('nav.navbar--fixed-top a.navTwitter').preventDefault().click();
    cy.get('nav.navbar--fixed-top a.navHomepage').preventDefault().click();

    // Verify recorded events
    cy.objectiv().filterEvents('PressEvent').snapshotEvents();
  })
})
