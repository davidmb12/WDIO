const filePickerPage = require("./filePicker.page");
const path = require('path');

class ProjectsPage{
    get createButton(){
        return $('button[aria-label="Create a project"]')
    }

    get selectFilesButton(){
        return $('button[data-testid="addsource-dialog-select-files-btn"]')
    }
    
    async createProjectFromCTA(){
        const createButton = await this.createButton;
        await createButton.waitForDisplayed();
        await createButton.click();
        await this.selectFilesButton.click();

        const documentsTab =await filePickerPage.documentsTab;
        await documentsTab.waitForDisplayed();
        await documentsTab.click();

        

    }
}
module.exports = new ProjectsPage();