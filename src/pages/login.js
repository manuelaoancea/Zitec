import {Selector, t} from 'testcafe'

export default class Login {
    constructor() {
        this.username = Selector("[data-test='username']")
        this.password = Selector("[data-test='password']")
        this.loginBtn = Selector('#login-button')
        this.loginContainer = Selector('#login_button_container')
        this.errorMsg = Selector('[data-test="error"]')
    }

    async login(username, password) {
        await t.typeText(this.username, username)
        await t.typeText(this.password, password)
        await t.click(this.loginBtn)
    }
}