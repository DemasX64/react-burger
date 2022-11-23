describe('constructor works correctly', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });
  it('should open constructor page by default', () => {
    cy.contains('Соберите бургер');
  });
  it('should move ingredient from ingredients to constructor', () => {
    cy.wait(1000);
    cy.get('li').first().drag('[data-cy=constructor]');
    cy.contains('Здесь должна быть булка').should('not.exist');
  });
  it('should open modal with ingredient details', () => {
    cy.get('li').contains('булка').click();
    cy.contains('Детали ингредиента').should('exist');
  });
  it('should show ingredient details', () => {
    cy.get('[data-cy=ingredient-info]').should('not.text', '0');
  });
  it('should close modal on click', () => {
    cy.get('[data-cy=modal-header]').find('svg').click();
    cy.contains('Детали ингредиента').should('not.exist');
  });
  it('should open modal with order details', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input').first().type('demasmamas@gmail.com');
    cy.get('input').last().type('qaz123wer456');
    cy.get('form').submit();
    cy.get('li').first().drag('[data-cy=constructor]');
    cy.get('button').contains('Оформить заказ').click();
    cy.contains('Ваш заказ начали готовить').should('exist');
  });
});
