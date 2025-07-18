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

  updateMyInfo() {
    cy.get(this.selectorsList().firstNameField).clear().type()
  }
}

export default MyInfoPage;
