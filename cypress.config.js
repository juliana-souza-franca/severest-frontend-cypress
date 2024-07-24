const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev/login',
    baseUrl: 'http://localhost:3000',
    integrationFolder: 'cypress/integration',
    fixturesFolder: 'cypress/fixtures',
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },


  },

   
});
