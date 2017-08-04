import { AskfmPage } from './app.po';

describe('askfm App', () => {
  let page: AskfmPage;

  beforeEach(() => {
    page = new AskfmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
