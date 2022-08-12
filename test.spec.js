const { test, expect } = require('@playwright/test')

test('Simple test', async ({ request }) => {
    const baseURL = 'https://reqres.in/api'

    const response = await request.get(baseURL + '/users/3')
    expect(response.status()).toBe(200)
})