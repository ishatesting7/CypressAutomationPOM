class ShoppingcartPage {
    elements = {
        shoppingcartItems: ()=>{return cy.get("#content > form > div > table > tbody > tr")},
        cartContinueBtn: ()=>{return cy.get("#content > div.buttons.d-flex > a.btn.btn-lg.btn-primary")}
    }
        
        clickCartContinueBtn(){
            this.elements.cartContinueBtn().click();
        }

}

module.exports = new ShoppingcartPage();