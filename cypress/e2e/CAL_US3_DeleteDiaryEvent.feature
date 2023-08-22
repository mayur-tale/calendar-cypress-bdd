Feature: Delete a Diary event that is no longer required

    As an authenticated user, I want to be able to delete a diary event that has already been created, so that I can remove a diary event that is no longer required

Scenario Outline: As a user, I am able to remove specified events from the diary that are no longer required and verify their successful removal

Given User has launched the Calendar app
When User wants to select a specific month "<month>"
Then User is able to navigate to the required month
When User clicks on the specified event "<eventTitle>" on the specified date "<month>"
Then User is able to see the event window
When User clicks on the Delete button
Then User is no longer able to see the specified event "<eventTitle>" on the specified date "<month>"


Examples:
   | scenario               | month              | eventTitle                            | eventDescription  | color |
   | remove Final Interview | 25 August 2023     | Final Interview Slot 3.30 PM – 4.30 PM|                   | red   |
   | remove Final Interview | 31 August 2023     | Final Interview Slot 3.30 PM – 5.30 PM|                   | red   |