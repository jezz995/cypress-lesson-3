import { string } from "assert-plus";

export class LoginPage {
  username_field = '[data-test="username"]';
  password_field = '[data-test="password"]';
  login_button = "#login-button";

  navigate(url) {
    cy.visit(url);
  }
  enterUsername(username) {
    cy.get(this.username_field).type(username);
  }

  enterPassword(password) {
    cy.get(this.password_field).type(password);
  }

  clickLogin() {
    cy.get(this.login_button).click();
  }
}
