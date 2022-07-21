describe('Docs Tracking: Footer Edit This Page', () => {
  it('Should track PressEvents on Edit This Page items', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://consentcdn.cookiebot.com/*', { fixture: 'cookiebot.json' }).as('cookiebot');
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit home page
    cy.visit('/docs/tracking');

    // We don't want any anchor to actually navigate. See support/commands.ts for how `preventDefault` has been made
    cy.get('ul.editLinks_src-theme-EditThisPage-styles-module li a').preventDefault().click({ multiple: true });

    // Verify recorded events
    cy.objectiv().filterEvents('PressEvent').snapshotEvents();

    cy.objectiv().filterEvents('PressEvent').its('events').should('have.length', 3).then(recordedEvents => {
      const suggestAnEdit = recordedEvents[0];
      const [root, content, link] = suggestAnEdit.location_stack;
  
      // Test RootLocationContext
      cy.wrap(root).should('deep.equal', {_type: 'RootLocationContext', id: 'tracking'});
  
      // Test ContentContext
      cy.wrap(content).its('_type').should('eq', 'ContentContext');
      cy.wrap(content).its('id').should('eq', 'edit-this-page');
  
      // Test LinkContext
      cy.wrap(link).its('_type').should('eq', 'LinkContext');
      cy.wrap(link).its('id').should('eq', 'edit-docs-page');
      cy.wrap(link).its('href').should('eq', 'https://github.com/objectiv/objectiv.io/edit/main/docs/docs/tracking/introduction.md');
    });

  })
})
