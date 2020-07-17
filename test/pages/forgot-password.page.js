import BasePage from './base.page';
import homePage from './home.page';
import {assert} from 'chai';
import selector from '../selectors/forgot-password.sel';
import expected from '../expected/forgot-password.exp';

class ForgotPasswordPage extends BasePage {

    goToRecoverPasswordPage() {
        this.openHomePage();
        homePage.clickForgotPasswordLink();
        $(selector.forgotTitle).waitForDisplayed({ timeout: 10000 });
    }

    tabTitleIsDisplayed() {
        assert.equal(browser.getTitle(), expected.tabTitle);
    }

    forgotPasswordFormIsDisplayed() {
        $(selector.forgotPswForm).isDisplayed();
    }

    textBlockIsDisplayedAndCorrect() {
        const title = $(selector.forgotTitle);
        title.isDisplayed();
        assert.equal(title.getText(), expected.title);
    }

    textBlock2IsDisplayedAndCorrect() {
        const title = $(selector.textBlock);
        title.isDisplayed();
        assert.equal(title.getText(), expected.textBlock);
    }
    forgotUsernameLinkIsDisplayedAndCorrect() {
        const link = $(selector.link);
        link.isDisplayed();
        assert.equal(link.getText(), expected.linkText);  
    }

    forgotUsernameClickable() {
        const link = $(selector.link);
        link.isClickable();
    }  

    usernameUrlIsCorrect() {
        const link = $(selector.link);
        assert.isTrue(link.getAttribute('href').includes(expected.usernameUrl));
    }

    usernameLabelIsDisplayedCorrectly() {
        const label = $(selector.labelFor);
        label.isDisplayed();
        assert.equal(label.getText(), expected.userNameFieldTitle);
    } 

    usernameInputFieldDisplayed() {
        $(selector.usernameInput).isDisplayed();
    } 

    usernameInputFieldHasAUserIcon() {
        const userIcon = $(selector.userIcon);
        assert.equal(userIcon.getAttribute('d'), expected.userIcon);
    }

    inputSymbolsUsername() {
        const username = $(selector.usernameInput);
        username.setValue('Allum');
        assert.equal(username.getValue(), 'Allum');
    }
    eraseSymbolsUsername() {
        const username = $(selector.usernameInput);
        username.setValue('Ukrainian');
        browser.keys('Backspace');
        assert.equal(username.getValue(), 'Ukrainia');
    }

    input99SymbolsUsername() {
        const username = $(selector.usernameInput);
        username.setValue('');
        this.sendNumberOfKeys(99);
        let string99 = this.generateStringWithLength(99);
        assert.equal(username.getValue(), string99);
    }

    input100SymbolsUsername() {
        const username = $(selector.usernameInput);
        username.setValue('');
        this.sendNumberOfKeys(100);
        let string100 = this.generateStringWithLength(100);
        assert.equal(username.getValue(), string100);
    }

    input101SymbolsUsername() {
        const username = $(selector.usernameInput);
        username.setValue('');
        this.sendNumberOfKeys(101);
        let string200 = this.generateStringWithLength(100);
        assert.equal(username.getValue(), string200);
    }

    submitEmptyUsername() {
        $(selector.usernameInput).setValue('');
        $$(selector.btns)[1].click();
        const errorMessage = $(selector.errorMessages);
        errorMessage.waitForDisplayed({ timeout: 10000 });
        assert.equal(errorMessage.getText(), expected.errorMsg);
    }

    cancelBtnIsDisplayed() {
        $$(selector.btns)[0].isDisplayed();
    }
    
    cancelBtnTitleIsCorrect() {
        const title = $$(selector.btns)[0];
        assert.equal(title.getText(), expected.btnCancel);
    }

    cancelBtnRedirectsToHomePage() {
        $$(selector.btns)[0].click();
        this.onHomePage();
        this.goToRecoverPasswordPage();
    }

    continueBtnIsDisplayed() {
        $$(selector.btns)[1].isDisplayed();
    }   

    continueBtnTitleIsCorrect() {
        const title = $$(selector.btns)[1];
        assert.equal(title.getText(), expected.btnContinue);
    }

    continueBtnValidSubmit() {
        $(selector.usernameInput).setValue('Julia');
        $$(selector.btns)[1].click();
        const emailSentTitle = $(selector.emailSentTitle);
        emailSentTitle.waitForDisplayed({ timeout: 10000 });
        assert.equal(emailSentTitle.getText(), expected.emailSentTitle);
    }

    hasAnEmailSentTitle() {
        assert.equal($(selector.emailSentTitle).getText(), expected.emailSentTitle);
    }

    hasSuccessMessage() {
        const successMessage = $(selector.successMessage);
        successMessage.isDisplayed();
        assert.equal(successMessage.getText(), expected.successMessage);
    }

    resendEmailBlockHasTitle() {
        const title = $$(selector.resendEmailTitle)[1];
        title.isDisplayed();
        assert.equal(title.getText(), expected.resendEmailTitle);
    }

    resendEmailBlockHasMessage() {
        const message = $(selector.resendEmailMessage);
        message.isDisplayed();
        assert.equal(message.getText(), expected.resendEmailMessage);
    }

    resendEmailButtonHasTitle() {
        const button = $(selector.resendEmailButton);
        button.isDisplayed();
        assert.equal(button.getText(), expected.resendEmailButton);
    }

    resendEmailButtonSubmit() {
        $(selector.resendEmailButton).click();
        const emailSentTitle = $(selector.emailSentTitle);
        emailSentTitle.waitForDisplayed({ timeout: 10000 });
        assert.equal(emailSentTitle.getText(), expected.emailSentTitle);
    }

    backToLoginButtonTitle() {
        const button = $(selector.backToLoginButton);
        button.isDisplayed();
        assert.equal(button.getText(), expected.backToLoginButton);
    }

    backToLoginButtonSubmit() {
        $(selector.backToLoginButton).click();
        this.onHomePage();
    }

}



export default new ForgotPasswordPage();