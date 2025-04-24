
class FilePicker{
    get documentsTab(){
        return $('div[data-test-id="asset-list-tab"] > span');
    }
    get myDeviceTab(){
        return $('div[data-test-id="my-device-tab"] > span');
    }
    get recentsTab(){
        return $('div[data-test-id="recents-list-tab"] > span');
    }
    get fileInput(){
        return $('input[data-test-id="my-device-file-input"]');
    }
    get continueButton(){
        return $('button[data-test-id="dialog-second-button"]')
    }
}

module.exports = new FilePicker();