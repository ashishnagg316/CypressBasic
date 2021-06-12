/// <reference types="Cypress" />

import HomePage from '../../../../support/pageObjects/HomePage'
import ProductsPage from '../../../../support/pageObjects/ProductsPage'

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const homePage = new HomePage() 
const products = new ProductsPage()
//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome


Given('open mobilekart page', function()
{
    cy.visit(Cypress.env('url'))
    
    products.getShopBtn().click()
})

When('add items to cart', function()
{
    this.data.productName.forEach(function(element) {
 
        cy.selectProduct(element)
      });
    products.getCheckout().click()
})

And('validate the total price with cart sum price',function()
{
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
})

Then('select country and checkout', function()
{
    products.getFinalCheckout().click()
    products.getCountry().type('India')
    products.getDropdownCountry().click()
    products.getTC().click({force :true})//if element is not clickable, we force the click
    products.getPurchase().click()
})

And('validate order placed success message',function()
{
    products.getAlertMessage().should('include.text', 'Success! Thank you! ')
})

Given('open home page url', function()
{
    cy.visit(Cypress.env('url'))
})

When('enter person details', function(){
    homePage.getName().type(this.data.name)
    homePage.getSex().select(this.data.Sex)
})

Then('validate the details', function(){
    homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        //validating attribute properties
        homePage.getName().should('have.attr','minlength','2')
        homePage.getDisabledOption().should('be.disabled')
})
