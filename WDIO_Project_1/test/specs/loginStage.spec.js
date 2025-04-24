const sessionManager = require("../../helpers/sessionManager");
const loginStagePage = require("../pages/loginStage.page");

describe('Stage login',()=>{
    it('Login in stage latest',async ()=>{
        browser.url('https://stage.acrobat.adobe.com/us/en/?app%21versions=latest')
        await loginStagePage.login('dil18686+stage+40@adobetest.com','Echo123$');
        await loginStagePage.checkMessage('Hi')
        await sessionManager.saveSession();
    })
    
})