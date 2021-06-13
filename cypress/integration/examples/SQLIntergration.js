///<reference types = "Cypress"/>
describe('SQL',function()
{

    it('SQLIntegration',()=>
    {
        cy.sqlServer("select * from person").then(function(result)
        {
            console.log(result)
        })
    })
})