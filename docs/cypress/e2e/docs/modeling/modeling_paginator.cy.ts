describe('Docs Modeling: Overview paginator', () => {
  it('Should track PressEvents on the paginator in the page', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://consentcdn.cookiebot.com/*', { fixture: 'cookiebot.json' }).as('cookiebot');
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit blog page
    cy.visit('/modeling');

    cy.get('nav.pagination-nav a.pagination-nav__link--next').click().then($click => {
      cy.wait(500);
      cy.get('nav.pagination-nav a.pagination-nav__link--prev').preventDefault().click({ multiple: true });
      cy.objectiv().filterEvents('PressEvent').snapshotEvents();
    });
  })
})
