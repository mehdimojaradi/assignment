class Form {
    getForms() {
        cy.fixture('forms.json').then(forms => {
            cy.contains(forms.title).click();
        });

        return this;
    }

    getPracticeForm() {
        cy.fixture('forms.json').then(forms => {
            cy.contains(forms.practice_form).click();
        });

        return this;
    }

    filloutRegistrationForm() {
        cy.fixture('forms.json').then(forms => {
            const form = forms.registration;

            cy.get(form.firstname.$).type(form.firstname.val);
            cy.get(form.lastname.$).type(form.lastname.val);
            cy.get(form.email.$).type(form.email.val);
            cy.get(form.gender.$).check({ force: true });
            cy.get(form.mobile.$).type(form.mobile.val);

            //*****get the birthday */
            cy.get(form.birthday.$).click();
            cy.get(form.birthday.$date_picker)
                .children()
                .last()
                .contains(form.birthday.day)
                .click()

            //***** get the chips */
            cy.get(form.subject.$)
                .click()
                .type(form.subject.val)
            cy.get(form.subject.$chips).click();

            cy.get(form.hobbies.$).check({ force: true });
            cy.get(form.address.$).type(form.address.val);

            // cy.get(form.file.$).attachFile(form.file.name);

            cy.get(form.state.$)
                .scrollIntoView()
                .click({ force: true })
            cy.get(form.state.$val).click({ force: true });

            cy.get(form.city.$)
                .scrollIntoView()
                .click({ force: true })
            cy.get(form.city.$val).click({ force: true });

            cy.get(form.$btn_submit).click({ force: true });
        });

        return this;
    }

    assertDataAdded() {
        cy.fixture('forms.json').then(forms => {
            const form = forms.registration;

            cy.contains(form.modal_content.successful_submited).should('be.visible');
            cy.get(form.modal_content.$).within(_ => {
                let data = [];
                cy.get('tr').find('td:eq(1)').each(($el, idx, $list) => {
                    data.push($el.text())
                }).then(_ => {
                    expect(data).to.contains(form.firstname.val.concat(' ', form.lastname.val));
                    expect(data).to.contains(form.email.val);
                    expect(data).to.contains(form.gender.val);
                    expect(data).to.contains(form.mobile.val);
                    expect(data).to.contains(form.birthday.val);
                    expect(data).to.contains(form.subject.val);
                    expect(data).to.contains(form.hobbies.label);
                    // expect(data).to.contains(form.file.name.val);
                    expect(data).to.contains(form.address.val);
                    expect(data).to.contains(form.state.val.concat(' ', form.city.val));
                })

                cy.get(form.modal_content.$btn_close).click({force: true});
            })
        })
    }
}

export default new Form;