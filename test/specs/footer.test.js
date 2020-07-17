import footerPage from '../pages/footer.page';

describe('Footer Page', () => {
    it('first block title is displayed and is correct', () => {
        footerPage.openHomePage();
        footerPage.aboutSite();
    });

    it(' row1 is displayed and is correct', () => {
        footerPage.aboutSiteRow1();
    });

    it(' row2 is displayed and is correct', () => {
        footerPage.aboutSiteRow1();
    });

    it('second block title is displayed and is correct', () => {
        footerPage.getHelp();
    });

    it('phone number is displayed and is correct', () => {
        footerPage.phoneNum();
    });

    it('email is displayed and is correct', () => {
        footerPage.getHelp();
    });

    it('fax is displayed and is correct', () => {
        footerPage.getHelp();
    });

    it('third block title is displayed and is correct', () => {
        footerPage.stayInTouch();
    });

    it('fb icon is displayed', () => {
        footerPage.iconFb();   
    });

    it('twitter icon is displayed', () => {
        footerPage.iconFb();   
    });

    it('linkedin icon is displayed', () => {
        footerPage.iconIn();   
    });

    it('logo is displayed', () => {
        footerPage.logo();   
    });

    it('text1 is displayed and is correct', () => {
        footerPage.text1();   
    });

    it('link is displayed and is correct', () => {
        footerPage.linkAlluma();   
    });

    it('text2 is displayed and is correct', () => {
        footerPage.text2();   
    });

    it('text3 is displayed and is correct', () => {
        footerPage.text3();   
    });

    it('text4 is displayed and is correct', () => {
        footerPage.text4();   
    });
});