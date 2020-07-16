import BasePage from './base.page'
import {assert} from 'chai';
import selector from '../selectors/header.sel';
import expected from '../expected/header.exp';

class HeaderPage extends BasePage {

    headerTitle() {
        const title = $(selector.headerTitle);
        assert.equal(title.getText(), expected.headerTitle);
    }
}
export default new HeaderPage();