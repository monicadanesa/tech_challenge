Cypress.Commands.add('assertLocationUrl', (path) => {
    cy.location('pathname').should('include', path);
});
