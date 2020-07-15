import selector from '../selectors/base.sel';
import expected from '../expected/base.exp';
import {assert} from 'chai';

class BasePage {

    openHomePage() {
        browser.url('/');
    }
    formTitleIsCorrect() {
       const title = $$(selector.formTitle)[0];
       assert.equal (title.getText(), expected.formTitle);
    }
}

export default BasePage;