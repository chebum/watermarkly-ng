import { WatermarklyNgPage } from './app.po';

describe('watermarkly-ng App', () => {
  let page: WatermarklyNgPage;

  beforeEach(() => {
    page = new WatermarklyNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
