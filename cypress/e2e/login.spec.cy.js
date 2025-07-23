import userData from '../fixtures/user-data.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';

const Chance = require('chance');

var chance = new Chance();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const { userSuccess, userFail } = userData;

describe('Orange HRM Tests', () => {
  it('Login - Success', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(userSuccess.username, userSuccess.password);
    dashboardPage.checkLocation();
    dashboardPage.checkDashboadGrid();
  });

  it('Login - Fail', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(userFail.username, userFail.password);
    loginPage.checkAccessInvalid();
  });
});
