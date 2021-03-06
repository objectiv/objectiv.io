describe('Blog: Overview paginator', () => {
  it('Should track PressEvents on the paginator in the Blog overview page', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit blog page
    cy.visit('/blog');

    cy.get('nav.pagination-nav a').contains('Older Entries').preventDefault().click().then($click => {
      // Visit second page
      cy.wait(1000);
      cy.visit('/blog/page/2');
      cy.get('nav.pagination-nav a').contains("Newer Entries").preventDefault().click({ multiple: true });
      cy.objectiv().filterEvents('PressEvent').snapshotEvents();
    });
  })
})
