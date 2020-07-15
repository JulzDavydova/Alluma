import BasePage from './base.page';
import {assert} from 'chai';
import selector from '../selectors/home.sel';
import expected from '../expected/home.exp';

class HomePage extends BasePage {

    homePageIsOpened() {
        const title = $$(selector.greeting)[0];
        assert.equal(title.getText(), expected.greeting);
    }

    tabTitleIsDisplayed() {
        assert.equal(browser.getTitle(), expected.tabTitle);
    }

    loginFormIsDisplayed() {
        $(selector.loginForm).isDisplayed();
    }

}


export default new HomePage();