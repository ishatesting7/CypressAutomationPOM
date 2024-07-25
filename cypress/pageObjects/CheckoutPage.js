class CheckoutPage {

    //Page Elements 
    elements = {
        loginRadioBtn: ()=>{},
        registerAccRadioBtn: ()=>{},
        guestCheckoutRadioBtn: ()=>{return cy.get('#input-account-guest')},
        firstNameField: ()=>{return cy.get("#input-payment-firstname")},
        lastNameField: ()=>{return cy.get("#input-payment-lastname")},
        emailField: ()=>{return cy.get("#input-payment-email")},
        telephoneField: ()=>{return cy.get("#input-payment-telephone")},
        passwordField: ()=>{return cy.get("#input-payment-password")},
        confirmField: ()=>{return cy.get("#input-payment-confirm")},
        addressField: ()=>{return cy.get("#input-payment-address-1")},
        cityField: ()=>{return cy.get("#input-payment-city")},
        postCodeField: ()=>{return cy.get("#input-payment-postcode")},
        countryDropdown: ()=>{return cy.get("#input-payment-country")},
        stateDropdown: ()=>{return cy.get("#input-payment-zone")},
        termsConditionsCheck:()=>{return cy.get('#input-agree')},
        privacyPolicyCheck:()=>{return cy.get('#input-account-agree')},
        continueBtn:()=>{return cy.get("#button-save")},
        checkoutItems:()=>{return cy.get("#checkout-cart > table > tbody>tr")},
        checkoutConfirmBtn:()=>{return cy.get('#button-confirm')},
        checkoutSuccessHeading:()=>{return cy.get('#content > h1')},
        addressErrorText:()=>{return cy.get('#payment-address > div:nth-child(3) > div > div')},
        cityErrorText:()=>{return cy.get('#payment-address > div:nth-child(5) > div > div')},
        postCodeErrorText:()=>{return cy.get('#payment-address > div:nth-child(6) > div > div')}
    }

    //Page Actions
    clickGuestCheckoutBtn(){
        this.elements.guestCheckoutRadioBtn().click({force:true});
    }
    typeFirstName(firstname){
        this.elements.firstNameField().type(firstname)
    }
    typeLastName(lastname){
        this.elements.lastNameField().type(lastname)
    }
    newEmail(){
        return `firstp${Date.now() % 1000}@gmail.com`;
    } 
    typeEmail(email){
        return this.elements.emailField().type(email);
    }

    typeTelephone(phone){
        this.elements.telephoneField().type(phone)
    }
    typePassword(pwd){
        this.elements.passwordField().type(pwd)
    }
    typeConfirmPassword(pwd){
        this.elements.confirmField().type(pwd)
    }
    typeAddress(address){
        this.elements.addressField().type(address)
    }
    typeCity(city){
        this.elements.cityField().type(city)
    }
    typepostCode(postcode){
        this.elements.postCodeField().type(postcode)
    }
    selectCountry(countryCode){
        this.elements.countryDropdown().select(countryCode)
    }
    selectState(stateCode){
        this.elements.stateDropdown().select(stateCode);
    }
    fillPersonalDetails(firstname,lastname,email,phone){
        this.typeFirstName(firstname);
        this.typeLastName(lastname);
        this.typeEmail(email);
        this.typeTelephone(phone);
    }
    fillPersonalRegistrationDetails(firstname,lastname,email,phone, pwd, confirmPwd){
        this.typeFirstName(firstname);
        this.typeLastName(lastname);
        this.typeEmail(email);
        this.typeTelephone(phone);
        this.typePassword(pwd);
        this.typeConfirmPassword(confirmPwd);
    }
    fillBillingAddress(address,city ,postcode ,countryCode){
        this.typeAddress(address);
        this.typeCity(city);
        this.typepostCode(postcode);
        this.selectCountry(countryCode);
    }
    agreeTermsConditions(){
        this.elements.termsConditionsCheck().click({force:true});
    }
    agreePrivacyPolicy(){
        this.elements.privacyPolicyCheck().click({force:true});
    }
    clickContinue(){
        this.elements.continueBtn().click();
    }
    clickConfirmOrder(){
        this.elements.checkoutConfirmBtn().click();
    }

}

module.exports = new CheckoutPage();