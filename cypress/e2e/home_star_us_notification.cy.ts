describe('Home: star us notification', () => {
  it('Should track ApplicationLoaded, MediaLoadEvent and VisibleEvent', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://api.github.com/repos/objectiv/objectiv-analytics', { fixture: 'github.json' }).as('github');
    cy.intercept('https://vimeo.com/api/oembed.json*', { statusCode: 404 }).as('vimeo');
    cy.intercept('https://consentcdn.cookiebot.com/*', { fixture: 'cookiebot.json' }).as('cookiebot');
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit home page
    cy.visit('/');

    // Scroll all the way to the bottom
    cy.get('.footer__copyright').scrollIntoView();

    // Verify recorded events
    cy.objectivEvents().should('have.length', 2).snapshot();
  })
})