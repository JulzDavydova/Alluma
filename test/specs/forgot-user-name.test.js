import forgotUserNamePage from '../pages/forgot-user-name.page';

describe('Forgot Username', () => {
    it('should be opened', () => {
        forgotUserNamePage.openHomePage();
        forgotUserNamePage.goToRecoverUsernamePage();
    });

    it ('tab title is displayed', () => {
        forgotUserNamePage.tabTitleIsDisplayed();
    });

    it ('has a background image', () => {
        forgotUserNamePage.backgroundImage();
    });

    describe('Recover Username Form', () => {

        it('is displayed', () => {
            forgotUserNamePage.recoverUsernameFormIsDisplayed();
        });

        it('has correct title', () => {
            forgotUserNamePage.formTitleIsCorrect();
        });

        it('has correct text block',() => {
            forgotUserNamePage.textBlockIsDisplayedCorrectly();
        });  

        describe('Email Input Field', () => {

            it('email label is displayed and is correct',() => {
                forgotUserNamePage.emailLabelIsDisplayedCorrectly();
            });
    
            it('email input field is displayed',() => {
                forgotUserNamePage.emailInputFieldDisplayed();
            });
    
            it('email input has an user icon',() => {
                forgotUserNamePage.emailInputHasAnUserIcon();
            });

            it('email input symbols',() => {
                forgotUserNamePage.inputSymbolsEmail();
            });

            it('email erase symbols',() => {
                forgotUserNamePage.eraseSymbolsEmail();
            });

            it('input 199 symbols email field',() => {
                forgotUserNamePage.input199SymbolsEmail();
            });

            it('input 200 symbols email field',() => {
                forgotUserNamePage.input200SymbolsEmail();
            });

            it('input 201 symbols email field',() => {
                forgotUserNamePage.input201Symbols();
            });

            it('submit empty email',() => {
                forgotUserNamePage.submitEmptyEmail();
            });

            it('cannot submit email with no @',() => {
                forgotUserNamePage.noSubmitWithNoAt();
            });

            it('cannot submit email with no characters after @',() => {
                forgotUserNamePage.noSubmitWithNoCharsAfterAt();
            });

        });    
             
                 
        describe('Buttons', () => {

            describe('Back to Login', () => {
                it('is displayed',() => {
                    forgotUserNamePage.backLoginBtnIsDisplayed();
                });  

                it('has correct title',() => {
                    forgotUserNamePage.backLoginBtnTitleIsCorrect();
                }); 

                it('redirects to home page',() => {
                    forgotUserNamePage.backLoginBtnRedirectsToHomePage();
                    forgotUserNamePage.openHomePage();
                    forgotUserNamePage.goToRecoverUsernamePage();
                });
            }); 

            describe('Recover Username', () => {
                it('recover username is displayed',() => {
                    forgotUserNamePage.recoverBtnIsDisplayed();
                });  

                it('recover username has correct title',() => {
                    forgotUserNamePage.recoverBtnTitleIsCorrect();
                });  

                it('shows success message after successful submit',() => {
                    forgotUserNamePage.recoverBtnSubmitSuccess();
                    forgotUserNamePage.openHomePage();
                    forgotUserNamePage.goToRecoverUsernamePage();
                });  
            }); 

        });    

        describe('Link forgot password', () => {

            it('is displayed',() => {
                forgotUserNamePage.forgotPasswordIsDisplayed();
            });  
    
            it('is correct',() => {
                forgotUserNamePage.forgotPasswordLinkIsCorrect();
            }); 
    
            it('is clickable',() => {
                forgotUserNamePage.forgotPasswordIsClickable();
            });   

            it('url is correct',() => {
                forgotUserNamePage.passwordUrlIsCorrect();
            });

        });    
    });  
                   
});
