# calendar-cypress-bdd
# This project uses a sample react native Calendar app as application-under-test (AUT)

link to the AUT - https://github.com/mayur-tale/react-js-calendar-app

Steps to get the scripts working

1 - Download the git repo

2 - Open Command Prompt / Terminal in Admin mode

3 - install cypress using following command

```
 npm install cypress --save-dev
```
4 - Install Cucumber preprocessor for Cypress - IMPORTANT run both of these commands one after the other. Some components differ in both cases

4a - command 1
```
 npm i -D cypress-cucumber-preprocessor
```
4b - command 2
```
 npm install cypress cypress-cucumber-preprocessor
```

5 - Install xpath for Cypress - plugin to access elements with xpath locators
```
npm install -D cypress-xpath
```
6 - Install DayJS - plugin to perform day / date related functions
```
npm install dayjs --save-dev
```
7 - Install localStorage - plugin to perform actions on browser localStorage to save and restore calendar events data in absence of the backend API
```
npm i --save-dev cypress-localstorage-commands
```
8 - Install html reporter

    npm install cucumber-html-reporter --save-dev

To generate html report after running tests

    npm run htmlreport

To launch Cypress in Open mode (Open mode allows to select specs manually and then runs the selected spec)
```
npx cypress open
```
To launch Cypress in Run mode (Run mode does not allow spec selection after launch, specs can be specified in the launch command, default run is in headless mode, but --headed will run in the default browser Electron. More run options can be used to define other browsers, specific specs etc)
```
npx cypress run --headed

