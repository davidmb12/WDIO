
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
    
}

module.exports = new FilePicker();