/// <reference types="Cypress" />

describe('GetTitle', function()
{
    it('Test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/").then(function()
        {
            console.log('Title of the page')
        })
        
        //get title of the webpage
        cy.get('.brand.greenLogo').as('titleName')
        cy.get('@titleName').then(function(title)//promising the method using "then()"
        {
            const title1 = title.text()
            cy.log(title1)

            expect(title.text()).to.equal(title1)
            
        })
        //assertion
        //cy.get('@titleName').should('have.text', title)



    })
})