import {Selector, t} from 'testcafe';

export default class Cart {
    constructor() {
        //elements
        this.cartItem = Selector('[data-test="inventory-item-name"]')
        this.checkoutBtn = Selector('#checkout')
    }

    async accessCheckout() {
        await t.click(this.checkoutBtn)
    }
}