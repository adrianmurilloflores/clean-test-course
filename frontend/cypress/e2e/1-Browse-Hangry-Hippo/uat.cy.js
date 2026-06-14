describe('Shows Appeteasers', () => {
  it('Connect to Dev Server', () => {
    cy.visit('https://hangryhippo.quantic.host/');
  });
  it('selects Handhelds', () => {
  cy.visit('/', { timeout: 120000 }) // Waits up to 2 minutes
   cy.contains('Handhelds').click();
   cy.contains('Cheese Burger');
   cy.contains('Fajita Tacos'); //TODO: Add a test to check Handhelds
  });
  it('selects Appeteasers', () => {
  cy.contains('Appeteasers').click();
  cy.visit('/', { timeout: 120000 }) // Waits up to 2 minutes
  cy.contains('Tater Tots');
  cy.contains('Buffalo Wings');
  cy.contains('Cheeese Burger').should('not.exist');
  cy.contains('Fajita Tacos').should('not.exist'); //TODO: Add a test to check Appeteasers
  });
});
