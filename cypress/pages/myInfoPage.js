class MyInfoPage {
  selectorsList() {
    const selectors = {
      firstNameField: "[name='firstName']",
      lastName: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateField: "[placeholder='yyyy-dd-mm']",
      dateCloseButton: ".--close",
      submitButton: "[type='submit']",
      toaster: ".oxd-toast-close",
      genericDropdown: ".oxd-select-wrapper",
      genericOption: ".oxd-select-option",
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
    driversLicenseDate,
    licenseExpiryDate
  ) {
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId);
    cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId);
    cy.get(this.selectorsList().genericField)
      .eq(5)
      .clear()
      .type(driversLicenseDate);
    cy.get(this.selectorsList().genericField)
      .eq(6)
      .clear()
      .type(licenseExpiryDate);
    cy.get(this.selectorsList().dateCloseButton).click({ force: true });
  }
}

export default MyInfoPage;
