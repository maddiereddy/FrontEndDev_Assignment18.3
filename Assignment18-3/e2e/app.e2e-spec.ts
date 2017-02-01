import { Assignment183Page } from './app.po';

describe('assignment18-3 App', function() {
  let page: Assignment183Page;

  beforeEach(() => {
    page = new Assignment183Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
