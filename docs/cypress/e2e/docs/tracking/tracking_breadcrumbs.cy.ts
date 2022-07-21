describe('Docs Tracking: Breadcrumbs', () => {
  it('Should track PressEvents on the breadcrumbs on home', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://consentcdn.cookiebot.com/*', { fixture: 'cookiebot.json' }).as('cookiebot');
    cy.intercept('http://localhost:8081*', { status: 200 }).as('collector');

    // Set CookieConsent
    cy.setCookieConsent();

    // Visit blog page
    cy.visit('/tracking');

    cy.get('nav.menu li.theme-doc-sidebar-item-category:first a.menu__link:first').click().then($click => {
      cy.wait(500);
      cy.get('nav.theme-doc-breadcrumbs li a').preventDefault().click({ multiple: true });
      cy.objectiv().filterEvents('PressEvent').its('events').then(recordedEvents => {
        const secondBreadcrumbEvent = recordedEvents[1];

        const [root, nav, link] = secondBreadcrumbEvent.location_stack;
    
        // Test RootLocationContext
        cy.wrap(root).should('deep.equal', {_type: 'RootLocationContext', id: 'tracking'});
    
        // Test NavigationContext
        cy.wrap(nav).its('_type').should('eq', 'NavigationContext');
        cy.wrap(nav).its('id').should('eq', 'breadcrumbs');
    
        // Test LinkContext
        cy.wrap(link).its('_type').should('eq', 'LinkContext');
      });
    });
  })
})
