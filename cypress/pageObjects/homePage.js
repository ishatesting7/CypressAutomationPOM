class homePage {
    //Page Elements
    elements = {
        blogLink: ()=>{return cy.get('#widget-navbar-217834>ul>li:nth-child(3)>a')},
        homePageBanner: ()=>{ return cy.get('#entry_217838 > p >strong')},
        allCarousalItems: ()=>{return cy.get('#mz-carousel-213240 > div > div')},
        buyItemLink: ()=>{return cy.get('#entry_213265 > a')}

    }

    //Page Actions


    //Page Assertions
    
}

module.exports = new homePage();