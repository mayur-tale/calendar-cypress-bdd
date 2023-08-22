Feature: Diary View

Scenario Outline: As an unauthenticated user, I want to be able to click through the months of the year, so that I can view all the days of the month

Given User has launched the Calendar app
When User clicks the Left navigation arrow
Then User is able to navigate to the Previous month
When User clicks the Today button
Then User is able to navigate to the Current month
When User clicks the Right navigation arrow
Then User is able to navigate to the Next month
When User wants to select a specific month "<month>"
Then User is able to navigate to the required month

Examples:
    | month         |
    | January 2021  |
    | December 2023 |
    | August 2023   |
