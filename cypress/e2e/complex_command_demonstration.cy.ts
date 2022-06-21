describe('Home: star us notification', () => {
  it('Should track VisibleEvent when scrolling down', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://api.github.com/repos/objectiv/objectiv-analytics', { fixture: 'github.json' }).as('github');
    cy.intercept('https://vimeo.com/api/oembed.json*', { fixture: 'vimeo.json' }).as('vimeo');
    cy.intercept('https://consentcdn.cookiebot.com/*', { fixture: 'cookiebot.json' }).as('cookiebot');
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit home page
    cy.visit('/');

    // Scroll all the way to the bottom
    cy.get('.footer').scrollIntoView();

    // Wait for the animation to finish
    cy.get('div').contains('Star us').should('be.visible');

    // Verify recorded event
    cy.objectiv()
      .filterEvents('VisibleEvent')
      .withLocationContext('OverlayContext', 'star-us-notification-overlay')
      .withGlobalContext('PathContext', 'http://localhost:3000/')
      .snapshotEvents();
  })
})
