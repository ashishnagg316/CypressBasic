/// <reference types="Cypress" />

describe('WebTable', function()
{
    it('Test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('tr td:nth-child(2)').as('course')
        cy.get('@course').each(($e1, index, $list)=>
        {
            const courseText = $e1.text()
            if(courseText.includes('Python'))
            {   //move to sibling row to fetch amount
                cy.get('@course').eq(index).next().then(function(price)
                {
                    const priceText = price.text()
                    cy.log(priceText)
                    expect(priceText).to.equal('25')
                })
            }
        })


    })
})