/// <reference types = "Cypress"/>

describe('DynamicDropdown', function()
{
    it('Test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').as('dropdownItems')
        cy.get('@dropdownItems').each(($e1, index, $list)=>
        {
            const country = $e1.text()
            if(country==='India')
            {
                $e1.trigger('click')
            }
            
        })
       cy.get('#autocomplete').should('have.value','India')
    })
})