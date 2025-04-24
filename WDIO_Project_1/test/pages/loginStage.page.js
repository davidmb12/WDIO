class LoginStagePage {
    get signInButton(){
        return $('button[data-test-id="heading-section-sign-in-button"]')
    }
    get emailTextbox(){
        return $('input[type="email"]')
    }
    get passwordTextbox(){
        return $('input[name="password"]')
    }
    get continueButton(){
        return $('button[data-id="EmailPage-ContinueButton"]')
    }
    get logInButton(){
        return $('button[data-id="PasswordPage-ContinueButton"]')
    }
    get loginMessage(){
        return $('h3')
    }

    async login(username,password,commands =null){
        const signInButton = await this.signInButton;
        // Find sign in button
        await signInButton.waitForDisplayed({ timeout: 5000 });
        await signInButton.click();

        const emailField = await this.emailTextbox;
        await emailField.waitForDisplayed({timeout:5000});
        await emailField.setValue(username);

        const continueBtn = await this.continueButton;
        await continueBtn.click();

        const passwordField = await this.passwordTextbox;
        await passwordField.waitForDisplayed();
        await passwordField.setValue(password);
        
        const logInButton = await this.logInButton;
        await logInButton.waitForDisplayed({timeout:5000});
        await logInButton.click();
    }
    async checkMessage(msg){
        await expect(this.loginMessage).toHaveText(expect.stringContaining(msg))
    }

    
}
module.exports = new LoginStagePage();