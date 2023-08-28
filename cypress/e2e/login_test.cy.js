/*// <reference types ="cypress" />*/

import { LoginPage } from "./pages/login";
import { BuyItem } from "./pages/buy_item";

let loginPage = new LoginPage();
let buyItem   = new BuyItem();

describe("Automation test with demo e-commerce web", () => {
  it("Passed login", () => {

    loginPage.navigate("https://www.saucedemo.com/v1/");
    loginPage.enterUsername("standard_user");
    loginPage.enterPassword("secret_sauce");
    loginPage.clickLogin();
    
  });

  it("buy item", () => {

    buyItem.productItem()

  })

  /*it("Failed login", () => {
    loginPage.navigate("https://www.saucedemo.com/v1/");
    loginPage.enterUsername("secret_recipe");
    loginPage.enterPassword("secret_ketchup");
    loginPage.clickLogin();
  });*/
});
