import {Selector, t} from 'testcafe'

export default class Inventory {
    constructor() {
        //elements
        this.inventoryContainer = Selector('#inventory_container.inventory_container')
        this.item = Selector('#inventory_container .inventory_item')

        //locators
        this.addToCart = 'button'
    }

    async addItemToCart(itemText){
        await t.click(this.item.withText(itemText).find(this.addToCart))
    }
}