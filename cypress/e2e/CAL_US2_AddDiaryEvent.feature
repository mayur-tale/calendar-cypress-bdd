Feature: Add a Diary Event

As an authenticated user, I want to be able to add a diary event to the calendar, so that I can keep track of my appointments

Scenario Outline: As a user, I want to be able to add a Diary event for the Screening call with the given date

Given User has launched the Calendar app
When User wants to select a specific month "<month>"
Then User is able to navigate to the required month
When User clicks the given date of month "<month>"
And User enters the event title text as "<eventTitle>"
And User enters the event description text as "<eventDescription>"
And User selects the required event color as "<color>"
And User clicks on the Save button
Then User is able to see the newly created event with title "<eventTitle>" and color "<color>" on the given date "<month>"

Examples:
    | month           | eventTitle                  | eventDescription  | color |
    | 10 August 2023  | Mayur Tale Interview (DONE) |                   |       |
    | 12 August 2023  | test event                  | test descr        | blue  |