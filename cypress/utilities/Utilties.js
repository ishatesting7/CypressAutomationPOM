class Utilities {
    newEmail(){
        return `firstp${Date.now() % 1000}@gmail.com`;
    }
    logEmailAddress(email){
        cy.writeFile("cypress/fixtures/testFile.txt", email + `\n`, {flag: "a+"}).then(() => {
            cy.log("Value has been written to the file successfully.");
            });
    }
}

module.exports = new Utilities();