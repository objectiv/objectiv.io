describe('Blog: Overview links', () => {
  it('Should track PressEvents on links in content on Blog page', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://consentcdn.cookiebot.com/*', { fixture: 'cookiebot.json' }).as('cookiebot');
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit about page
    cy.visit('/blog');

    // We don't want any anchor to actually navigate. See support/commands.ts for how `preventDefault` has been made
    cy.get('article:first footer a').last().preventDefault().click();

    // Verify recorded events
    cy.objectiv().filterEvents('PressEvent').snapshotEvents();
  })
})
