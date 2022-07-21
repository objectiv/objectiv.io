describe('About: Team section', () => {
  it('Should track PressEvents on links in Team section on About page', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://consentcdn.cookiebot.com/*', { fixture: 'cookiebot.json' }).as('cookiebot');
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit about page
    cy.visit('/about');

    // We don't want any anchor to actually navigate. See support/commands.ts for how `preventDefault` has been made
    cy.get('.avatar>a[href="https://github.com/ivarpruijn"').preventDefault().click();
    cy.get('.avatar__intro>div>a[href="https://github.com/ivarpruijn"').preventDefault().click();
    cy.get('.card__footer>a[href="https://github.com/ivarpruijn"').preventDefault().click();

    // Verify recorded events
    cy.objectiv().filterEvents('PressEvent').snapshotEvents();
  })
})
