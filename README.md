# calendar-cypress-bdd
# Steps to get the scripts working
# 1 - Download the git repo
# 2 - Open Command Prompt / Terminal in Admin mode
# 3 - install cypress using following command
npm install cypress --save-dev

# 4 - Install Cucumber preprocessor for Cypress - IMPORTANT run both of these commands one after the other. Some components differ in both cases
npm i-D cypress-cucumber-preprocessor
npm install cypress cypress-cucumber-preprocessor

# 5 - Install xpath for Cypress - plugin to access elements with xpath locators
npm install -D cypress-xpath

# 6 - Install DayJS - plugin to perform day / date related functions
npm install dayjs --save-dev

# 7 - Install localStorage - plugin to perform actions on browser localStorage to save and restore calendar events data in absence of the backend API
npm i --save-dev cypress-localstorage-commands