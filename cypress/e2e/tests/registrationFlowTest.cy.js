import RegisterPage from "../../pageObjects/RegisterPage";
import Utilties from "../../utilities/Utilties";

describe("Registration Flow Tests", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("registration_url"));
  });

  it("Should successfully register with Newsletter option", () => {
    RegisterPage.fillFormDetails("simtest", "person", Utilties.newEmail(), "6471231234", "test1234", "test1234");
    RegisterPage.subcribeNewsletterAndContinue();
    RegisterPage.elements.pageUrl().should("eq", Cypress.env("register_success_url"));
    RegisterPage.elements.accountSuccessHeading().should(
      "have.text",
      " Your Account Has Been Created!"
    );
  });
  it("Should successfully register without Newsletter option", () => {
    RegisterPage.fillFormDetails("simtest", "person", Utilties.newEmail(), "6471231234", "test1234", "test1234");
    RegisterPage.unsubcribeNewsletterAndContinue();
    RegisterPage.elements.pageUrl().should("eq", Cypress.env("register_success_url"));
    RegisterPage.elements.accountSuccessHeading().should(
      "have.text",
      " Your Account Has Been Created!"
    );
  });
  it.only("Should not register on entering mismatched passwords", ()=>{
    RegisterPage.fillFormDetails("simtest", "person", Utilties.newEmail(), "6471231234", "test1234", "test1235");
    RegisterPage.subcribeNewsletterAndContinue();
    RegisterPage.elements.mismatchPasswordMssg().should('have.text', 'Password confirmation does not match password!');
  });
  it("Should display correct error messages on submitting empty registration form", ()=>{
      RegisterPage.clickContinue();
      RegisterPage.elements.noFirstNameErr().should('have.text', 'First Name must be between 1 and 32 characters!');
      RegisterPage.elements.noLastNameErr().should('have.text', 'Last Name must be between 1 and 32 characters!');
      RegisterPage.elements.noEmailErr().should('have.text', 'E-Mail Address does not appear to be valid!');
      RegisterPage.elements.noTelephoneErr().should('have.text', 'Telephone must be between 3 and 32 characters!');
      RegisterPage.elements.passwordErr().should('have.text', 'Password must be between 4 and 20 characters!');

  });
  it("Should display the correct error message on not agreeing to privacy policy", ()=>{
    RegisterPage.fillFormDetails("simtest", "person", Utilties.newEmail(), "6471231234", "test1234", "test1234");
    RegisterPage.clickContinue();
    RegisterPage.elements.privacyPolicyErr().should('have.text', ' Warning: You must agree to the Privacy Policy!');
  })
});
