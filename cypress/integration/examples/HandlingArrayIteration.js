/// <reference types="Cypress" />

describe('HandlingArrays', function()
{
    it('Test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") 
        //cy.get('a').click()
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //using each() to handle arrays by iterating over array of webElements
        cy.get('.products').find('.product').each(($el, index, $list) => {
           const vegName = $el.find('h4.product-name').text()
           if(vegName.includes('Cashews'))
           {
               $el.find('button').trigger("click")
           }
        })
    })
})    