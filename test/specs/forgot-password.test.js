import forgotPasswordPage from '../pages/forgot-password.page';

describe('Forgot Password', () => {

    it('should be opened', () => {
        forgotPasswordPage.openHomePage();
        forgotPasswordPage.goToRecoverPasswordPage();
    });

    it ('tab title is displayed', () => {
        forgotPasswordPage.tabTitleIsDisplayed();
    });

    describe('Forgot Password Form', () => {

        it('is displayed', () => {
            forgotPasswordPage.forgotPasswordFormIsDisplayed();
        });

        it('has correct title', () => {
            forgotPasswordPage.formTitleIsCorrect();
        });

        it('text block is displayed and correct',() => {
            forgotPasswordPage.textBlockIsDisplayedAndCorrect();
        });

        it ('text block2 is dislayed and correct',() => {
            forgotPasswordPage.textBlock2IsDisplayedAndCorrect();
        });

    });   

    describe('Link forgot username', () => {

        it('is displayed and is correct',() => {
            forgotPasswordPage.forgotUsernameLinkIsDisplayedAndCorrect();
        });  
    
        it('is clickable',() => {
            forgotPasswordPage.forgotUsernameClickable();
        });   

        it('url is correct',() => {
            forgotPasswordPage.usernameUrlIsCorrect();
        });

    });    

});
