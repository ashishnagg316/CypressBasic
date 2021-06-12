/// <reference types="Cypress" />

describe('ChildWindowNav', function()
{
    it('Test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#openwindow').invoke('removeAttr', 'target').click()
        //get url to verify we are navigate to correct URL
        cy.url().should('include','shetty')
        //cy.go('back') //you cannot navigate from new window to old window


    })
})