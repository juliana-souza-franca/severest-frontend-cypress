const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev/login',
    

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },



  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  video: true,
  videoCompression: false,
  videosFolder: 'cypress/videos',
  defaultCommandTimeout: 10000,
  fixturesFolder: 'cypress/fixtures'
  },

 
   
});
