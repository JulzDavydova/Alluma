import BasePage from './base.page';
import homePage from './home.page';
import {assert} from 'chai';
import selector from '../selectors/forgot-user-name.sel';
import expected from '../expected/forgot-user-name.exp';

class ForgotUsernamePage extends BasePage {

    goToRecoverUsernamePage() {
        this.openHomePage();
        homePage.clickForgotUsenameLink();
        $(selector.recoverTitle).waitForDisplayed({ timeout: 10000 });
    }

    tabTitleIsDisplayed() {
        assert.equal(browser.getTitle(), expected.tabTitle);
    }

    recoverUsernameFormIsDisplayed() {
        $(selector.recoverUsernameForm).isDisplayed();
    }

    textBlockIsDisplayedCorrectly() {
        const title = $(selector.recoverTitle);
        title.isDisplayed();
        assert.equal(title.getText(), expected.title);
    }

    emailLabelIsDisplayedCorrectly() {
        const label = $$(selector.labelFor)[0];
        label.isDisplayed();
        assert.equal(label.getText(), expected.inputFieldTitle);
    } 

    emailInputFieldDisplayed() {
        $(selector.emailInput).isDisplayed();
    } 

    inputSymbolsEmail() {
        const email = $(selector.emailInput);
        email.setValue('456Password');
        assert.equal(email.getValue(), '456Password');
    }
    eraseSymbolsEmail() {
        const email = $(selector.emailInput);
        email.setValue('Davydova');
        browser.keys('Backspace');
        assert.equal(email.getValue(), 'Davydov');
    }

    input199SymbolsEmail() {
        const email = $(selector.emailInput);
        email.setValue('');
        this.sendNumberOfKeys(199);
        let string199 = this.generateStringWithLength(199);
        assert.equal(email.getValue(), string199);
    }

    input200SymbolsEmail() {
        const email = $(selector.emailInput);
        email.setValue('');
        this.sendNumberOfKeys(200);
        let string200 = this.generateStringWithLength(200);
        assert.equal(email.getValue(), string200);
    }

    input201Symbols() {
        const email = $(selector.emailInput);
        email.setValue('');
        this.sendNumberOfKeys(201);
        let string200 = this.generateStringWithLength(200);
        assert.equal(email.getValue(), string200);
    }

    submitEmptyEmail() {
        $(selector.emailInput).setValue('');
        $$(selector.buttons)[1].click();
        const errorMessage = $$(selector.errorMessages)[0];
        errorMessage.waitForDisplayed({ timeout: 10000 });
        assert.equal(errorMessage.getText(), expected.errorMsg);
    }

    backLoginBtnIsDisplayed() {
        $$(selector.buttons)[0].isDisplayed();
    }
    backLoginBtnTitleIsCorrect() {
        const title = $$(selector.buttons)[0];
        assert.equal(title.getText(), expected.btnBackTitle);
    }

    recoverBtnIsDisplayed() {
        $$(selector.buttons)[1].isDisplayed();
    }   

    recoverBtnTitleIsCorrect() {
        const title = $$(selector.buttons)[1];
        assert.equal(title.getText(), expected.btnRecoverTitle);
    }  

    forgotPasswordIsDisplayed() {
        $(selector.link).isDisplayed();
    } 

    forgotPasswordLinkIsCorrect() {
        const link = $(selector.link);
        assert.equal(link.getText(), expected.linkText);  
    }

    forgotPasswordIsClickable() {
        const link = $(selector.link);
        link.isClickable();
    }  

    passwordUrlIsCorrect() {
        const link = $(selector.link);
        assert.isTrue(link.getAttribute('href').includes(expected.passwordUrl));
    }

}



export default new ForgotUsernamePage();