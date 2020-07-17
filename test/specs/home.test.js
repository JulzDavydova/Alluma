import homePage from '../pages/home.page';

describe('Home Page', () => {
    it('should be opened', () => {
        homePage.openHomePage();
        homePage.homePageGreeting();
    });

    it('tab title is displayed', () => {
        homePage.tabTitleIsDisplayed();
    });

    it ('has a background image', () => {
        homePage.backgroundImage();
    });

    describe('Login Form', () => {

        it('is displayed', () => {
            homePage.loginFormIsDisplayed();
        });

        it('has correct title', () => {
            homePage.formTitleIsCorrect();
        });

        it('greeting has correct title',() => {
            homePage.homePageGreeting();
        });

        it('title3 is displayed',() => {
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
                homePage.userNameLabelIsDisplayed();
            });

            it('input symbols', () => {
                homePage.inputSymbolsUserName();
            });

            it('erase symbols', () => {
                homePage.eraseSymbolsUserName();
            });

            it('99 symbols', () => {
                homePage.input99Symbols();
            });

            it('100 symbols', () => {
                homePage.input100Symbols();
            });

            it('101 symbols', () => {
                homePage.input101Symbols();
            });

            it('throws an error on empty submitting', () => {
                homePage.submitEmptyUsername();
            });



        })

        describe('Password Input Field', () => {
            it('is displayed', () => {
                homePage.passwordInputFieldDisplayed();
            });

            it('has correct title', () => {
                homePage.passwordLabelIsDisplayed();
            })
            it('password input symbols', () => {
                homePage.inputSymbolsPsw();
            });

            it('password erase symbols', () => {
                homePage.eraseSymbolsPsw();
            });

            it('99 symbols psw input field', () => {
                homePage.input99SymbolsPsw();
            });

            it('100 symbols psw input field', () => {
                homePage.input100SymbolsPsw();
            });

            it('101 symbols psw input field', () => {
                homePage.input101SymbolsPsw();
            });

            it('throws an error msg on empty submitting', () => {
                homePage.submitEmptyPsw();
            });

            it('password is obscured', () => {
                homePage.obscuredPsw();
            });

        })

        describe('Remind User Name', () => {
            it('link text is correct',() => {
                homePage.userNameLinkIsCorrect();
            });

            it('url is correct',() => {
                homePage.userNameUrlIsCorrect();
            });
        });

        describe('Remind Password', () => {
            it('link text is correct',() => {
                homePage.passwordLinkIsCorrect();
            });

            it('url is correct',() => {
                homePage.passwordUrlIsCorrect();
            });
        });
        describe('Login', () => {
            it('login button is displayed',() => {
                homePage.loginBtnIsDisplayed();
            });

            it('login button title is correct',() => {
                homePage.loginBtnTitleIsCorrect()
            });
        });

        it('text block is displayed',() => {
            homePage.textBlockIsDisplayed();
        });

        it('last text block is displayed',() =>{
            homePage.lastTextBlockIsDisplayed();
        });
    });
});


