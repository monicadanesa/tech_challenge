export class BaseDrops {
    getDropsPlaceHref() {
        return cy.get('a[href*="/nft/drops"]');
    }
    getSearchBoxInput() {
        return cy.get('input[name="searchBox"]');
    }
    getEmailInput() {
        return cy.get('input[name="email"]');
    }
    getSubcribeButton() {
        return cy.contains('Subscribe');
    }
    getSubscriberCheckbox() {
        return cy.get('svg[class= "SubscribeForm_checkbox__z4ChK"]');
    }
}

export const basedrops = new BaseDrops();
