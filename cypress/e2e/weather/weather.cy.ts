describe('About Page', () => {
  it('should open about page when user clicks about navigation item', () => {
    cy.visit('/weather')

    cy.get(`#location-autoComplete`).click().type('h')

    cy.get("li[role='option']").each(function ($ele, index, $list) {
      if ($ele.text().includes('Ho Chi Minh')) {
        cy.wrap($ele).click()
      } else {
        cy.log($ele.text())
      }
    })
  })
})
