/// <reference types = "Cypress"/>

describe('HandlingCheckbox', function()
{
    it('Test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("input[value='radio1']").check().should('be.checked').and('have.value', 'radio1')
        cy.get("input[value='radio2']").check().should('be.checked').and('have.value', 'radio2')
        
    })
})