import userData from '../fixtures/user-data.json';
import fieldsMyInfo from '../fixtures/fields-myinfo.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';
import MenuPage from '../pages/menuPage';
import MyInfoPage from '../pages/myInfoPage';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();
const { username, password } = userData.userSuccess;
const {
  firstName,
  lastName,
  employeeId,
  otherIdTest,
  driversLicenseNumber,
  licenseExpiryDate,
  dateOfBirth,
  testField,
} = fieldsMyInfo.fields;

describe('Orange HRM Tests', () => {
  it('User Info Update', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(username, password);
    dashboardPage.checkLocation();
    dashboardPage.checkDashboadGrid();
    menuPage.accessMyInfo();
    myInfoPage.fillPersonalDetails(firstName, lastName);
    myInfoPage.fillEmployeeDetails(
      employeeId,
      otherIdTest,
      driversLicenseNumber,
      licenseExpiryDate
    );
    myInfoPage.fillStatus(dateOfBirth);
    myInfoPage.saveForm();
    myInfoPage.fillCustomFields(testField);
    myInfoPage.saveCustomFields();
  });
});
