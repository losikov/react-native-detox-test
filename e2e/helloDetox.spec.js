describe('Example', () => {
  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should scroll to bottom & back to top', async () => {
    // doesn't work detox 17.3.5
    // doesn't work detox 17.4.4
    // doesn't work detox 17.4.5
    // works detox 17.5.2
    await element(by.id('scrollView')).scrollTo('bottom');
    await element(by.id('scrollView')).scrollTo('top');
  });

  it('should swipe out the drawer and close it', async () => {
    // works detox 17.3.5
    // works detox 17.4.4
    // doesn't work detox 17.4.5
    // doesn't work detox 17.5.2 - tries to swipe from the middle of the scrollView
    await element(by.id('scrollView')).swipe('left', 'slow', 0.999);
    await expect(element(by.id('drawerView'))).toBeVisible();
    await element(by.id('drawerView')).swipe('right', 'slow', 0.8);
    await expect(element(by.id('drawerView'))).toBeNotVisible();
  });
});
