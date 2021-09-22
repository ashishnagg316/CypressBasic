/// <reference types="Cypress" />

describe('Aliasing', function(){

    it('Test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('items')//aliasing
        cy.get('@items').find('.product').as('specificItem')
        cy.get('@specificItem').each(($e1, index, $list)=>
        {
            const vegItems = $e1.find('h4.product-name').text()
            if(vegItems.includes('Cashews'))
            {
                $e1.find('button').trigger('click')
            }
        })
        

    })
})