const { defineConfig } = require("cypress");
///const Mochawesome = require("mochawesome");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    reporter: "mochawesome",
    reporterOptions: {
      charts: true, // disable overwrite to generate many JSON reports
      overwrite: false, // do not generate intermediate HTML reports
      html: false, // generate intermediate JSON reports
      json: true,
      reportDir: "cypress/reports",
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
