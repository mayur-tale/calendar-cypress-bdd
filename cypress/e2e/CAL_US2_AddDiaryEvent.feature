Feature: Add a Diary Event

As an authenticated user, I want to be able to add a diary event to the calendar, so that I can keep track of my appointments

Scenario Outline: 2a - As a user, I want to be able to add a Diary event for the Screening call with the given date
                2b - As a user, I want to be able to add a Diary event for the final interview with the given date

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
   | scenario           | month              | eventTitle                            | eventDescription  | color |
   | 2a Screening       | 10 August 2023     | Mayur Tale Interview (DONE)           |                   |       |
   | 2b Final Interview | 25 August 2023     | Final Interview Slot 3.30 PM – 4.30 PM|                   | red   |
   | 2b Final Interview | 31 August 2023     | Final Interview Slot 3.30 PM – 5.30 PM|                   | red   |
   | 2b Final Interview | 01 September 2023  | Final Interview Slot 3.30 PM – 5.30 PM|                   | red   |