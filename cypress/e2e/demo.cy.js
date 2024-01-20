/// <reference types='cypress' />

import $ from '../pages/helpers';
import Elements from '../pages/elements';
import Forms from '../pages/forms';

describe('Demo', () => {
  it('TC01-Verify user can enter new data into the table', () => {
    $.visit('elements');

    Elements
      .getElements()
      .getWebTables()
      .clickAddButton()
      .filloutModal()
      .clickModalSubmitButton()
      .assertDataAdded()
  });

  it('TC02-Verify user can submit the form', () => {
    $.visit('forms');
    
    Forms
      .getForms()
      .getPracticeForm()
      .filloutRegistrationForm()
      .assertDataAdded()
  })
})