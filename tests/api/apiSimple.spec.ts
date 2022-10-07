import {test,expect} from '@playwright/test'

test.describe.parallel('API Testing - status code',()=>{
    const baseURL = 'https://reqres.in/api'
    test('Assert status code -- positive case',async ({request})=>{
        const response = await request.get(`${baseURL}/users/2`)
        expect(response.status()).toBe(200)
    })

    test('Assert status code -- invalid endpoint',async({request})=>{
        const response = await request.get(`${baseURL}/user/users`)
        expect(response.status()).toBe(404)
    })
})