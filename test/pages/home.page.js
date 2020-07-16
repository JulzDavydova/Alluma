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
       // assert.equal(link.getAttribute('href'), expected.screenerUrl);
        assert.equal(link.getText(), expected.screenerLink);
    }

    forgotTextBlock(){
        const text = $$(selector.forgotText)[1];
        assert.equal(text.getText(), expected.forgotText);
    }

    userNameLinkIsCorrect() {
        const link = $$(selector.links)[1];
       // assert.equal(link.getAttribute('href'), expected.screenerUrl);
        assert.equal(link.getText(), expected.userNameLink);
    }

    passwordLinkIsCorrect() {
        const link = $$(selector.links)[2];
       // assert.equal(link.getAttribute('href'), expected.screenerUrl);
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
}


export default new HomePage();