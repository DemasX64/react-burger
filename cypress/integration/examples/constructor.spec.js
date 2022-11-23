describe('constructor works correctly', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });
  it('should open constructor page by default', () => {
    cy.contains('Корзина');
  });
  it('should move ingredient from ingredients to constructor', () => {
  });
  it('should open modal with ingredient details', () => {
  });
  it('should show ingredient details', () => {
  });
  it('should open modal with order details', () => {
  });
  it('should close modal on click', () => {
  });
});
