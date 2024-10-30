Feature: Edit a Diary event

    As an authenticated user, I want to be able to Edit a diary event 

Scenario Outline: As a user, I am able to edit specified events 

Given User has launched the Calendar app
When User wants to select a specific month "<month>"
Then User is able to navigate to the required month
When User clicks on the specified event "<eventTitle>" on the specified date "<month>"
Then User is able to see the event window
When User updates the eventTitle "<eventTitle>"
When User updates the eventDescription "<eventDescription>"
When User updates the color "<color>"
And User clicks on the Save button
Then User is able to see the edited event with title "<eventTitle>" and color "<color>" on the given date "<month>"


Examples:
   | scenario               | month              | eventTitle                            | eventDescription  | color |
   | remove Final Interview | 25 August 2023     | Final Interview Slot 3.30 PM – 4.30 PM|                   | indigo   |
   | remove Final Interview | 31 August 2023     | Final Interview Slot 3.30 PM – 5.30 PM|                   | green   |