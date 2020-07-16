import BasePage from './base.page';
import {assert} from 'chai';
import selector from '../selectors/home.sel';
import expected from '../expected/home.exp';

class HomePage extends BasePage {

    homePageGreeting() {
        const title = $$(selector.greeting)[0];
        assert.equal(title.getText(), expected.greeting);
    }

    tabTitleIsDisplayed() {
        assert.equal(browser.getTitle(), expected.tabTitle);
    }

    loginFormIsDisplayed() {
        $(selector.loginForm).isDisplayed();
    }

    text1IsDisplayed() {
        const title = $(selector.title3);
        assert.equal(title.getText(), expected.text1);
    }

    text2IsDisplayed() {
        const title = $$(selector.title1)[1];
        assert.equal(title.getText(), expected.text2);
    }

    screenerLinkIsCorrect() {
        const link = $$(selector.links)[0];
        assert.equal(link.getText(), expected.screenerLink);
    }

    forgotTextBlock(){
        const text = $$(selector.forgotText)[1];
        assert.equal(text.getText(), expected.forgotText);
    }

    userNameLinkIsCorrect() {
        const link = $$(selector.links)[1];
        assert.equal(link.getText(), expected.userNameLink);
    }

    passwordLinkIsCorrect() {
        const link = $$(selector.links)[2];
        assert.equal(link.getText(), expected.passwordLink);
    }
    screenerUrlIsCorrect() {
        const link = $$(selector.links)[0];
        assert.equal(link.getAttribute('href'), expected.screenerUrl);
    }

    userNameUrlIsCorrect() {
        const link = $$(selector.links)[1];
        assert.isTrue(link.getAttribute('href').startsWith(expected.userNameUrl));
    }

    passwordUrlIsCorrect() {
        const link = $$(selector.links)[2];
        assert.isTrue(link.getAttribute('href').startsWith(expected.passwordUrl));
    }

    textBlockIsDisplayed() {
        const title = $$(selector.text)[0];
        assert.equal(title.getText(), expected.text);

    }  

    lastTextBlockIsDisplayed() {
        const title = $$(selector.text)[1];
        assert.equal(title.getText(), expected.lastText);
    }  
    
    userNameInputFieldDisplayed() {
        $(selector.userNameInput).isDisplayed();
    }  
    userNameLabelIsDisplayed() {
        const label = $$(selector.labelFor)[0];
        label.isDisplayed();
        assert.equal(label.getText(), expected.userNLabel);
    } 
    passwordInputFieldDisplayed() {
        $(selector.passwordInput).isDisplayed();
    }  
    passwordLabelIsDisplayed() {
        const label = $$(selector.labelFor)[1];
        label.isDisplayed();
        assert.equal(label.getText(), expected.pLabel);
    } 

    loginBtnIsDisplayed() {
        $(selector.loginBtn).isDisplayed();
    }

    loginBtnTitleIsCorrect() {
        const title = $(selector.loginBtn);
        assert.equal(title.getText(), expected.loginBtnTitle);
    }

    inputSymbolsUserName() {
        const username = $(selector.userNameInput);
        username.setValue('Julia');
        assert.equal(username.getValue(), 'Julia');
    }
    eraseSymbolsUserName() {
        const username = $(selector.userNameInput);
        username.setValue('Julia');
        browser.keys('Backspace');
        assert.equal(username.getValue(), 'Juli');
    }

    generateStringWithLength(length) {
        let result = '';
        for (let i = 0; i < length; i++) result += '1';
        return result;
    }

    sendNumberOfKeys(length) {
        for (let i = 0; i < length; i++) browser.keys('1');
    }

    input99Symbols() {
        const username = $(selector.userNameInput);
        username.setValue('');
        this.sendNumberOfKeys(99);
        let string99 = this.generateStringWithLength(99);
        assert.equal(username.getValue(), string99);
    }

    input100Symbols() {
        const username = $(selector.userNameInput);
        username.setValue('');
        this.sendNumberOfKeys(100);
        let string100 = this.generateStringWithLength(100);
        assert.equal(username.getValue(), string100);
    }

    input101Symbols() {
        const username = $(selector.userNameInput);
        username.setValue('');
        this.sendNumberOfKeys(101);
        let string100 = this.generateStringWithLength(100);
        assert.equal(username.getValue(), string100);
    }

    submitEmptyUsername() {
        $(selector.userNameInput).setValue('');
        $(selector.loginBtn).click();
        const errorMessage = $$(selector.errorMessages)[0];
        errorMessage.waitForDisplayed({ timeout: 10000 });
        assert.equal(errorMessage.getText(), expected.userNameIsRequired);
    }
}


export default new HomePage();