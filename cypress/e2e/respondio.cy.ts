
describe('Respond.io Test Tasks', () => {

  
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
  })
  it('Scenario 01', () => {

    cy.get('[name="search_query"]').type('Shirt')
    cy.get('[name="search_query"]').type('{enter}')
    cy.get('.product-count').should('contain.text', 'Showing 1 - 1 of 1 item')

  })

  it('Scenario 02', () =>{
    
    cy.get('.sf-with-ul').contains('Women').click()
    cy.get('[name="layered_category_4"]').check()
    cy.wait(5000) // wait for 5 seconds
    cy.get('#layered_id_attribute_group_8').click()
    cy.wait(10000) // wait for 10 seconds
    cy.get('.product-count').should('contains.text', 'Showing 1 - 1 of 1 items')

  })

  it('Scenario 03', () =>{

     cy.get('.product-container').first().click()
     cy.get('[id="homefeatured"] li').first().click()
     cy.get('[name="Submit"]').click()
     cy.get('[title="Proceed to checkout"]').click()
     cy.get('[id="summary_products_quantity"]').should('contains.text', '1 Product')

  })

})