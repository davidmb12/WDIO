class LandingPage{
    get chooseSpecialistDropdown(){
        return $('button[data-testid="custom-agents-dropdown-button"]')
    }
    get specialistPopOver(){
        return $('div[data-testid="custom-agents-dropdown-popover"]')
    }
}
module.exports = new LandingPage();