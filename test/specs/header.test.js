import headerPage from '../pages/header.page';

describe('Header', () => {
    it('header title is correct', () => {
      headerPage.openHomePage();
      headerPage.headerTitle();
    });
});