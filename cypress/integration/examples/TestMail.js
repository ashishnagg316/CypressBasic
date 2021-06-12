/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
 
cy.visit("https://app.titan.email/mail/")
cy.wait(1000)
cy.get('input[type="text"]').type('swathib1@qaprod.flock.com')
cy.get('input[type="password"]').type('test123')
cy.get('.button').click()
cy.get('a[href*="java"]').click()
cy.wait(1000)
cy.get('span.item-container.selected').click()
//cy.get('span[data-placeholder="Search"]').click()
//cy.get('div[class="list-item list-tabular-item has-m"]').focus().click()
cy.get('div span.contentEditable').type("Hello")
//cy.get('.key-commands-region.advance-thread-search-bar').find('span.contentEditable').type("Hello")
//cy.get('.open.content-dark').click
 
}  )
 
 
 
}  )
