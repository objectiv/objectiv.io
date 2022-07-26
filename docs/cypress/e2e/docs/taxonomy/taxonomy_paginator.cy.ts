describe('Docs Taxonomy: Overview paginator', () => {
  it('Should track PressEvents on the paginator in the page', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit blog page
    cy.visit('/taxonomy');

    cy.get('nav.pagination-nav a.pagination-nav__link--next').click().then($click => {
      cy.wait(500);
      cy.get('nav.pagination-nav a.pagination-nav__link--prev').preventDefault().click({ multiple: true });
      cy.objectiv().filterEvents('PressEvent').snapshotEvents();
    });
  })
})
