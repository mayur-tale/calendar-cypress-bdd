const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'hierarchy',
  jsonDir: 'cypress/reports/cucumber-json',
  output: 'cypress/reports/html_simple/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  scenarioTimestamp: true
};

reporter.generate(options);
