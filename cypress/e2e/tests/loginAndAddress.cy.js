import LoginPage from '../../pageObjects/LoginPage';
import AddressPage from '../../pageObjects/AddressPage';

describe("Login and Adding Address", ()=>{


    beforeEach( ()=>{

        cy.visit(Cypress.env('loginpage_url'));
        LoginPage.typeUserName(Cypress.env('USERNAME'));
        LoginPage.typePassword(Cypress.env('PASSWORD'));
        cy.fixture('address.json').as('addressDataValue')

    });
    
    it("Logging into application and add address with default YES", ()=>{ 
        LoginPage.clickLogin();
        cy.get('@addressDataValue').then((data)=>{
            
        data.add.forEach((address) =>{

            AddressPage.createDefaultAddress(
                address.first_name,
                address.last_name,
                address.company,
                address.address1,
                address.address2,
                address.city,
                address.post_code,
                address.country,
                address.region
            )
            AddressPage.verifyAddressAddedSucessfully();
            AddressPage.navigateToAccountPage();
        })
    })
        
    })

    // it("Logging into application and add address with default NO", ()=>{

    //     LoginPage.clickLogin();
    //     AddressPage.createNonDefaultAddress(addressDataValue.add[1].first_name,
    //         addressDataValue.add[1].last_name,
    //         addressDataValue.add[1].company,
    //         addressDataValue.add[1].address1,
    //         addressDataValue.add[1].address2,
    //         addressDataValue.add[1].city,
    //         addressDataValue.add[1].post_code,
    //         addressDataValue.add[1].country,
    //         addressDataValue.add[1].region
    //     )

    // })
})
