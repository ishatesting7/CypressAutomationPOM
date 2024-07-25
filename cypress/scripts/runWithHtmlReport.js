const cypress = require('cypress')
const fse = require('fs-extra')
const { merge } = require('mochawesome-merge')
const generator = require('mochawesome-report-generator')

async function runTests() {
  const options = {
    files: [
      'cypress/reports/mochawesome-reports/*.json',
    ],
  }
  await fse.remove('cypress/mochawesome-report')
  const { totalFailed } = await cypress.run()
  const jsonReport = await merge(options)
  await generator.create(jsonReport)
  process.exit(totalFailed)
}

runTests()