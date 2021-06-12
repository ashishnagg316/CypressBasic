class ProductsPage
{
    getCheckout()
    {
        return cy.get('.nav-link.btn.btn-primary')
    }
    getFinalCheckout()
    {
        return  cy.get('.btn.btn-success')
    }
    getCountry()
    {
        return cy.get('#country')
    }
    getShopBtn()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }
    getDropdownCountry()
    {
        return cy.get('.suggestions > ul > li > a')
    }
    getTC()
    {
       return cy.get('#checkbox2')
    }
    getPurchase()
    {
        return cy.get("input[value='Purchase']")
    }
    getAlertMessage()
    {
        return cy.get('.alert')
    }
    getOrderPrice()
    {
        return cy.get('tr td:nth-child(4) strong')
    }
    getTotal()
    {
        return cy.get('h3 strong')
    }
}
export default ProductsPage;