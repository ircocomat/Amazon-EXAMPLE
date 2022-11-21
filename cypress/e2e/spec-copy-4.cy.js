describe('duckduckgo', () => {
  it('visiterduckduckgo',  () => {
cy.visit('https://amazon.fr')
cy.get('[data-nav-ref="nav_signin"]').click({force: true})
cy.get('[id="ap_email"]').type("0607122363")
cy.get('[class="a-button-input"]').click()
cy.get('[id="ap_password"]').type("Bistouflexible987")
cy.get('[id="signInSubmit"]').click()
cy.get('[id="twotabsearchtextbox"]').type(" 45 inch 8k TV")
cy.get('[id="nav-search-submit-button"]').click()
cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').click()
cy.get('[id="add-to-cart-button"]').click()
})
})