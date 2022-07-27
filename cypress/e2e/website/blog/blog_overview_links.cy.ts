describe('Blog: Overview links', () => {
  it('Should track PressEvents on links on the Blog overview page', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit blog page
    cy.visit('/blog');

    // We don't want any anchor to actually navigate. See support/commands.ts for how `preventDefault` has been made
    cy.get('article:first footer a').last().preventDefault().click();

    // verify tracking content manually, as the `id` of the blog post changes for new blog posts
    cy.objectiv().filterEvents('PressEvent').its('events').should('have.length', 1).then(recordedEvents => {
      const readMorePressEvent = recordedEvents[0];
      const [root, post, footer, link] = readMorePressEvent.location_stack;
  
      // Test RootLocationContext
      cy.wrap(root).should('deep.equal', {_type: 'RootLocationContext', id: 'blog'});
  
      // Test post ContentContext
      cy.wrap(post).its('_type').should('eq', 'ContentContext');
      cy.wrap(post).its('id').should('match', /^post-/);
  
      // Test footer ContentContext
      cy.wrap(footer).should('deep.equal', {_type: 'ContentContext', id: 'blog-post-footer'});
  
      // Test LinkContext
      cy.wrap(link).its('_type').should('eq', 'LinkContext');
      cy.wrap(link).its('id').should('eq', 'read-more');
    });
  })
})
