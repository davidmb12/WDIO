const filePickerPage = require("./filePicker.page");
const path = require('path');

class ProjectsPage{
    get createButton(){
        return $('button[aria-label="Create a project"]')
    }

    get selectFilesButton(){
        return $('button[data-testid="addsource-dialog-select-files-btn"]')
    }
    get addToProjectButton(){
        return $('button[data-testid="addsource-dialog-addToWorkspace-btn"]')
    }
    
}
module.exports = new ProjectsPage();