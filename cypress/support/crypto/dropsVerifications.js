import endpoint from '../../config/endpoints.json';
import mocks from '../crypto/mocks';
import { BaseDrops } from './baseDrops';
const selectorFactory = require('random-selector');

export class dropVerifications extends BaseDrops {
    dropsverification() {
        cy.assertLocationUrl(endpoint.NFT.DROPS);
        this.getSearchBoxInput().should('be.visible').and('not.have.attr', 'disabled');
        this.getEmailInput().should('be.visible').and('not.have.attr', 'disabled');
        this.getSubcribeButton().should('be.visible').and('not.have.attr', 'disabled');
        this.getSubscriberCheckbox().should('be.visible').and('not.have.attr', 'disabled');

        const dropsPage = Object.keys(mocks.DROPS);
        // check visibility text on DROP Page
        dropsPage.forEach((key) => {
            cy.contains(mocks.DROPS[key]).should('be.visible').and('not.have.attr', 'disabled');
        });
    }
    randomNFTFromJsonVerification() {
        cy.readFile('cypress/fixtures/drop.json').then((str) => {
            const selectRandomDrops = selectorFactory.createSimpleSelectorWithoutReplacement(str.data.public.drops);
            const dropsString = selectRandomDrops.select();
            cy.contains(dropsString.name);
            cy.contains(dropsString.creator.displayName);

            cy.contains(dropsString.name)
                .click({ force: true })
                .then(() => {
                    cy.contains(dropsString.name).should('be.visible');
                    cy.contains(dropsString.creator.displayName).should('be.visible');
                    cy.url().should('include', dropsString.id);
                    cy.contains(dropsString.description).should('be.visible');
                });
        });
    }
}

export const dropsverification = new dropVerifications();
