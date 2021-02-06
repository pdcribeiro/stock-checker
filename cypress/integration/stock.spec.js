const { URLS } = require('../../src/constants');

it("doesn't have products in stock", () => {
  URLS.forEach(url => {
    cy.visit(url)
    cy.contains('Não está disponível para entrega')
  })
})
