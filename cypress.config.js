const { defineConfig } = require("cypress");
const { MochaAllureReporter } = require('mocha-allure-reporter');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev/login',

  
    

    setupNodeEvents(on, config) {
     
     
    },



  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  video: true,
  videoCompression: false,
  videosFolder: 'cypress/videos',
  defaultCommandTimeout: 10000,
  fixturesFolder: 'cypress/fixtures',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true

  }}
})
 



 
   

