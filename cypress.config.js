const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor",cucumber());
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    
    },
    specPattern: "cypress/e2e/**/*.feature",
    testIsolation: false,
    video: false
  },
});
