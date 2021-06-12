/// <reference types="Cypress" />

describe('ChildTabNav', function()
{
    it('Test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        //get url to verify we are navigate to correct URL
        cy.url().should('include','shetty')
        cy.go('back')


    })
})