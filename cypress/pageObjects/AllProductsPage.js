class AllProductsPage {

    //Page Intercepts


    //Page Elements

    elements = {
        productOneImg:()=>{return cy.get("#mz-product-grid-image-28-212408 > div > div.carousel-item.active > img")},
        productOneAddtoCartBtn: ()=>{return cy.get( "#entry_212408 > div > div:nth-child(1) > div > div.product-thumb-top > div.product-action > button.btn.btn-cart.cart-28")},
        successMssgProductOneAdded:()=>{return cy.get("div > div.toast-body > div.d-flex.mb-3.align-items-start > p")},
        closeBtnAddProduct:()=>{return cy.get("#notification-box-top > div > div.toast-header > button")},
        productTwoImg:()=>{return   cy.get("#mz-product-grid-image-36-212408 > div > div.carousel-item.active > img")},
        productTwoAddtoCartBtn: ()=>{return cy.get( "#entry_212408 > div > div:nth-child(8) > div > div.product-thumb-top > div.product-action > button.btn.btn-cart.cart-36")},
        successMssgProductTwoAdded:()=>{return cy.get("div > div.toast-body > div.d-flex.mb-3.align-items-start > p")},
        checkoutBtn:()=>{return cy.get("#notification-box-top > div > div.toast-body > div.form-row > div:nth-child(2) > a")},
        cartContinueBtn:()=>{return cy.get("#notification-box-top > div > div.toast-body > div.form-row > div:nth-child(1) > a")},
        imgOneSrc:()=>{return `https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/1-270x338.webp`},
        imgTwoSrc:()=>{return `https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/2-270x338.webp`},
        successMssgTextProductOne: ()=>{return `Success: You have added HTC Touch HD to your shopping cart!`},
        successMssgTextProductTwo: ()=>{return `Success: You have added iPod Nano to your shopping cart!`},
        cartIcon:()=>{return cy.get('#entry_217825 > a > div.cart-icon')},
        cartCheckoutBtn:()=>{return cy.get('#entry_217851 > a')},
    }

    //Page Actions
    addProductOne(){
        this.elements.productOneAddtoCartBtn().click({force:true});
    }
    closeAddProductNotification(){
        this.elements.closeBtnAddProduct().click({force:true});
    }
    addProductTwo(){
        this.elements.productTwoAddtoCartBtn().click({force:true});
    }
    clickCheckoutBtn(){
        this.elements.checkoutBtn().click({force:true});
    }
    clickCartContinueBtn(){
        this.elements.cartContinueBtn().click();
    }
    clickCartIcon(){
        this.elements.cartIcon().click();
    }
    clickCartCheckoutBtn(){
        this.elements.cartCheckoutBtn().click();
    }
}


module.exports = new AllProductsPage();