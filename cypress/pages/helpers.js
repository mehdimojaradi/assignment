class $ {
    load(path) {
        return Cypress.config().baseUrl + path
    }

    visit(path) {
        return cy.visit({
            url: this.load(path),
            failOnStatusCode: false
        });
    }
}

export default new $