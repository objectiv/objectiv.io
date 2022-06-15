describe('Home: top_navigation', () => {
  it('Should track PressEvents on navigation items', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://api.github.com/repos/objectiv/objectiv-analytics', { fixture: 'github.json' }).as('github');
    cy.intercept('https://vimeo.com/api/oembed.json*', { statusCode: 404 }).as('vimeo');
    cy.intercept('https://consentcdn.cookiebot.com/*', { fixture: 'cookiebot.json' }).as('cookiebot');
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit home page
    cy.visit('/');

    // Click on the `About us` link, wait for url to change and verify recorded events
    cy.get('a').contains('About us').click();
    cy.url().should('include', '/about');
    cy.objectivEvents().should('have.length', 2).snapshot({ name: 'about us' });

    // Click on the `Blog` link, wait for url to change and verify recorded events
    cy.get('a').contains('Blog').click();
    cy.url().should('include', '/blog');
    cy.objectivEvents().should('have.length', 3).snapshot({ name: 'blog' });

    // Click on the `Jobs` link, wait for url to change and verify recorded events
    cy.get('a').contains('Jobs').click();
    cy.url().should('include', '/jobs');
    cy.objectivEvents().should('have.length', 4).snapshot({ name: 'jobs' });

    // FAQ and Docs cannot be tested because they are not part of the website
  })
})