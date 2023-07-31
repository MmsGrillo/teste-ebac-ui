/// <reference types="cypress" />
import  {faker}  from '@faker-js/faker';

const email = faker.internet.email();
const password = faker.internet.password();
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();



describe('Funcionalidade do pré cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve passar para página de inicial, logado no cadastro pré criado', () => {
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(password)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        
        cy.get('#account_first_name').type(firstName)
        cy.get('#account_last_name').type(lastName)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    });
});