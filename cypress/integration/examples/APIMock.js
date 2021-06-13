///<reference types = "Cypress"/>
describe('APIMOCK',function()
{
    beforeEach(function()
    {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
    })

    it('MOCK API & Display 1 record',function()
    {
        
        //API is intercepted with our own body
        cy.intercept({
            method : 'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
            statusCode : 200,
            body : [{"book_name": "RestAssured with Java",
            "isbn":"RSU",
            "aisle":"2301"}]
        }).as('bookRetrive')
        cy.get('.btn.btn-primary').click()
        //after clicking API is modified
        cy.wait('@bookRetrive')
        //verification
        cy.get('p').should('have.text', 'Sorry we have only one book available')
    })

    it('Verify response data ',function()
    {
        
        //API is intercepted with our own body
        cy.intercept({
            method : 'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
            statusCode : 200,
            body : [{"book_name": "RestAssured with Java",
            "isbn":"RSU",
            "aisle":"2301"}]
        }).as('bookRetrive')
        cy.get('.btn.btn-primary').click()
        //length of response array = rows in data table
        cy.wait('@bookRetrive').should(({request,response})=>
        {
            cy.get('tr').should('have.length', response.body.length+1)
        })
        //verification
        cy.get('p').should('have.text', 'Sorry we have only one book available')
    })

    it('ModifyAPI for security Testing',function()
    {
        
        //API is intercepted with Modifying API
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>
        {
            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
 
            req.continue((res)=>
        {
            // expect(res.statusCode).to.equal(403)
        })
        }).as("dummyUrl")
        cy.get('.btn.btn-primary').click()
        //length of response array = rows in data table
        cy.wait('@dummyUrl')
    })
})