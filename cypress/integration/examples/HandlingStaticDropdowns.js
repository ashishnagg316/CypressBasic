/// <reference types = "Cypress"/>

describe('StaticDropdown', function()
{
    it('Test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#dropdown-class-example').select('Option3').should('have.value','option3')
    })
})