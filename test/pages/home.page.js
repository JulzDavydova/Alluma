import BasePage from './base.page';
import assert from 'assert';
import selector from '../selectors/home.sel';
import expected from '../expected/home.exp';

class HomePage extends BasePage {

    homePageIsOpened() {
        const title = $$(selector.greeting)[0];
        assert.equal(title.getText(), expected.greeting);
    }
}


export default new HomePage();