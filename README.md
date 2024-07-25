# Cypress POM Project One

A project demonstrating the use of Cypress with the Page Object Model (POM) design pattern for end-to-end testing.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Introduction

This project aims to showcase how to structure and write end-to-end tests using Cypress and the Page Object Model (POM) design pattern. POM is a design pattern that helps create a clear structure for the test code by separating the representation of the page (Page Objects) from the test scripts.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/ishatesting7/CypressAutomationPOM.git
   cd cypress-pom-projectone
2. Install dependencies:
   ```sh
   npm install
3. Project Structure
   The project structure is organized as follows:

   ```sh
         cypress-pom-projectone/
      ├── cypress/
      │   ├── fixtures/
      │   ├── integration/
      │   │   └── tests/
      │   │       └── exampleTest.cy.js
      │   ├── pageObjects/
      │   │   └── shoppingCartPage.js
      │   ├── plugins/
      │   ├── support/
      │   │   ├── commands.js
      │   │   └── index.js
      ├── .gitignore
      ├── cypress.json
      ├── package.json
      └── README.md
   
- cypress/fixtures: Contains test data files.
- cypress/integration/tests: Contains the test files.
- cypress/pageObjects: Contains the Page Object Model files.
- cypress/plugins: Contains plugin configurations.
- cypress/support: Contains custom commands and global configurations.

Running Tests
To run the Cypress tests, use the following commands:

1. Open Cypress Test Runner:
   ```
   npx cypress open
2. Run tests in headless mode:
   ```
   npx cypress run

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

## Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

License

Distributed under the MIT License. See LICENSE for more information.
