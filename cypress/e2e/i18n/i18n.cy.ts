describe('i18n', () => {
  it('should translate site to Vietnamese', () => {
    cy.visit('/')

    cy.findByRole('button', { name: /🇻🇳/i }).click()

    cy.findByRole('heading', { name: /George Lee/i }).should('exist')
  })

  it('should translate site to English', () => {
    cy.visit('/')

    cy.findByRole('button', { name: /🇻🇳/i }).click()

    cy.findByRole('heading', { name: /George Lee/i }).should('exist')

    cy.findByRole('button', { name: /🇺🇸/i }).click()

    cy.findByRole('heading', { name: /George Lee/i }).should('exist')
  })
})
