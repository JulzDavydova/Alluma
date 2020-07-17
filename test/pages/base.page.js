import selector from '../selectors/base.sel';
import expected from '../expected/base.exp';
import {assert} from 'chai';

class BasePage {

    openHomePage() {
        browser.url('/');
        this.onHomePage();
    }

    onHomePage() {
        const loginButton = $('button.gg-btn[value="login"]');
        loginButton.waitForDisplayed({ timeout: 10000 });
    }

    backgroundImage() {
        assert.equal($(selector.backgroungImg).getCSSProperty('background-image').value, expected.backgroungImg);
    }
    
    formTitleIsCorrect() {
       const title = $$(selector.formTitle)[0];
       assert.equal (title.getText(), expected.formTitle);
    }

    generateStringWithLength(length) {
        let result = '';
        for (let i = 0; i < length; i++) result += '1';
        return result;
    }

    sendNumberOfKeys(length) {
        for (let i = 0; i < length; i++) browser.keys('1');
    }
}

export default BasePage;