import Login from './../pages/login'
import Header from './../pages/header'
import Inventory from './../pages/inventory'
import Cart from './../pages/cart'
import Checkout from '../pages/checkout'
import {credentials, urls, messages, items, details} from './../data/data.json'


const loginPage = new Login
const headerPage = new Header
const inventoryPage = new Inventory
const cartPage = new Cart
const checkoutPage = new Checkout



fixture `SauceDemo`
.page(urls.homepage)
.beforeEach(async t => {
    await loginPage.login(credentials.standardUser,credentials.password)
})


test('Verify that successful login navigates the user to the inventory page', async t =>{
    await t.expect(inventoryPage.inventoryContainer.exists).ok()
})

test('Verify that logout navigates the user back to the login page', async t => {
    await headerPage.logout()
    await t.expect(loginPage.loginBtn.exists).ok()
    await t.expect(loginPage.loginContainer.exists).ok()
})

test.before(async t => {
    await loginPage.login(credentials.lockedOutUser,credentials.password)
})
('Verify that attempting to login with '+ credentials.lockedOutUser +' displays the error message ' + messages.lockedOut, async t => {
    await t.expect(loginPage.errorMsg.innerText).eql(messages.lockedOut)
})

for (const itemName in items) {

    test('Verify that adding the "'+ items[itemName] +'" product item to cart lists the item in the cart',async t =>{
        await inventoryPage.addItemToCart(items[itemName])
        await headerPage.accessCart()
        await t.expect(cartPage.cartItem.innerText).contains(items[itemName])
    })

    test('Verify that successful "'+ items[itemName] +'" product item checkout displays the '+ messages.success +' message',async t =>{
        await inventoryPage.addItemToCart(items[itemName])
        await headerPage.accessCart()
        await cartPage.accessCheckout()
        await checkoutPage.addItemToCheckout(details)
        await t.expect(checkoutPage.successMsg.innerText).eql(messages.success)
    })    
}


