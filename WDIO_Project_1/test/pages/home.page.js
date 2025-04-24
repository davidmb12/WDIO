class HomePage{
    
    verbsDictionary ={
        'Home': () => this.homeTab,
        'Projects': () => this.projectsTab,
        'Documents': () => this.documentsTab
    }
    
    get homeTab(){
        return $('span=Home')
    }
    get projectsTab()
    {
        return $('span=Projects')    
    }
    get documentsTab()
    {
        return $('span=Documents')
    }
    async navigateTo(verb){
        const tab = await this.verbsDictionary[verb]();
        await tab.waitForDisplayed();
        await tab.click();
    }
}

module.exports = new HomePage();