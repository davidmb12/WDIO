describe("e2e Project Creation", () => {
  it("tests e2e Project Creation", async () => {
    await browser.setWindowSize(1091, 712)
    await browser.url("https://stage.acrobat.adobe.com/link/home/?app%21versions=latest")
    await expect(browser).toHaveUrl("https://stage.acrobat.adobe.com/link/home/?app%21versions=latest")
    await browser.$("aria/Projects").click()
    await browser.$("aria/Create a project").click()
    await browser.$("aria/Select files").click()
    await browser.$("//*[@data-test-id=\"asset-list-tab\"]/span").click()
    await browser.$("#react-spectrum-244-0-checkbox").click()
    await browser.$("#react-spectrum-250-0-checkbox").click()
    await browser.$("#react-spectrum-238-0-checkbox").click()
    await browser.$("aria/Continue").click()
  });
});
