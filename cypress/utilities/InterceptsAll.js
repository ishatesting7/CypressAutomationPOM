class InterceptAll {
getReqCheckoutPageOne(){
    cy.intercept('GET', 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/total/shipping/country&country_id=222').as('CheckoutPageOneReq');
}
getReqCheckoutPageTwo(){
    cy.intercept('GET', 'https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout/country&country_id=222').as('CheckoutPageTwoRequest');
}
postReqCountryChange(){
    cy.intercept('POST', 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/checkout/address/update').as('countryChangeRequest');
}
getReqCountryCanada(){
    cy.intercept('GET', 'https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout/country&country_id=38').as('countryCanadaRequest');
}
postReqSaveForm(){
    cy.intercept('POST', 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/checkout/save').as('saveFormRequest');
}
getReqOrderConfirm(){
    cy.intercept('GET', 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/payment/cod/confirm').as('orderConfirmRequest');
}
getReqAddNotification(){
    cy.intercept('GET', 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/mz_widget/total/reload&entry_id=217847').as('addItemNotifyRequest');
}
}


module.exports = new InterceptAll();