/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')        
    });

   /* it('Deve selecionar um produto da lista', () => {
        //cy.get('.product-block').first().click() //SELECIONA O PRIMEIRO ITEM DA LISTA
        //cy.get('.product-block').last().click() //SELECIONA O ÚLTIMO ITEM DA LISTA
        // cy.get('.product-block').contains('Gym').click() //SELECIONA O PRIMEIRO ITEM QUE CONTIVER O NOME
        cy.get('.product-block').eq(2).click() //SELECIONA O ITEM NA POSIÇÃO 2
    });*/

    it('Deve adicionar um produto ao carrinho', () => {
        cy.get('.product-block').eq(0).click()
        var qtd = 2
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',qtd)

    });
});