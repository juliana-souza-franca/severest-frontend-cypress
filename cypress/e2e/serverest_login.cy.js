/// <reference types="cypress"/>
const login = require('../fixtures/elemento_login.json');
const  us  = require('../fixtures/user.json')

beforeEach(() => {
  cy.visit('/');
});
 
afterEach(() => {
   cy.screenshot()
});
describe('Logar usuário', () => {
  it('Logar o usuário com sucesso', () => {
     
    
      cy.get(login.INPUT_LOGIN).type(us.email).should('have.value', us.email);
      console.log(us.password)
      cy.get(login.PASSWORD_LOGIN).type(us.password).should('have.value', us.password);
      cy.get(login.BTN_LOGIN, { timeout: 20000 }).should('be.visible').click();

      // Verificação adicional após o login
      // cy.contains('Bem-vindo', { timeout: 20000 }).should('be.visible');
    
    });
  });
