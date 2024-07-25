class AddressPage
{
    //Group of WebElement
    elements = {
        modifyAddressBook:()=>{return cy.get(':nth-child(1) > .card-body > .row > :nth-child(3) > .d-inline-flex')},
        newAddressBtn: ()=>{return cy.get('.float-right > .btn')},
        addressFirstName: ()=>{return cy.get('#input-firstname')},
        addressLastName: ()=>{return cy.get('#input-lastname')},
        addressCompanyName:()=>{return cy.get('#input-company')},
        addressAddressNameLine1:()=>{return  cy.get('#input-address-1')},
        addressAddressNameLine2:()=>{return   cy.get('#input-address-2')},
        addressInputCity:()=>{return cy.get('#input-city')},
        addressPostalCode:()=>{return cy.get('#input-postcode')},
        addressInputCountry:()=>{return cy.get('#input-country')},
        addressInputZone:()=>{return  cy.get('#input-zone')},
        addressDefaultAddressYes: ()=>{ return cy.get('.col-sm-10 > :nth-child(1) > label')},
        addressDefaultAddressNo:()=>{return cy.get('.col-sm-10 > :nth-child(2) > label')},
        addressContinueBtn:()=>{return cy.get('.float-right > .btn')},
        addressBackBtn:()=>{return cy.get('.float-left > .btn')},
        verifyAddressMessage:()=>{return cy.get('#account-address > .alert')}
    }

    //Page Actions

    createDefaultAddress(firstname, lastname, companyname,addressline1,addressline2,cityvalue,post_code,countryvalue,regionvalue)
    {

        this.elements.modifyAddressBook().click();
        this.elements.newAddressBtn().click();
        this.elements.addressFirstName().type(firstname);
        this.elements.addressLastName().type(lastname);
        this.elements.addressCompanyName().type(companyname);
        this.elements.addressAddressNameLine1().type(addressline1);
        this.elements.addressAddressNameLine2().type(addressline2);
        this.elements.addressInputCity().type(cityvalue);
        this.elements.addressPostalCode().type(post_code);
        this.elements.addressInputCountry().select(countryvalue);
        this.elements.addressInputZone().select(regionvalue);
        this.elements.addressDefaultAddressYes().click();
        this.elements.addressContinueBtn().click();
    }

    createNonDefaultAddress(firstname, lastname, companyname,addressline1,addressline2,cityvalue,post_code,countryvalue,regionvalue)
    {

        this.elements.modifyAddressBook().click();
        this.elements.newAddressBtn().click();
        this.elements.addressFirstName().type(firstname);
        this.elements.addressLastName().type(lastname);
        this.elements.addressCompanyName().type(companyname);
        this.elements.addressAddressNameLine1().type(addressline1);
        this.elements.addressAddressNameLine2().type(addressline2);
        this.elements.addressInputCity().type(cityvalue);
        this.elements.addressPostalCode().type(post_code);
        this.elements.addressInputCountry().select(countryvalue);
        this.elements.addressInputZone().select(regionvalue);
        this.elements.addressDefaultAddressNo().click();
        this.elements.addressContinueBtn().click();

    }

    //Assertion On Adding Address
    verifyAddressAddedSucessfully()
    {
        this.elements.verifyAddressMessage().should('have.text', ' Your address has been successfully added')
    }

    navigateToAccountPage()
    {
        cy.visit(Cypress.env('accountpage_url'));
    }


}
module.exports = new AddressPage();