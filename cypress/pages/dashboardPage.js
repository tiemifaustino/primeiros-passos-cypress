class DashboardPage {
  selectorsList() {
    const selectors = {
      dashboardGrid: ".orangehrm-dashboard-grid",
    };
    return selectors;
  }

  verifyLocation() {
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
  }

  verifyDashboadGrid(username, password) {
    cy.get(this.selectorsList().dashboardGrid);
  }
}

export default DashboardPage;
