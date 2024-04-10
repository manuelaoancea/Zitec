import {Selector, t} from 'testcafe'

export default class Header {
    constructor() {
        this.menu = Selector('#react-burger-menu-btn')
        this.logoutBtn = Selector('#logout_sidebar_link')
        this.cart = Selector("#root > #page_wrapper [id='shopping_cart_container'] > a[class='shopping_cart_link']")
    }

    async logout() {
        await t.click(this.menu)
        await t.click(this.logoutBtn)
    }

    async accessCart() {
        await t.click(this.cart)
    }
}