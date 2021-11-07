import endpoints from '../../config/endpoints.json';
import { dropsverification } from '../../support/crypto/dropsVerifications';
import { drops } from '../../support/crypto/drops';

describe('Drops test cases', () => {
    before(() => {
        cy.visit(endpoints.NFT.DROPS);
    });
    it('Verify UI on Drops', () => {
        dropsverification.dropsverification();
    });
    it('Verify Random NFT List and Detail NFT Data', () => {
        dropsverification.randomNFTFromJsonVerification();
    });
});
