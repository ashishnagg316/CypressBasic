/// <reference types="Cypress" />

describe('CheckoutCart', function()
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
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        cy.get('select').select('India').should('have.value','India')
        cy.get('.chkAgree').check()
        cy.get('button').click()
        //cy.wait(10000)
        cy.get('[style="color:green;font-size:25px"]', { timeout: 3000 }).invoke('text').then((orderSummary)=>
        {
            cy.log(orderSummary)
        })
    })
})    