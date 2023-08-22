export const PREV_BUTTON = ('//button//*[contains(text(),"chevron_left")]')

export const NEXT_BUTTON = ('//button//*[contains(text(),"chevron_right")]')

export const TODAY_BUTTON = ('//button[contains(text(),"Today")]')

export const MONTH_TITLE = ('//h2')

export const dayTile = (dayValue) =>`//div[header/p[contains(text(),${dayValue})]]/div`;

export const eventTitleTextField = ('//input[@name="title"]')

export const eventDescriptionTextField = ('//input[@name="description"]')

export const eventColorSelectorButton = (color) => `//span[contains(@class,"bg-${color}")]`;

export const eventSaveButton = ('//button[contains(text(),"Save")]')

export const eventDeleteButton = ('//span[contains(text(),"delete")]')