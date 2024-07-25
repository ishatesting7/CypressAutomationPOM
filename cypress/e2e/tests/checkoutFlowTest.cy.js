import AllProductsPage from "../../pageObjects/AllProductsPage";
import ShoppingcartPage from "../../pageObjects/ShoppingcartPage";
import CheckoutPage from "../../pageObjects/CheckoutPage";
import InterceptsAll from "../../utilities/InterceptsAll";
import Utilities from "../../utilities/Utilties"


describe("Checkout Flow Tests", () => {
 
  beforeEach(() => {
  
  cy.visit(Cypress.env("productpage_url"));
  cy.get("#entry_212392 > h1").contains("Tablets");
  
  //Request aliases
  InterceptsAll.getReqCheckoutPageOne();
  InterceptsAll.getReqCheckoutPageTwo();
  InterceptsAll.postReqCountryChange();
  InterceptsAll.getReqCountryCanada();
  InterceptsAll.postReqSaveForm();
  InterceptsAll.getReqAddNotification();

  });
 
  it("Should add multiple items to cart and complete checkout as guest successfully", () => {
    
    // Add to cart Product 1

    // Verify the first product image is displayed correctly
    AllProductsPage.elements.productOneImg().should( "have.attr","src",AllProductsPage.elements.imgOneSrc());
    //Click on the "add to Cart" button
    AllProductsPage.addProductOne();
    //Wait for the notification pop up to load
    cy.wait('@addItemNotifyRequest');
    // Verify success message
    AllProductsPage.elements.successMssgProductOneAdded().should( "have.text", AllProductsPage.elements.successMssgTextProductOne());
    cy.wait(500);
    // close the notification
    AllProductsPage.closeAddProductNotification();

    // Add to cart Product 2

    // Verify second product is displayed correctly
    AllProductsPage.elements.productTwoImg().should("have.attr","title","iPod Nano");
    AllProductsPage.addProductTwo();  //  Click on 'Add to Cart'
    cy.wait('@addItemNotifyRequest'); //Wait for the notification pop up to load
    AllProductsPage.elements.successMssgProductTwoAdded().should("have.text", AllProductsPage.elements.successMssgTextProductTwo());     //Verify success message
    AllProductsPage.clickCheckoutBtn(); //close notification
    
    //Guest Checkout Process on Checkout Page

    //Wait for Checkout Page Request to be made
    cy.wait('@CheckoutPageTwoRequest')
    // Verify the URL 
    cy.url().should("eq",Cypress.env("checkoutpage_url"));
    // Check that there are two items in the cart
    CheckoutPage.elements.checkoutItems().should("have.length", 2);
    //Click guest checkout radio button
    CheckoutPage.clickGuestCheckoutBtn();
    
    //Fill in personal details form
    CheckoutPage.fillPersonalDetails("john","wick",Utilities.newEmail(), "6479112288");

    // Fill in the billing address details form
    CheckoutPage.fillBillingAddress("123 test street", "Toronto", "95112", 41)
    cy.wait('@countryChangeRequest');
    cy.wait('@countryCanadaRequest');
    CheckoutPage.selectState(9);
    cy.wait('@countryChangeRequest');

    //Agree to terms and conditions and submit form
    CheckoutPage.agreeTermsConditions();
    CheckoutPage.clickContinue();
    //Wait for submit POST request to be sent
    cy.wait('@saveFormRequest');

    //Verify confirmation page URL
    cy.url().should('eq', Cypress.env("checkoutconfirm_url"));
    //Confirm order
    CheckoutPage.clickConfirmOrder();
    //Wait for confirmation GET request
    cy.wait('@orderConfirmRequest');
    //Confirm final success page url 
    cy.url().should('eq', Cypress.env("checkoutsuccess_url"));
    //Confirm final success message
    CheckoutPage.elements.checkoutSuccessHeading().should('have.text', ' Your order has been placed!')

  });

  it("should add multiple items to cart and complete checkout with new registration successfully", () => {

    // Select Product 1

    // Verify the first product image is displayed correctly
    AllProductsPage.elements.productOneImg().should( "have.attr","src",AllProductsPage.elements.imgOneSrc());
    //Click on the "add to Cart" button
    AllProductsPage.addProductOne();
    //Wait for the notification pop up to load
    cy.wait('@addItemNotifyRequest');
    // Verify success message
    AllProductsPage.elements.successMssgProductOneAdded().should( "have.text", AllProductsPage.elements.successMssgTextProductOne());
    cy.wait(500);
    // close the notification
    AllProductsPage.closeAddProductNotification();

    // Add Product 2

    // Verify second product is displayed correctly
    AllProductsPage.elements.productTwoImg().should("have.attr","title","iPod Nano");
    //  Click on 'Add to Cart'
    AllProductsPage.addProductTwo();
    //Wait for the notification pop up to load
    cy.wait('@addItemNotifyRequest'); 
    AllProductsPage.elements.successMssgProductTwoAdded().should("have.text", AllProductsPage.elements.successMssgTextProductTwo());     //Verify success message
  
    // Checkout Process on Checkout Page

    //click continue in notification
    AllProductsPage.clickCartContinueBtn();
    //Wait for Checkout Page Request to be made
    cy.wait('@CheckoutPageOneReq');
    // Verify the URL is correct for the cart page
    cy.url().should("eq",Cypress.env("shoppingcart_url"));
    // Check that there are two items in the cart
    ShoppingcartPage.elements.shoppingcartItems().should("have.length", 2);

    // Proceed to checkout page 2
    ShoppingcartPage.clickCartContinueBtn()
    //Wait for edit cart  page two to load
    cy.wait('@CheckoutPageTwoRequest');
    //Register and  Checkout Process
    cy.url().should("eq",Cypress.env("checkoutpage_url"));
    //Verify register radio button is checked 
    cy.get('#input-account-register').check({force: true});
    //Fill in Personal Details in form
    CheckoutPage.fillPersonalRegistrationDetails("john","wick",Utilities.newEmail(), "6479112288", "test1234", "test1234");
    // Fill in billing details form
    CheckoutPage.fillBillingAddress("123 test street", "Toronto", "95112", 41)
    cy.wait('@countryChangeRequest');
    cy.wait('@countryCanadaRequest');
    CheckoutPage.selectState(9);
    cy.wait('@countryChangeRequest');
    CheckoutPage.agreePrivacyPolicy();
    CheckoutPage.agreeTermsConditions();

    //Submit form and Wait for submit POST request to be sent
    CheckoutPage.clickContinue();
    //cy.get("#button-save").click();
    cy.wait('@saveFormRequest');

    //Verify confirmation page URL
    cy.url().should('eq', Cypress.env("checkoutconfirm_url"));     
    //Confirm order
    CheckoutPage.clickConfirmOrder();
    //Wait for confirmation GET request
    cy.wait('@orderConfirmRequest');

    //Confirm final success page url 
    cy.url().should('eq', Cypress.env("checkoutsuccess_url"));
    //Confirm final success message
    CheckoutPage.elements.checkoutSuccessHeading().should('have.text', ' Your order has been placed!')
  });

  it.only("should display error when no payment info entered during checkout", () => {
    
    // Select Product 1

    // Verify the first product image is displayed correctly
    AllProductsPage.elements.productOneImg().should( "have.attr","src",AllProductsPage.elements.imgOneSrc());
    //Click on the "add to Cart" button
    AllProductsPage.addProductOne();
    //Wait for the notification pop up to load
    cy.wait('@addItemNotifyRequest');
    // Verify success message
    AllProductsPage.elements.successMssgProductOneAdded().should( "have.text", AllProductsPage.elements.successMssgTextProductOne());
    cy.wait(500);
    // close the notification
    AllProductsPage.closeAddProductNotification();

    //Checkout from top menu
    AllProductsPage.clickCartIcon();
    AllProductsPage.clickCartCheckoutBtn();
    
    //Verify Checkout page url
    cy.wait('@CheckoutPageTwoRequest');
    cy.url().should('eq', Cypress.env("checkoutpage_url"));
    //Click guest checkout radio button
    CheckoutPage.clickGuestCheckoutBtn();
    //Fill in Personal Details in form
    CheckoutPage.fillPersonalDetails("john","wick",Utilities.newEmail(), "6479112288");

    // leave billing details empty 
    
    // Accept  terms and conditions
    CheckoutPage.agreeTermsConditions();
    //Submit form and Wait for submit POST request to be sent
    CheckoutPage.clickContinue();
    cy.wait('@saveFormRequest');
    
    //Verify  empty fields errors text
    CheckoutPage.elements.addressErrorText().should('have.text', 'Address 1 must be between 3 and 128 characters!'); 
    CheckoutPage.elements.cityErrorText().should('have.text', 'City must be between 2 and 128 characters!'); 
    CheckoutPage.elements.postCodeErrorText().should('have.text', 'Postcode must be between 2 and 10 characters!');
  });

});
//