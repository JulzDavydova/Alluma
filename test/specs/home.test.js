import homePage from '../pages/home.page';

describe('Home Page', () => {
    it('should be opened', () => {
        homePage.openHomePage();
        homePage.homePageIsOpened();
    });

    it ('tab title is displayed', () => {
        homePage.openHomePage();
        homePage.tabTitleIsDisplayed();
    });

    describe('Login Form', () => {
        it('is displayed', () => {
            homePage.openHomePage();
            homePage.loginFormIsDisplayed();
        });

        it('has correct title', () =>{
            homePage.openHomePage();
            homePage.formTitleIsCorrect();
        })
    });
});


