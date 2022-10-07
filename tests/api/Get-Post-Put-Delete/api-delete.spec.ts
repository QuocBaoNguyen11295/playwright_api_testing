import {test,expect} from '@playwright/test'

test.describe.parallel('Delete the user',()=>{
    const baseURL = 'https://reqres.in/api'
    test('Delete the user',async ({request})=>{
        const response = await request.delete(`${baseURL}/users/2`)
        expect(response.status()).toBe(204)
    })
})