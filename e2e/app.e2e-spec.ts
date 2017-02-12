import { NongpedUIPage } from './app.po';

describe('nongped-ui App', function() {
  let page: NongpedUIPage;

  beforeEach(() => {
    page = new NongpedUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
