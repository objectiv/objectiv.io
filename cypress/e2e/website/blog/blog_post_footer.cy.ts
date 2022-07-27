describe('Blog: post footer', () => {
  it('Should track PressEvents on blog post footer links', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit blog page
    cy.visit('/blog');

    cy.get('article:first header h2 a').click().then($click => {
      cy.get('div[class*="blogPostFooterCta"] a').contains('Spin up the Demo').preventDefault().click();
      cy.get('div[class*="blogPostFooterCta"] a').contains('Objectiv on GitHub').preventDefault().click();
      cy.get('div[class*="blogPostFooterCta"] a').contains('Objectiv on Slack').preventDefault().click();

      // verify tracking content manually, as the `id` of the blog post changes for new blog posts
      cy.objectiv().filterEvents('PressEvent').its('events').should('have.length', 4).then(recordedEvents => {
        const demoEvent = recordedEvents[1];
        const [root, post, footer, link] = demoEvent.location_stack;
    
        // Test RootLocationContext
        cy.wrap(root).should('deep.equal', {_type: 'RootLocationContext', id: 'blog'});
    
        // Test post ContentContext
        cy.wrap(post).its('_type').should('eq', 'ContentContext');
        cy.wrap(post).its('id').should('match', /^post-/);
    
        // Test footer ContentContext
        cy.wrap(footer).should('deep.equal', {_type: 'ContentContext', id: 'blog-post-try-objectiv'});
    
        // Test LinkContext
        cy.wrap(link).its('_type').should('eq', 'LinkContext');
        cy.wrap(link).its('id').should('eq', 'spin-up-the-demo');

        const gitHubEvent = recordedEvents[2];
        const [root, post, footer, link] = gitHubEvent.location_stack;
    
        // Test RootLocationContext
        cy.wrap(root).should('deep.equal', {_type: 'RootLocationContext', id: 'blog'});
    
        // Test post ContentContext
        cy.wrap(post).its('_type').should('eq', 'ContentContext');
        cy.wrap(post).its('id').should('match', /^post-/);
    
        // Test footer ContentContext
        cy.wrap(footer).should('deep.equal', {_type: 'ContentContext', id: 'blog-post-try-objectiv'});
    
        // Test LinkContext
        cy.wrap(link).its('_type').should('eq', 'LinkContext');
        cy.wrap(link).its('id').should('eq', 'objectiv-on-github');

        const slackEvent = recordedEvents[3];
        const [root, post, footer, link] = slackEvent.location_stack;
    
        // Test RootLocationContext
        cy.wrap(root).should('deep.equal', {_type: 'RootLocationContext', id: 'blog'});
    
        // Test post ContentContext
        cy.wrap(post).its('_type').should('eq', 'ContentContext');
        cy.wrap(post).its('id').should('match', /^post-/);
    
        // Test footer ContentContext
        cy.wrap(footer).should('deep.equal', {_type: 'ContentContext', id: 'blog-post-try-objectiv'});
    
        // Test LinkContext
        cy.wrap(link).its('_type').should('eq', 'LinkContext');
        cy.wrap(link).its('id').should('eq', 'objectiv-on-slack');
      });
    });

  });
})
