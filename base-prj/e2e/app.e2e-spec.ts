import { BasePrjPage } from './app.po';

describe('base-prj App', () => {
  let page: BasePrjPage;

  beforeEach(() => {
    page = new BasePrjPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
