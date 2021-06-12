/// <reference types="Cypress" />

describe('MouseHoverMenu', function()
{
    it('Test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('.mouse-hover-content').as('mouseHover')
        //invoking the menu to show its elements to interact
        cy.get('@mouseHover').invoke('show')
        //select Top option
        cy.contains('Top').click()
        //cy.contains('Top').click('force:true')
        //assert the url
        cy.url().should('include','top')
        //invoking the menu to show its elements to interact
        cy.get('@mouseHover').invoke('show')
        //select Reload option
        cy.contains('Reload').click()
        //cy.contains('Reload').click('force:true')
        //assert the url
        cy.wait(2000)
        cy.url().should('include','Practice')
        



    })
})