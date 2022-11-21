describe('amazon test', () => {
    describe('amazon test', () => {
      it('visiter amazon obtenir une paire de chaussete noires rentrer ses coordonnées et payer', () => {
    
        cy.visit('https://www.amazon.fr/')
    cy.get('#twotabsearchtextbox').type('4 paire de chaussettes noires{enter}')
    cy.get('#sp-cc-accept').click({ force: true })
    cy.scrollTo('0%', '26%')
    cy.contains('4 paires de Chaussettes').click({ force: true })
    cy.scrollTo('0%', '3%')
    cy.get('#add-to-cart-button').click({ force: true })
    cy.get('#twotabsearchtextbox').type('televiseur 45 pouces 8k{enter}')
    cy.scrollTo('0%', '3%')
    cy.contains('LG 43UP8000 TV LED UHD 4K 43 pouces (108 cm)').click()
    cy.get('#add-to-cart-button').click({ force: true })
    cy.scrollTo('0%', '80%')
    cy.contains('Identifiez-vous').click({ force: true })
    cy.contains('Créer votre compte Amazon').click({ force: true })
    cy.get('#ap_customer_name').type('Felix Renard Beausoleil')
    
    
    })
    })
  
  })
})