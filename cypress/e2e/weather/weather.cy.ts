describe('About Page', () => {
  it('should open weather page when user select location and select specific location to receive weather forcasts', () => {
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
