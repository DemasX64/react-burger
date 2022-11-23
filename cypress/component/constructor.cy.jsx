import React from 'react';
import App from '../../src/components/app/app';

describe('constructor works correctly', () => {
  // beforeEach(() => {
  //   cy.visit('http://localhost:3000');
  // });
  it('should open constructor page by default', () => {
    cy.mount(<App />);
    cy.contains('Соберите бургер');
  });
  // it('should move ingredient from ingredients to constructor', () => {
  // });
  // it('should open modal with ingredient details', () => {
  // });
  // it('should show ingredient details', () => {
  // });
  // it('should open modal with order details', () => {
  // });
  // it('should close modal on click', () => {
  // });
});
