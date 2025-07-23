class MyInfoPage {
  selectorsList() {
    const selectors = {
      firstNameField: "[name='firstName']",
      lastName: "[name='lastName']",
      genericField: '.oxd-input--active',
      genericFieldDate: '.oxd-date-input',
      dateField: "[placeholder='yyyy-dd-mm']",
      dateCloseButton: '.--close',
      submitButton: "[type='submit']",
      toaster: '.oxd-toast-close',
      genericDropdown: '.oxd-select-wrapper',
      genericOption: '.oxd-select-option',
    };
    return selectors;
  }

  fillPersonalDetails(firstName, lastName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName);
    cy.get(this.selectorsList().lastName).clear().type(lastName);
  }

  fillEmployeeDetails(
    employeeId,
    otherId,
    driversLicenseNumber,
    licenseExpiryDate
  ) {
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId);
    cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId);
    cy.get(this.selectorsList().genericField)
      .eq(5)
      .clear()
      .type(driversLicenseNumber);
    cy.get(this.selectorsList().genericField)
      .eq(6)
      .clear()
      .type(licenseExpiryDate);
    cy.get(this.selectorsList().dateCloseButton).click();
  }

  fillStatus(dateOfBirth) {
    cy.get(this.selectorsList().genericDropdown).eq(0).click();
    cy.get(this.selectorsList().genericOption).eq(129).click();
    cy.get(this.selectorsList().genericDropdown).eq(1).click();
    cy.get(this.selectorsList().genericOption).eq(2).click();
    cy.get(this.selectorsList().genericField).eq(8).clear().type(dateOfBirth);
    cy.get(this.selectorsList().dateCloseButton).click({ force: true });
  }

  saveForm() {
    cy.get(this.selectorsList().submitButton).eq(0).click();
    cy.get('body').should('contain', 'Successfully Updated');
    cy.get(this.selectorsList().toaster);
  }

  fillCustomFields(testField) {
    cy.get(this.selectorsList().genericDropdown).eq(2).click();
    cy.get(this.selectorsList().genericOption).eq(3).click();
    cy.get(this.selectorsList().genericField).eq(9).clear().type(testField);
  }

  saveCustomFields() {
    cy.get(this.selectorsList().submitButton).eq(1).click();
    cy.get('body').should('contain', 'Successfully Saved');
    cy.get(this.selectorsList().toaster);
  }
}

export default MyInfoPage;
