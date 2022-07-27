describe('Home: Try It', () => {
  it('Should track PressEvents on Try It links and buttons', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://api.github.com/repos/objectiv/objectiv-analytics', { fixture: 'github.json' }).as('github');
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit home page
    cy.visit('/');

    // We don't want any anchor to actually navigate. See support/commands.ts for how `preventDefault` has been made
    cy.get('div[class*="tryIt"] a.button').contains('Spin up the Demo').preventDefault().click();

    cy.get('div[class*="tryAnnouncement"] a').contains('Learn more').preventDefault().click();

    // Verify recorded events
    cy.objectiv().filterEvents('PressEvent').snapshotEvents();
  })
})
