import {Selector, t} from 'testcafe';

export default class Checkout {
    constructor() {
        //elements
        //Checkout Your Info
        this.firstName = Selector('#first-name')
        this.lastName = Selector('#last-name')
        this.zipCode = Selector('#postal-code')
        this.continue = Selector('#continue')

        //Checkout Overview
        this.finishBtn = Selector('#finish')

        //Checkout Complete
        this.successMsg = Selector('[data-test="complete-header"]')
    }

    //Checkout Overview
    async finish(){
        await t.click(this.finishBtn);
    }
    
    //Checkout Your Info
    async addItemToCheckout(details, finish = true){
        await t.typeText(this.firstName, details.firstName);
        await t.typeText(this.lastName, details.lastName);
        await t.typeText(this.zipCode, details.zipCode);
        await t.click(this.continue);
        if (finish) {
            this.finish()
        }
    }


}