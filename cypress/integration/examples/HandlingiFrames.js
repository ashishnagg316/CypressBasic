/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('iFrames', function()
{
    it('Test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //iframe load
        cy.frameLoaded('#courses-iframe')
        //switch to iframe
        cy.iframe().find("a[href*='mentorship']").eq(0).click()

    })
})