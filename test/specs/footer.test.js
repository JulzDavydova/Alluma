import footerPage from '../pages/footer.page';

describe('Footer Page', () => {
    it('first block title is displayed and is correct', () => {
        footerPage.openHomePage();
        footerPage.aboutSite();
    });

    it(' row1 is displayed and is correct', () => {
        footerPage.aboutSiteRow1();
    });
});