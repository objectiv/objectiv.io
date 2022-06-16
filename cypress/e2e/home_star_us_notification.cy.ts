describe('Home: star us notification', () => {
  it('Should track VisibleEvent when scrolling down', () => {
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
    cy.get('.footer').scrollIntoView();

    // Verify recorded event
    cy.objectivGetEvents(
      (event) =>
        event._type === "VisibleEvent" &&
        Cypress._.find(
          event.location_stack,
          ({ _type, id }) =>
            _type === "OverlayContext" && id === "star-us-notification-overlay"
        )
    )
    .should("have.length", 1)
    .snapshot();
  })
})