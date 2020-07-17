import BasePage from './base.page'
import {assert} from 'chai';
import selector from '../selectors/footer.sel';
import expected from '../expected/footer.exp';

class FooterPage extends BasePage {

    aboutSite() {
        const title = $(selector.block1);
        title.isDisplayed();
        assert.equal(title.getText(), expected.firstBlockTitle);
    }

    aboutSiteRow1() {
        const title = $$(selector.rows)[0];
        title.isDisplayed();
        assert.equal(title.getText(), expected.row1);
    }

    aboutSiteRow2() {
        const title = $$(selector.rows)[1];
        title.isDisplayed();
        assert.equal(title.getText(), expected.row2);
    }

    getHelp() {
        const title = $(selector.block2);
        title.isDisplayed();
        assert.equal(title.getText(), expected.secondBlockTitle);
    }

    phoneNum() {
        const title = $(selector.phone);
        title.isDisplayed();
        assert.equal(title.getText(), expected.phone);
    }

    email() {
        const title = $(selector.email);
        title.isDisplayed();
        assert.equal(title.getText(), expected.email);
    }

    fax() {
        const title = $(selector.fax);
        title.isDisplayed();
        assert.equal(title.getText(), expected.fax);
    }

    stayInTouch() {
        const title = $(selector.block3);
        title.isDisplayed();
        assert.equal(title.getText(), expected.thirdBlockTitle);
    }

    iconFb() {
        const title = $(selector.fbIcon);
        title.isDisplayed();
    }

    iconFbUrl() {
        const fbIcon = $$(selector.icons)[0];
        assert.equal(fbIcon.getAttribute('href'), expected.urlFB);
    }

    iconTw() {
        const title = $(selector.twIcon);
        title.isDisplayed();
    }

    iconTwUrl() {
        const icon = $$(selector.icons)[1];
        assert.equal(icon.getAttribute('href'), expected.urlTwitter);
    }

    iconIn() {
        const title = $(selector.inIcon);
        title.isDisplayed();
    }

    iconInUrl() {
        const icon = $$(selector.icons)[2];
        assert.equal(icon.getAttribute('href'), expected.urlIN);
    }

    logo() {
        const title = $(selector.logo);
        title.isDisplayed();
    }

    logoUrl() {
        const logo = $$(selector.links)[1];
        assert.equal(logo.getAttribute('href'), expected.urlAlluma);
    }

    text1() {
        const title = $$(selector.text1)[0];
        title.isDisplayed();
        assert.equal(title.getText(), expected.text1);
    }

    linkAlluma() {
        const title = $$(selector.email)[1];
        title.isDisplayed();
        assert.equal(title.getText(), expected.textAlluma);
    }

    linkAllumaUrl() {
        const logo = $$(selector.links)[3];
        assert.equal(logo.getAttribute('href'), expected.urlAlluma);
    }

    text2() {
        const title = $$(selector.texts)[2];
        title.isDisplayed();
        assert.equal(title.getText(), expected.text2);
    }

    text3() {
        const title = $$(selector.texts)[3];
        title.isDisplayed();
        assert.equal(title.getText(), expected.text3);
    }

    text4() {
        const title = $$(selector.texts)[4];
        title.isDisplayed();
        assert.equal(title.getText(), expected.text4);
    }
}
export default new FooterPage();