import dayjs from "dayjs"
const calendarLocators = require('../../support/locators/calendar_locators')

const now = dayjs()

let currentMonth = now.format('MMMM YYYY')
let previousMonth = now.subtract(1, 'month').format('MMMM YYYY')
let nextMonth = now.add(1,'month').format('MMMM YYYY')
let requiredMonth = ""
let duration = ""
let dayValue = ""
const colorList = ['indigo', 'gray', 'green', 'blue', 'purple', 'red']

class CalendarPage {

     login = (name) => {

        cy.session(name, ()=>{
            cy.restoreLocalStorage()
            cy.visit('http://localhost:3000/')
            cy.title().should("eq",'React App')
            
        },
        {
            validate(){
                cy.title().should("eq",'React App') 
            }
            
        }
        )
        
    }

    launchAppURL() {

        cy.visit('http://localhost:3000/')
        cy.title().should("eq",'React App')
    }

    clickLeftArrow(){

        cy.xpath(calendarLocators.PREV_BUTTON).first().click()
    }

    clickDayTile(month){

        dayValue = (month.toString()).substring(0,2)
        console.log("dayvalue is " + dayValue)
        
       if (dayValue<10){
        cy.xpath(calendarLocators.dayTileLessThan10(dayValue)).first().click();
       } else {
        cy.xpath(calendarLocators.dayTile(dayValue)).last().click();
       }
        
    }

    clickTodayButton(){

        cy.xpath(calendarLocators.TODAY_BUTTON).click();
    }

    clickRightArrow(){

        cy.xpath(calendarLocators.NEXT_BUTTON).first().click()
    }

    verifyPreviousMonth(){

        cy.xpath(calendarLocators.MONTH_TITLE).invoke('text').should("contain", previousMonth)
    }

    verifyCurrentMonth(){

        cy.xpath(calendarLocators.MONTH_TITLE).invoke('text').should("contain", currentMonth)
    }

    verifyNextMonth(){

        cy.xpath(calendarLocators.MONTH_TITLE).invoke('text').should("contain", nextMonth)
    }

    navigateSpecifiedMonth(month) {

        this.clickTodayButton();
        requiredMonth = dayjs(month).format('MMMM YYYY')
        duration = dayjs(currentMonth).diff(dayjs(requiredMonth), 'month')
        console.log ("months duration is " + duration)
        if (duration>0){
            for (let i = 0; i<duration; i++){
                this.clickLeftArrow();
            } 
        }else if (duration<0){
            for (let j = duration; j<0; j++){
                this.clickRightArrow()
            }
        }
    }

    verifyRequiredMonth(){

        cy.xpath(calendarLocators.MONTH_TITLE).invoke('text').should("contain", requiredMonth)
        requiredMonth = ""
        duration = ""
    }

    enterEventTitleText(eventTitle){

        cy.xpath(calendarLocators.eventTitleTextField).type(eventTitle)
    }

    enterEventDescriptionText(eventDescription){

        if(!((eventDescription === undefined)||(eventDescription==null))){
        cy.xpath(calendarLocators.eventDescriptionTextField).type('{backspace}'+eventDescription)
        }
    }

    selectEventColor(color){

        if(typeof color === undefined){
            cy.xpath(calendarLocators.eventColorSelectorButton("indigo")).click()
        } else if (colorList.includes(color)) {
            cy.xpath(calendarLocators.eventColorSelectorButton(color)).click()
        } else {
            cy.xpath(calendarLocators.eventColorSelectorButton("indigo")).click()
        }
    }

    clickEventSaveButton(){

        cy.xpath(calendarLocators.eventSaveButton).click()
    }

    verifyNewlyCreatedEvent(eventTitle, color, month){

        dayValue = (month.toString()).substring(0,2)
        
        if(dayValue<10){

            cy.xpath(calendarLocators.dayTileLessThan10(dayValue)).first().children().eq(0).should('contain',eventTitle)
            
            if(typeof color === undefined){
                cy.xpath(calendarLocators.dayTileLessThan10(dayValue)).first().children().eq(0).invoke('attr','class').should('contain','indigo')
            } else if (colorList.includes(color)) {
                cy.xpath(calendarLocators.dayTileLessThan10(dayValue)).first().children().eq(0).invoke('attr','class').should('contain',color)
            } else {
                cy.xpath(calendarLocators.dayTileLessThan10(dayValue)).first().children().eq(0).invoke('attr','class').should('contain','indigo')
            }

        } else {
            cy.xpath(calendarLocators.dayTile(dayValue)).last().children().eq(0).should('contain',eventTitle)
            
            if(typeof color === undefined){
                cy.xpath(calendarLocators.dayTile(dayValue)).last().children().eq(0).invoke('attr','class').should('contain','indigo')
            } else if (colorList.includes(color)) {
                cy.xpath(calendarLocators.dayTile(dayValue)).last().children().eq(0).invoke('attr','class').should('contain',color)
            } else {
                cy.xpath(calendarLocators.dayTile(dayValue)).last().children().eq(0).invoke('attr','class').should('contain','indigo')
            }

        }
    }

    clickExistingEvent(eventTitle, month) {

        dayValue = (month.toString()).substring(0,2)
        if(dayValue<10){
            cy.xpath(calendarLocators.existingEventTileDateLessThan10(dayValue,eventTitle)).first().click()
        } else {
            cy.xpath(calendarLocators.existingEventTile(dayValue,eventTitle)).last().click()
        }
    }

    verifyExistingEventFormOpened() {

        cy.xpath(calendarLocators.eventDeleteButton).should("be.visible")
    }

    clickEventDeleteButton() {

        cy.xpath(calendarLocators.eventDeleteButton).click()
    }

    verifyEventDeleteSuccessful(eventTitle, month) {

        dayValue = (month.toString()).substring(0,2)

        if (dayValue<10) {
            cy.xpath(calendarLocators.dayTileLessThan10(dayValue)).first().children().should("have.length", 0)
            
        } else {
            cy.xpath(calendarLocators.dayTile(dayValue)).last().children().should("have.length", 0)
           
        }
    }

// Catendar page methods

    verifyHeaderH1Catendar() {

        cy.xpath(calendarLocators.header_h1).should("contain", "Catendar")
    }

    verifyHeaderH3CatFacts() {

        cy.xpath(calendarLocators.header_h3).should("contain", "Did you know that cats have nine lives!")
    }

}

export default CalendarPage;