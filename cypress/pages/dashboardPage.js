class DashboardPage {
  selectorsList() {
    const selectors = {
      dashboardGrid: '.orangehrm-dashboard-grid',
    };
    return selectors;
  }

  checkLocation() {
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
  }

  checkDashboadGrid() {
    cy.get(this.selectorsList().dashboardGrid);
  }
}

export default DashboardPage;
