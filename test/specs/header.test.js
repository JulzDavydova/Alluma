import headerPage from '../pages/header.page';

describe('Header', () => {
    headerPage.openHomePage();

    it('header title is correct', () => {
      headerPage.headerTitle();
    });
});