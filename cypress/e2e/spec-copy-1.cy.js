describe('amazon test', () => {
  it('visiter amazon obtenir une paire de chaussete noires rentrer ses coordonnées et payer', () => {

    cy.visit('https://www.amazon.fr/')

cy.get('[data-nav-ref="nav_signin"]').click({ force: true })
cy.get('#ap_email').type('felix.renard.beausoleil@gmail.com')
cy.get('#continue').dblclick()
cy.get('#ap_password').type('123Soleil!')
cy.get('#signInSubmit').dblclick()
cy.get('#nav-cart').click({ force: true })
// cy.get('#twotabsearchtextbox').type('4 paire de chaussettes noires tailles 44{enter}')
// cy.scrollTo('0%', '50%')
// cy.contains('4 paires de chaussettes').click({ force: true })
// cy.scrollTo('0%', '5%')
// cy.get('#native_dropdown_selected_size_name.a-native-dropdown.a-declarative')
//   .select('43-46')
    // .should('have.value', '2,B00RBRR1ZM')
// cy.get('#add-to-cart-button').click({ force: true })
// cy.get('#twotabsearchtextbox').type('televiseur 45 pouces 8k{enter}')
// cy.scrollTo('0%', '3%')
// cy.contains('LG 43UP8000 TV LED UHD 4K 43 pouces (108 cm)').click({ force: true })
// cy.get('#add-to-cart-button').click({ force: true })
// cy.contains('Aller au panier').click({ force: true })
    // cy.get('#address-ui-widgets-enterAddressPhoneNumber').type('+33663256463')
    // cy.get('#address-ui-widgets-enterAddressLine1').type('19 rue hermel')
    // cy.get('#address-ui-widgets-enterAddressPostalCode').clear().type('75018')
    // cy.get('#address-ui-widgets-enterAddressCity').type('Paris')
    // cy.get('#address-ui-widgets-form-submit-button').dblclick()
cy.get('#sc-buy-box-ptc-button').dblclick()
cy.get('#shipToThisAddressButton').dblclick()
cy.get('#apx-add-credit-card-action-test-id .a-link-emphasis.pmts-add-cc-default-trigger-link').click({ force: true })









})
})