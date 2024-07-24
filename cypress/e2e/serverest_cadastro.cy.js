/// <reference types="cypress"/>
const Element_Register = require('../fixtures/elemento_cadastro.json');
import '../support/commands'; // Certifique-se de importar o arquivo commands.js



beforeEach(() => {
  cy.visit('/');
});

 afterEach(() => {
   cy.screenshot()
 })

describe('Cadastro de usuário', () => {
  it('Cadastro de usuário com sucesso', () => {
    
    cy.get(Element_Register.LINK_CADASTRAR).click()
    // Inserção de dados
    cy.generateUser().then((user) => {
      cy.get(Element_Register.INPUT_NAME).type(user.fullname).should('have.value', user.fullname)
      cy.get(Element_Register.INPUT_EMAIL).type(user.email).should('have.value', user.email)
      cy.get(Element_Register.INPUT_PASSWORD).type(user.password).should('have.value', user.password )
      cy.get(Element_Register.CHECKBOX_ADMINISTRADOR).click();
      cy.get(Element_Register.BTN_CADASTRAR).click();

      // Verificar se os valores foram armazenados corretamente e são os mesmos que foram digitados
      cy.contains('Cadastro realizado com sucesso', { timeout: 20000 }).should('be.visible');
      cy.contains(user.fullname, { timeout: 20000 }).should('be.visible');
    })
  })
})