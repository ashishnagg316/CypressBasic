/// <reference types="Cypress" />

describe('CypressBasics', function()
{
    it('Test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") 
        //cy.get('a').click()
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        //parent child chaining
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        //using each() to handle arrays by iterating over array of webElements
        cy.get('.products').find('.product').each(($el, index, $list) => {
           const vegName = $el.find('h4.product-name').text()
           if(vegName.includes('Cashews'))
           {
               $el.find('button').trigger("click")
           }
        })
        //get title of the webpage
        cy.get('.brand.greenLogo').then(function(title)
        {
            cy.log(title.text())
        })


    })
})