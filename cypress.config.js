const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges:false,
  env: {
    homepage_url: 'https://ecommerce-playground.lambdatest.io',
    loginpage_url: 'https://ecommerce-playground.lambdatest.io/index.php?route=account/login',
    accountpage_url: 'https://ecommerce-playground.lambdatest.io/index.php?route=account/account',
    registration_url: 'https://ecommerce-playground.lambdatest.io/index.php?route=account/register',
    forgotpwd_url: 'https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten',
    register_success_url: 'https://ecommerce-playground.lambdatest.io/index.php?route=account/success',
    productpage_url: 'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=57',
    shoppingcart_url: 'https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart',
    checkoutpage_url: 'https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout',
    checkoutconfirm_url: 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/checkout/confirm',
    checkoutsuccess_url:'https://ecommerce-playground.lambdatest.io/index.php?route=checkout/success',
    USERNAME: "test12@gmail.com",
    PASSWORD: "test1234", 
    WRONG_PASSWORD: "test"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome-reports',
      overwrite: false,
      html: false,
      json: true
    }
  },

});
