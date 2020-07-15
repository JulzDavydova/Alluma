import homePage from '../pages/home.page';

describe('Home Page', () => {
    it('should be opened', () => {
        homePage.openHomePage();
        homePage.homePageIsOpened();
    });
});


