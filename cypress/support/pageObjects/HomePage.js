class HomePage
{
    getName()
    {
        return cy.get("input[name='name']:nth-child(2)")
    }
    getTwoWayDataBinding()
    {
        return  cy.get("input[name='name']:nth-child(1)")
    }
    getSex()
    {
        return cy.get('select')
    }
    getDisabledOption()
    {
       return cy.get('#inlineRadio3')
    }
}
export default HomePage;