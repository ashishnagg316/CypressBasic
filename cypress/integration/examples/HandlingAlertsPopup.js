/// <reference types = "Cypress"/>

describe('HandlingAlerts', function()
{
    it('Test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#name').as('sendText')
        cy.get('@sendText').type('Ashish')

        cy.get('#alertbtn').click();
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('Hello Ashish, share this practice page and share your knowledge')
        })
        cy.wait(3000)
        //cy.get('@sendText')
        cy.get('@sendText').type('Ashish')
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Hello Ashish, Are you sure you want to confirm?')
        })
    })
})