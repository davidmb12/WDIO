const sessionManager = require('../../helpers/sessionManager')
const LoginStagePage = require('../pages/loginStage.page')
const HomePage = require('../pages/home.page')
const ProjectsPage = require('../pages/projects.page')

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
        await ProjectsPage.createProjectFromCTA();

    })
})