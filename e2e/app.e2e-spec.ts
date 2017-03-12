import { QuickstartNgPage } from './app.po';

describe('quickstart-ng App', () => {
  let page: QuickstartNgPage;

  beforeEach(() => {
    page = new QuickstartNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
