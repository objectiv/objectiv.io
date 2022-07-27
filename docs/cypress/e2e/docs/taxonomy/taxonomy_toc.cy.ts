describe('Docs Taxonomy: TOC', () => {
  it('Should track PressEvents on TOC items', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit home page
    cy.visit('/taxonomy');

    // We don't want any anchor to actually navigate. See support/commands.ts for how `preventDefault` has been made
    cy.get('a.table-of-contents__link').contains('Taxonomy Reference').preventDefault().click();

    // Verify recorded events
    cy.objectiv().filterEvents('PressEvent').snapshotEvents();
  })
})
