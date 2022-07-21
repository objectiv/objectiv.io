describe('Blog: Overview paginator', () => {
  it('Should track PressEvents on the paginator in the Blog overview page', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://consentcdn.cookiebot.com/*', { fixture: 'cookiebot.json' }).as('cookiebot');
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit blog page
    cy.visit('/blog');

    cy.get('nav.pagination-nav .pagination-nav__item--next a').preventDefault().click().then($click => {
      // Visit second page
      cy.wait(500);
      cy.visit('/blog/page/2');
      cy.get('nav.pagination-nav .pagination-nav__item a').preventDefault().click({ multiple: true });
      cy.objectiv().filterEvents('PressEvent').snapshotEvents();
    });
  })
})
