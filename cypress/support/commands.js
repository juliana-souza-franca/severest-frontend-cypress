const fs = require('fs');
const path = require('path');
import { faker } from '@faker-js/faker';

Cypress.Commands.add('generateUser', () => {
  const email = faker.internet.email();
  const password = faker.internet.password();
  const fullname = faker.person.fullName();
  

  const user = {
    fullname: fullname,
    email: email,
    password: password
  };

  cy.writeFile('cypress/fixtures/user.json', user);
  return cy.wrap(user); // Retorna o usuário gerado como um Cypress chainable object
});
