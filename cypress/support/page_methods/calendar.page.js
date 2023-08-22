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

        dayValue = dayjs(month).format('DD')
        cy.xpath(calendarLocators.dayTile(dayValue)).click();
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

        dayValue = dayjs(month).format('DD')
        cy.xpath(calendarLocators.dayTile(dayValue)).children().eq(0).should('contain',eventTitle)
        
        if(typeof color === undefined){
            cy.xpath(calendarLocators.dayTile(dayValue)).children().eq(0).invoke('attr','class').should('contain','indigo')
        } else if (colorList.includes(color)) {
            cy.xpath(calendarLocators.dayTile(dayValue)).children().eq(0).invoke('attr','class').should('contain',color)
        } else {
            cy.xpath(calendarLocators.dayTile(dayValue)).children().eq(0).invoke('attr','class').should('contain','indigo')
        }
    }
    

}

export default CalendarPage;