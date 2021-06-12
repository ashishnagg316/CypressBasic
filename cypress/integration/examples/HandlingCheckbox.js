/// <reference types = "Cypress"/>

describe('HandlingCheckbox', function()
{
    it('Test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //check
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value','option1')
        //uncheck
        cy.get("#checkBoxOption1").uncheck().should('not.be.checked').and('have.value','option1')
        //multiple checkbox
        cy.get("input[type='checkbox']").check(['option2','option3'])
    })
})