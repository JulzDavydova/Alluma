import homePage from '../pages/home.page';

describe('Home Page', () => {
    it('should be opened', () => {
        homePage.openHomePage();
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

        it('forgot text block is displayed',()=>{
            homePage.forgotTextBlock();
        });

        describe('Screener', () => {
            it('link text is correct',() =>{
                // homePage.openHomePage();
                homePage.screenerLinkIsCorrect();
            });

            it('url is correct',() => {
                // homePage.openHomePage();
                homePage.screenerUrlIsCorrect();
            });
        });

        describe('User Name Input Field', () => {
            it('is displayed', () => {
                homePage.userNameInputFieldDisplayed();
            });

            it('has correct title', () => {
                homePage.userNameLabelIsDisplayed()
            })
        })

        describe('Password Input Field', () => {
            it('is displayed', () => {
                homePage.passwordInputFieldDisplayed();
            });

            it('has correct title', () => {
                homePage.passwordLabelIsDisplayed();
            })
        })

        describe('Remind User Name', () => {
            it('link text is correct',() => {
                // homePage.openHomePage();
                homePage.userNameLinkIsCorrect();
            });

            it('url is correct',() =>{
                // homePage.openHomePage();
                homePage.userNameUrlIsCorrect();
            });
        });

        describe('Remind Password', () => {
            it('link text is correct',() =>{
                // homePage.openHomePage();
                homePage.passwordLinkIsCorrect();
            });

            it('url is correct',() =>{
                // homePage.openHomePage();
                homePage.passwordUrlIsCorrect();
            });
        });

        it('text block is displayed',() =>{
            homePage.textBlockIsDisplayed();
        });

        it('last text block is displayed',() =>{
            homePage.lastTextBlockIsDisplayed();
        });
    });
});


