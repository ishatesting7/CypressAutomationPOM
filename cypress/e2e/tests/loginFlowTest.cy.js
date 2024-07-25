import LoginPage from "../../pageObjects/LoginPage";
import Utilties from "../../utilities/Utilties";

describe("Login Page UI Tests", ()=>{
    beforeEach( ()=>{
        cy.visit(Cypress.env('loginpage_url'));
    })

    it.only("should login succesfully and display account page", ()=>{
        LoginPage.typeUserName(Cypress.env('USERNAME'));
        LoginPage.typePassword(Cypress.env('PASSWORD'));
        LoginPage.clickLogin();
        LoginPage.elements.pageUrl().should('eq', Cypress.env('accountpage_url'));
    });
    it("should display an error message when wrong password is entered", ()=>{
        //LoginPage.typeUserName(Cypress.env('USERNAME'));
        LoginPage.typeUserName(Cypress.env(Utilties.newEmail()));
        LoginPage.typePassword(Cypress.env('WRONG_PASSWORD'));
        LoginPage.clickLogin();
        LoginPage.elements.invalidCredentialsErr().should('have.text', ' Warning: No match for E-Mail Address and/or Password.');
    });
    it("should display Register and Forgot Password links in the right menu", ()=>{
      LoginPage.elements.registerLink().should('have.attr', 'href', 'https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
      LoginPage.elements.forgottenPwdLink().should('have.attr', 'href', 'https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten');
    })
    it("should email forgot password link when user forgets password", ()=>{
        LoginPage.clickForgotPasswordLink();
        LoginPage.elements.pageUrl().should('eq', Cypress.env('forgotpwd_url'));
        LoginPage.typeUserName(Cypress.env('USERNAME'));
        LoginPage.clickContinueLink();
        LoginPage.elements.emailConfirmationMssg().should('have.text', ' An email with a confirmation link has been sent your email address.');
    })
   
})