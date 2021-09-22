/// <reference types = "Cypress"/>

describe('VisibleAndInvisible', function()
{
    it('Test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#displayed-text').as('textBox')
        cy.get('@textBox').type('Hello')
        cy.get('#hide-textbox').click()
        cy.get('@textBox').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('@textBox').should('be.visible')
        
        //cy.get('@textBox').then(function(content)//promising the method using "then()"
        //{
          //  cy.log(content.text()) 
        //})
    })
})