import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import CalendarPage from '../../support/page_methods/calendar.page.js'

Given("User has launched the Calendar app", ()=> {

    CalendarPage.launchAppURL()

    

}),

When("User clicks the Left navigation arrow", ()=> {


}),

Then("User is able to navigate to the Previous month", ()=>{


}),

When("User clicks the Today button", ()=> {


}),

Then("User is able to navigate to the Current month", ()=>{


}),

When("User clicks the Right navigation arrow", ()=> {


}),

Then("User is able to navigate to the Next month", ()=>{


}),

When("User wants to select a specific month {string}", (month)=> {


}),

Then("User is able to navigate to the required month {string}", (month)=>{


})