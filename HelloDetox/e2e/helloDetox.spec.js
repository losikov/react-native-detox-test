describe('Example', () => {
  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should have welcome screen', async () => {
    await expect(element(by.id('scrollView'))).toBeVisible();
  });
  
  it('should swipe down', async () => {
    await element(by.id('scrollView')).swipe('down');
  });

  it('should swipe up', async () => {
    await element(by.id('scrollView')).swipe('up');
  });

  it('should scroll to bottom', async () => {
    await element(by.id('scrollView')).scrollTo('bottom');
  });

  it('should scroll to top', async () => {
    await element(by.id('scrollView')).scrollTo('top');
  });
});
