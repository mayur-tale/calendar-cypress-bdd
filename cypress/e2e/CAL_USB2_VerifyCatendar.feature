Feature: Verify that the text Catendar is shown as the title of the app

    As an unauthenticated user, I want to see the name Catendar instead of Calendar in the header of the app, so that I am aware of the fact that this version of the app is feline-friendly

Scenario: Verify that the text Catendar is shown as the title of the app

Given User has launched the Calendar app
Then User can see the app title as Catendar