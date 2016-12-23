import { AngularClientPage } from './app.po';

describe('angular-client App', function() {
  let page: AngularClientPage;

  beforeEach(() => {
    page = new AngularClientPage();
  });

  it('should display message saying "Test project with MEAN (Angular2) and Docker!"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Test project with MEAN (Angular2) and Docker!');
  });
});
