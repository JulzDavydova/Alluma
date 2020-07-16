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
       
}


export default new HomePage();