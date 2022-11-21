describe('duckduckgo', () => {
  it('visiterduckduckgo',  () => {

cy.visit('https://duckduckgo.com/')
cy.get('#search_form_input_homepage').type('grafikart.fr')
cy.get('#search_button_homepage').click({force: true])
//////TEST//////
  })
})





