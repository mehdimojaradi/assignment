class Elements {

    getElements() {
        cy.fixture('elements.json').then(elements => {
            cy.contains(elements.title).click();
        });

        return this;
    }

    getWebTables() {
        cy.fixture('elements.json').then(elements => {
            cy.contains(elements.web_tables).click();
        });

        return this;
    }

    clickAddButton() {
        cy.fixture('elements.json').then(elements => {
            cy.get(elements.$btn_add).click();
        });

        return this;
    }

    filloutModal() {
        cy.fixture('elements.json').then(elements => {
            const modal = elements.modal_data;

            cy.get(modal.firstname.$).type(modal.firstname.val);
            cy.get(modal.lastname.$).type(modal.lastname.val);
            cy.get(modal.email.$).type(modal.email.val);
            cy.get(modal.age.$).type(modal.age.val);
            cy.get(modal.salary.$).type(modal.salary.val);
            cy.get(modal.department.$).type(modal.department.val);
        })

        return this;
    }

    clickModalSubmitButton() {
        cy.fixture('elements.json').then(elements => {
            cy.get(elements.$btn_modal_submit).click();
        })

        return this;
    }

    assertDataAdded() {
        cy.fixture('elements.json').then(elements => {
            const modal = elements.modal_data;

            cy.contains(modal.email.val)
                .parent()
                .within(_ => {
                    cy.contains(modal.firstname.val).should('be.visible');
                    cy.contains(modal.lastname.val).should('be.visible');
                    cy.contains(modal.age.val).should('be.visible');
                    cy.contains(modal.salary.val).should('be.visible');
                    cy.contains(modal.department.val).should('be.visible');
                })
        })

        return this;
    }
}

export default new Elements