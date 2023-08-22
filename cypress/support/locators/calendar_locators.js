export const PREV_BUTTON = ('//button//*[contains(text(),"chevron_left")]')

export const NEXT_BUTTON = ('//button//*[contains(text(),"chevron_right")]')

export const TODAY_BUTTON = ('//button[contains(text(),"Today")]')

export const MONTH_TITLE = ('//h2')

export const dayTile = (dayValue) =>`//div[header/p[contains(text(),${dayValue})]]/div[contains(@class,"cursor-pointer")]`;

export const dayTileLessThan10 = (dayValue) =>`//div[header/p[contains(text(),"${dayValue}")]]/div[contains(@class,"cursor-pointer")]`;

export const eventTitleTextField = ('//input[@name="title"]')

export const eventDescriptionTextField = ('//input[@name="description"]')

export const eventColorSelectorButton = (color) => `//span[contains(@class,"bg-${color}")]`;

export const eventSaveButton = ('//button[contains(text(),"Save")]')

export const eventDeleteButton = ('//span[contains(text(),"delete")]')

export const existingEventTile = (dayValue, eventTitle) => `//div[header/p[contains(text(),${dayValue})]]/div/*[contains(text(),"${eventTitle}")]`;

export const existingEventTileDateLessThan10 = (dayValue, eventTitle) => `//div[header/p[contains(text(),"${dayValue}")]]/div/*[contains(text(),"${eventTitle}")]`;

//Catendar locators

export const header_h1 = ('//header/h1')

export const header_h3 = ('//header/h3')