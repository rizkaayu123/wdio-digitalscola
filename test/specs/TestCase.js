describe('Test Case',() => {
    it('Test Case 1 - Success Login',async () => {

        await browser.url('https://www.saucedemo.com/')

        const username = await browser.$('#user-name')
        const password = await browser.$('#password')
        const loginButton = await browser.$('#login-button')
        
        await username.setValue('standard_user')
        await password.setValue('secret_sauce')
        
        console.log('Value dari Button ${loginButton.getValue()}')
        await loginButton.click()

        await browser.pause(100000)
    })

    it('Test Case 2 - Add item to cart',async () => {

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        const additem = await browser.$('#add-to-cart-sauce-labs-backpack')
        await loginButton.click()

        await browser.pause(100000)

})
})