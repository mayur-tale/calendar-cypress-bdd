import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import CalendarPage from '../../support/page_methods/calendar.page.js'

const CalendarPg = new CalendarPage;
Given("User has launched the Calendar app", ()=> {

    CalendarPg.login('User1');    
    CalendarPg.clickTodayButton()


}),

When("User clicks the Left navigation arrow", ()=> {

    CalendarPg.clickLeftArrow();    

}),

Then("User is able to navigate to the Previous month", ()=>{

    CalendarPg.verifyPreviousMonth();

}),

When("User clicks the Today button", ()=> {

    CalendarPg.clickTodayButton();

}),

Then("User is able to navigate to the Current month", ()=>{

    CalendarPg.verifyCurrentMonth();

}),

When("User clicks the Right navigation arrow", ()=> {

    CalendarPg.clickRightArrow();

}),

Then("User is able to navigate to the Next month", ()=>{

    CalendarPg.verifyNextMonth();

}),

When("User wants to select a specific month {string}", (month)=> {

    
    CalendarPg.navigateSpecifiedMonth(month);

}),

Then("User is able to navigate to the required month", ()=>{

    CalendarPg.verifyRequiredMonth()

}),

When("User clicks the given date of month {string}", (month) =>{

    CalendarPg.clickDayTile(month)

}),

And("User enters the event title text as {string}", (eventTitle) =>{

    CalendarPg.enterEventTitleText(eventTitle)
}),

And("User enters the event description text as {string}", (eventDescription) =>{

    CalendarPg.enterEventDescriptionText(eventDescription)
}),

And("User selects the required event color as {string}", (color) =>{

    CalendarPg.selectEventColor(color)
}),

And("User clicks on the Save button", () =>{

    CalendarPg.clickEventSaveButton()
}),

Then("User is able to see the newly created event with title {string} and color {string} on the given date {string}", (eventTitle, color, month) =>{

    CalendarPg.verifyNewlyCreatedEvent(eventTitle,color,month)
})