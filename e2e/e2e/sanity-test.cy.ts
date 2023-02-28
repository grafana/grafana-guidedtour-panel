describe('sanity test', () => {
  it('sanity test', () => {
    cy.visit('/d/guided-tour-demo');
    cy.get('button.react-joyride__beacon').click();
    cy.contains('my awesome guided tour step 1');
    cy.contains('Next').click();
    cy.contains('my awesome guided tour step 2');
    cy.contains('Next').click();
    cy.contains('my awesome guided tour step 3');
    cy.contains('Next').click();
    cy.contains('my awesome guided tour step 4');
    cy.contains('Next').click();
    cy.contains('my awesome guided tour step 5');
    cy.contains('Next').click();
    cy.contains('my awesome guided tour step 6');
    cy.contains('Next').click();
    cy.contains('my awesome guided tour step 7');
    cy.contains('Next').click();
    cy.contains('my awesome guided tour step 8');
    cy.contains('Finish').click();
    cy.get('button.react-joyride__beacon').should('not.exist');
  });
});
