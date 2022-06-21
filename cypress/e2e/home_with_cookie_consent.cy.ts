describe('Home: with cookie consent', () => {
  it('Should track ApplicationLoaded and MediaLoadEvent', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://api.github.com/repos/objectiv/objectiv-analytics', { fixture: 'github.json' }).as('github');
    cy.intercept('https://vimeo.com/api/oembed.json*', { fixture: 'vimeo.json' }).as('vimeo');
    cy.intercept('https://consentcdn.cookiebot.com/*', { fixture: 'cookiebot.json' }).as('cookiebot');
    cy.intercept('http://localhost:8081*', {status: 200}).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit home page
    cy.visit('/');

    // Wait for Vimeo to finish loading. Iframes are flaky, so a plain wait seems to be the simplest option here.
    cy.wait('@vimeo');
    cy.wait(1000);

    // Verify recorded events
    cy.objectiv().filterEvents(['ApplicationLoadedEvent', 'MediaLoadEvent']).snapshotEvents();
  })
})
