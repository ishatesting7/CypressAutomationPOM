class RegisterPage {
    
    //Page elements

    elements = {
        firstNameInput:()=>{return cy.get("#input-firstname")},
        lastNameInput:()=>{return cy.get("#input-lastname")},
        EmailInput:()=>{return cy.get("#input-email")},
        telephoneInput:()=>{return cy.get("#input-telephone")},
        passwordInput:()=>{return cy.get("#input-password")},
        confirmPasswordInput:()=>{return cy.get("#input-confirm")},
        newsletterYRadioBtn: ()=>{return cy.get("#input-newsletter-yes")},
        newsletterNoRadioBtn: ()=>{return cy.get("#input-newsletter-no")},
        termsAgreeCheck:()=>{return cy.get("#input-agree")},
        continueBtn:()=>{return cy.get('input[value="Continue"]')},
        pageUrl:()=>{return cy.url()},
        accountSuccessHeading:()=>{return cy.get("#content>h1")},
        mismatchPasswordMssg:()=>{return cy.get('#input-confirm+div')},
        noFirstNameErr:()=>{return cy.get('#input-firstname+div')},
        noLastNameErr:()=>{return cy.get('#input-lastname+div')},
        noEmailErr:()=>{return cy.get('#input-email+div')},
        noTelephoneErr:()=>{return cy.get('#input-telephone+div')},
        passwordErr:()=>{return cy.get('#input-password+div')},
        privacyPolicyErr:()=>{return cy.get('#account-register').contains('Warning:')}

    }

    //Page Actions
    
    typeFirstName(firstname){
        return this.elements.firstNameInput().type(firstname);
    }
    typelastName(lastname){
        return this.elements.lastNameInput().type(lastname);
    }
    typeEmail(email){
        return this.elements.EmailInput().type(email);
    }
    typeTelephone(telephone){
        return this.elements.telephoneInput().type(telephone);
    }
    typePassword(pwd){
        return this.elements.passwordInput().type(pwd);
    }
    typeConfirmPwd(confirmpwd){
        return this.elements.confirmPasswordInput().type(confirmpwd);
    }
    subscribeNewsLetter(){
        return this.elements.newsletterYRadioBtn().click({force: true});
    }
    agreeTermsConditions(){
        return this.elements.termsAgreeCheck().click({force:true});
    }
    clickContinue(){
        return this.elements.continueBtn().click();
    }
    unsubscribeNewsLetter(){
        return this.elements.newsletterNoRadioBtn().click({force: true});
    }
    fillFormDetails(firstname, lastname, email, phone, password, confirmpassword){
        this.typeFirstName(firstname);
        this.typelastName(lastname);
        this.typeEmail(email);
        this.typeTelephone(phone);
        this.typeFirstName(firstname);
        this.typePassword(password);
        this.typeConfirmPwd(confirmpassword);
    }

    subcribeNewsletterAndContinue(){
        this.subscribeNewsLetter();
        this.agreeTermsConditions();
        this.clickContinue();
    }
    unsubcribeNewsletterAndContinue(){
        this.unsubscribeNewsLetter();
        this.agreeTermsConditions();
        this.clickContinue();
    }
}

module.exports = new RegisterPage();