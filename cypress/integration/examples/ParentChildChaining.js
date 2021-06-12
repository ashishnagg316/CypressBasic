/// <reference types = "Cypress"/> 

describe('ParentChildChaining', function()
{
    it('test case',function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
         //cy.get('a').click()
         cy.get('.search-keyword').type('ca')
         cy.wait(2000)
         cy.get('.product:visible').should('have.length', 4)//assertion
         //parent child chaining
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
    })
})