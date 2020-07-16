import BasePage from './base.page'
import {assert} from 'chai';
import selector from '../selectors/footer.sel';
import expected from '../expected/footer.exp';

class FooterPage extends BasePage {

    aboutSite() {
        //const title = $(selector.block1);
       // title.isDisplayed();
        //assert.equal(title.getText(), expected.firstBlockTitle);

    }
}
export default new FooterPage();