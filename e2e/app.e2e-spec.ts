import { coresolutionTemplatePage } from './app.po';

describe('coresolution App', function() {
  let page: coresolutionTemplatePage;

  beforeEach(() => {
    page = new coresolutionTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
