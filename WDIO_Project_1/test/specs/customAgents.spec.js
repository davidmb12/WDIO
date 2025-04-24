const sessionManager = require('../../helpers/sessionManager')
const LoginStagePage = require('../pages/loginStage.page')
const HomePage = require('../pages/home.page')
const projectsPage = require('../pages/projects.page')
const filePickerPage = require('../pages/filePicker.page')
const landingPage = require('../pages/landingPage.page')

describe('Custom agents tests',()=>{
    it('User is able to select an specialist from Landing page prompt bar',async ()=>{
        const url = 'https://stage.acrobat.adobe.com/us/en/?app%21versions=latest'
        await browser.url(url)
        await sessionManager.loadSession({
            featureFlags: {
                sessionStorage: {
                    'floodgate-add': 'dc-web-kw-home'
                }
            }
        });
        await expect(browser).toHaveUrl("https://stage.acrobat.adobe.com/link/home/?app%21versions=latest");
        await HomePage.navigateTo('Projects');
        // REFACTOR
        const createButton = await projectsPage.createButton;
        await createButton.waitForDisplayed();
        await createButton.click();
        await projectsPage.selectFilesButton.click();

        const documentsTab = await filePickerPage.documentsTab;
        await documentsTab.waitForDisplayed({timeout:3000});
        await documentsTab.click();

        const item = await $('div[data-test-id="table-view-row-wrapper"]').$('..').$('input[type="checkbox"]');
        await item.click();

        const continueButton = await filePickerPage.continueButton;
        await continueButton.waitForDisplayed();
        await continueButton.waitForClickable();
        await continueButton.click();

        const addToProjectButton = await projectsPage.addToProjectButton;
        await addToProjectButton.waitForClickable();
        await addToProjectButton.click();
        
        const chooseSpecialistDropdown = await landingPage.chooseSpecialistDropdown;
        await chooseSpecialistDropdown.waitForDisplayed({timeout:60000});
        await chooseSpecialistDropdown.waitForClickable();
        await chooseSpecialistDropdown.click();
        
        const specialistPopOver = await landingPage.specialistPopOver;
        await specialistPopOver.waitForDisplayed({timeout:70000});
        const specialistList = await specialistPopOver.$('div').$$('div[role="button"]');
        const researcherButton = await specialistList[3];

        researcherButton.waitForDisplayed();
        researcherButton.click();

        const savedChangesToast = await $('*[role="alert"]')
        await expect(savedChangesToast).toBeExisting({ timeout: 5000 });        

    });
    it(()=>{

    })
})