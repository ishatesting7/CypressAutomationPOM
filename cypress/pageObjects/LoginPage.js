class LoginPage {

    //Page Elements
   
    //Method name and class name should be same
    //This is getting invoked during object creation --- new LoginPage()
    
    //new LoginPage("asd", "asd", "asd","data")

    elements = {
        usernameInput:()=>{return cy.get('#input-email')},
        passwordInput:()=>{return cy.get('#input-password')},
        loginButton:()=>{return cy.get('[value="Login"]')},
        pageUrl: ()=>{return cy.url()},
        invalidCredentialsErr: ()=>{return cy.contains('Warning:')},
        registerLink: ()=>{return cy.get('#column-right > div > a:nth-child(2)')},
        forgottenPwdLink: ()=>{ return cy.get('#column-right > div > a:nth-child(3)')},
        continueLink:()=>{return cy.contains('Continue')},
        emailConfirmationMssg:()=>{return cy.get('#account-login > div.alert.alert-success.alert-dismissible')}
    
    }

    // Page Actions

    //Enter Username
    typeUserName(username){
        this.elements.usernameInput().type(username);
    }
    //Enter Password
    typePassword(password){
        this.elements.passwordInput().type(password, {log:false});
    }
    //Click Login btn
    clickLogin(){
        this.elements.loginButton().click();
    }
    clickForgotPasswordLink(){
        this.elements.forgottenPwdLink().click();
    }

    clickContinueLink(){
        this.elements.continueLink().click();
    }
}

module.exports = new LoginPage();