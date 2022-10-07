import {test,expect} from '@playwright/test'

test.describe.parallel('API Testing -- response body',()=>{
    const baseURL = 'https://reqres.in/api'
    test('Parse response body',async({request})=>{
        const response = await request.get(`${baseURL}/users/2`)
        const responseBody = JSON.parse(await response.text())
        expect(responseBody.data.email).toEqual('janet.weaver@reqres.in')
        expect(responseBody.data.first_name).toEqual('Janet')
        expect(responseBody.data.last_name).toEqual('Weaver')
        expect(responseBody.data.avatar).toEqual('https://reqres.in/img/faces/2-image.jpg')
    })
})