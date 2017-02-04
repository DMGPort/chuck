import { ChuckPage } from './app.po';

describe('chuck App', function() {
  let page: ChuckPage;

  beforeEach(() => {
    page = new ChuckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
