const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demoqa.com/',
    video: false,
    screenshotOnRunFailure: false,
    watchForFileChanges: false,
    retries: 0
  },
});
