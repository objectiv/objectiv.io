describe('Blog: post view', () => {
  it('Should track a PressEvent and VisibleEvent on opening a blog post', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://consentcdn.cookiebot.com/*', { fixture: 'cookiebot.json' }).as('cookiebot');
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit blog page
    cy.visit('/blog');

    cy.get('article:first header h2 a').click();

    // verify tracking content manually, as the `id` of the blog post changes for new blog posts
    cy.objectiv().filterEvents('PressEvent').its('events').should('have.length', 1).then(recordedEvents => {
      const pressEvent = recordedEvents[0];
      const [root, post, footer, link] = pressEvent.location_stack;
  
      // Test RootLocationContext
      cy.wrap(root).should('deep.equal', {_type: 'RootLocationContext', id: 'blog'});
  
      // Test post ContentContext
      cy.wrap(post).its('_type').should('eq', 'ContentContext');
      cy.wrap(post).its('id').should('match', /^post-/);
  
      // Test footer ContentContext
      cy.wrap(footer).should('deep.equal', {_type: 'ContentContext', id: 'blog-post-header'});
  
      // Test LinkContext
      cy.wrap(link).its('_type').should('eq', 'LinkContext');
    });

    cy.objectiv().filterEvents('VisibleEvent').its('events').should('have.length', 1).then(recordedEvents => {
      const visibleEvent = recordedEvents[0];
      const [root, post] = visibleEvent.location_stack;

      // Test RootLocationContext
      cy.wrap(root).should('deep.equal', {_type: 'RootLocationContext', id: 'blog'});

      // Test post ContentContext
      cy.wrap(post).its('_type').should('eq', 'ContentContext');
      cy.wrap(post).its('id').should('match', /^post-/);
    })
  });
})
