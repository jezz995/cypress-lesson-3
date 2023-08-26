/*// <reference types ="cypress" />*/

import { LoginPage } from "./pages/login";

let loginPage = new LoginPage();

describe("Automation test with demo e-commerce web", () => {
  it("Passed login", () => {
    loginPage.navigate("https://www.saucedemo.com/v1/");
    loginPage.enterUsername("standard_user");
    loginPage.enterPassword("secret_sauce");
    loginPage.clickLogin();
  });

  it("Failed login", () => {
    loginPage.navigate("https://www.saucedemo.com/v1/");
    loginPage.enterUsername("secret_recipe");
    loginPage.enterPassword("secret_ketchup");
    loginPage.clickLogin();
  });
});
