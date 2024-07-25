import homePage from '../../pageObjects/homePage'

describe("Home Page Layout Tests", ()=>{
    beforeEach( ()=>{
        cy.visit(Cypress.env('homepage_url'));
    })
    it("Should display Blog link in navigation menu", ()=>{
        homePage.elements.blogLink().should('have.attr', 'href', 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home');
    })
    it("Should display home page banner", ()=>{
        homePage.elements.homePageBanner().should('have.text', 'This is a dummy website for Web Automation Testing' );
    })
    it("Should display all three carousel items", ()=>{
        homePage.elements.allCarousalItems().should('have.length',3);
    })
    it("Should display buy link to product", ()=>{
        homePage.elements.buyItemLink().should('have.attr', 'href', 'https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=32');
    })
})