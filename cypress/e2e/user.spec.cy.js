import userData from '../fixtures/user-data.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';
import MenuPage from '../pages/menuPage';
import MyInfoPage from '../pages/myInfoPage';

const Chance = require('chance');
const moment = require('moment');

var chance = new Chance();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();
const { username, password } = userData.userSuccess;
const anyLicenseExpiryDate = moment(chance.date({ string: true })).format(
  'YYYY-DD-MM'
);
const anyDateofBirth = moment(chance.birthday({ string: true })).format(
  'YYYY-DD-MM'
);

describe('Orange HRM Tests', () => {
  it('User Info Update', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(username, password);
    dashboardPage.checkLocation();
    dashboardPage.checkDashboadGrid();
    menuPage.accessMyInfo();
    myInfoPage.fillPersonalDetails(chance.first(), chance.last());
    myInfoPage.fillEmployeeDetails(
      chance.integer({ min: 0, max: 9999999999 }),
      chance.integer({ min: 0, max: 999999999999999 }),
      chance.integer({ min: 0, max: 999999999 }),
      anyLicenseExpiryDate
    );
    myInfoPage.fillStatus(anyDateofBirth);
    myInfoPage.saveForm();
    myInfoPage.fillCustomFields(chance.string({ length: 20 }));
    myInfoPage.saveCustomFields();
  });
});
