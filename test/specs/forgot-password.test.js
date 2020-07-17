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

    describe('Username Input Field', () => {

        it('username label is displayed and is correct',() => {
            forgotPasswordPage.usernameLabelIsDisplayedCorrectly();
        });

        it('username input field is displayed',() => {
            forgotPasswordPage.usernameInputFieldDisplayed();
        });

        it('username input field has a user icon',() => {
            forgotPasswordPage.usernameInputFieldHasAUserIcon();
        });

        it('username input symbols',() => {
            forgotPasswordPage.inputSymbolsUsername();
        });

        it('username erase symbols',() => {
            forgotPasswordPage.eraseSymbolsUsername();
        });

        it('input 99 symbols username field',() => {
            forgotPasswordPage.input99SymbolsUsername();
        });

        it('input 100 symbols username field',() => {
            forgotPasswordPage.input100SymbolsUsername();
        });

        it('input 101 symbols username field',() => {
            forgotPasswordPage.input101SymbolsUsername();
        });

        it('submit empty username',() => {
            forgotPasswordPage.submitEmptyUsername();
        });

    });   

    describe('Buttons', () => {

        describe('Cancel', () => {
            it('is displayed',() => {
                forgotPasswordPage.cancelBtnIsDisplayed();
            });  

            it('has correct title',() => {
                forgotPasswordPage.cancelBtnTitleIsCorrect();
            }); 

            it('redirects to home page',() => {
                forgotPasswordPage.cancelBtnRedirectsToHomePage();
            }); 
        });

        describe('Continue', () => {
            it('is displayed',() => {
                forgotPasswordPage.continueBtnIsDisplayed();
            });  

            it('has correct title',() => {
                forgotPasswordPage.continueBtnTitleIsCorrect();
            });  

            it('shows success message on valid submit',() => {
                forgotPasswordPage.continueBtnValidSubmit();
            });
        });
    });

    describe('Email sent block', () => {
        it('has a correct title', () => {
            forgotPasswordPage.hasAnEmailSentTitle();
        });

        it('has a correct success message', () => {
            forgotPasswordPage.hasSuccessMessage();
        });

        describe('Resend The Email block', () => {
            it('has a correct title', () => {
                forgotPasswordPage.resendEmailBlockHasTitle();
            });
    
            it('has a correct resend the email message', () => {
                forgotPasswordPage.resendEmailBlockHasMessage();
            });

            describe('Resend the email button', () => {
                it('has a correct title', () => {
                    forgotPasswordPage.resendEmailButtonHasTitle();
                });
        
                it('shows a success message on submit', () => {
                    forgotPasswordPage.resendEmailButtonSubmit();
                });
            });

            describe('Back to Login button', () => {
                it('has a correct title', () => {
                    forgotPasswordPage.backToLoginButtonTitle();
                });
        
                it('redirects to home page', () => {
                    forgotPasswordPage.backToLoginButtonSubmit();
                });
            });
        });
    });
});
