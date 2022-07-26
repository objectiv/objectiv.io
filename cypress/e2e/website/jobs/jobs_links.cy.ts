describe('Jobs: Content links', () => {
  it('Should track PressEvents on links in content on Jobs page', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit jobs page
    cy.visit('/jobs');

    // We don't want any anchor to actually navigate. See support/commands.ts for how `preventDefault` has been made
    cy.get('a').contains('site').preventDefault().click();
    cy.get('a').contains('docs').preventDefault().click();
    cy.get('a').contains('repo').preventDefault().click();
    cy.get('a').contains('open model hub').preventDefault().click();
    cy.get('a').contains('open analytics taxonomy').preventDefault().click();
    cy.get('a').contains('Fly Ventures').preventDefault().click();
    cy.get('a').contains('LocalGlobe').preventDefault().click();
    cy.get('a').contains("we'd love to hear from you").preventDefault().click();

    // Verify recorded events
    cy.objectiv().filterEvents('PressEvent').snapshotEvents();
  })
})
