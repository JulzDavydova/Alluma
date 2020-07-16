import homePage from '../pages/home.page';

describe('Home Page', () => {
    homePage.openHomePage();

    it('should be opened', () => {
        // homePage.openHomePage();
        homePage.homePageGreeting();
    });

    it ('tab title is displayed', () => {
        // homePage.openHomePage();
        homePage.tabTitleIsDisplayed();
    });

    describe('Login Form', () => {

        it('is displayed', () => {
            // homePage.openHomePage();
            homePage.loginFormIsDisplayed();
        });

        it('has correct title', () =>{
            // homePage.openHomePage();
            homePage.formTitleIsCorrect();
        });

        it('greeting has correct title',() =>{
            // homePage.openHomePage();
            homePage.homePageGreeting();
        });

        it('title3 is displayed',() =>{
            // homePage.openHomePage();
            homePage.text1IsDisplayed();
        });

        it('title4 is displayed',() =>{
            // homePage.openHomePage();
            homePage.text2IsDisplayed();
        });

        it('screener link is correct',() =>{
            // homePage.openHomePage();
            homePage.screenerLinkIsCorrect();
        });

        it('user name link is correct',() =>{
            // homePage.openHomePage();
            homePage.userNameLinkIsCorrect();
        });

        it('password link is correct',() =>{
            // homePage.openHomePage();
            homePage.passwordLinkIsCorrect();
        });

        it('screener url is correct',() =>{
            // homePage.openHomePage();
            homePage.screenerUrlIsCorrect();
        });

        it('user name url is correct',() =>{
            // homePage.openHomePage();
            homePage.userNameUrlIsCorrect();
        });

        it('password url is correct',() =>{
            // homePage.openHomePage();
            homePage.passwordUrlIsCorrect();
        });
    });
});


