/// <reference types="Cypress" />

import HomePage from '../../support/pageObjects/HomePage'
import ProductsPage from '../../support/pageObjects/ProductsPage'

describe('Framework', function()
{
    beforeEach(function() {
        // runs once before all tests in the block
        cy.visit(Cypress.env('url'))
        cy.fixture('example').then(function(data)
        {
            this.data = data
        })
        
      })
    it('Test case1: Enter details', function()
    {
        const homePage = new HomePage() 
        homePage.getName().type(this.data.name)
        homePage.getSex().select(this.data.Sex)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        //validating attribute properties
        homePage.getName().should('have.attr','minlength','2')
        homePage.getDisabledOption().should('be.disabled')
        
       
    })

    it('Test case2: Shopping', function()
    {
        const products = new ProductsPage() 
        products.getShopBtn().click()
        //Add custom command => Verify it in commands.js
        //cy.selectProduct(this.data.productName)
        //cy.selectProduct('Nokia')
        //Since the above steps feel repeatative try to handle them by adding data in an array
        
        this.data.productName.forEach(function(element) {
 
            cy.selectProduct(element)
          });
        products.getCheckout().click()
        //Verify sum of products is working fine
        var sum = 0
        products.getOrderPrice().each(($e1, index, $list)=>
        {
           const amount = $e1.text()
           var res = amount.split(" ")//amount is $. 50000, we are spliting it as $. & 50000
           res = res[1].trim()// res[0]=$. & res[1]= 50000, we are removing extra spaces using trim()
           sum = Number(sum)+Number(res)
        }).then(function()
        {
            cy.log(sum)
        })
        //Verify the sum with the total
        products.getTotal().then(function(element){
            const amount1 = element.text()
            var total = amount1.split(" ")
            total = total[1].trim()
            cy.log(total)
            expect(Number(total)).to.equal(Number(sum))
        })
        products.getFinalCheckout().click()
        products.getCountry().type('India')
        products.getDropdownCountry().click()
        products.getTC().click({force :true})//if element is not clickable, we force the click
        products.getPurchase().click()
        products.getAlertMessage().should('include.text', 'Success! Thank you! ')

        
    })
})    