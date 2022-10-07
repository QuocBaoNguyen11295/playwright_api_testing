import {test,expect} from '@playwright/test'

test.describe.parallel('Update the user',()=>{
    const baseURL = 'https://reqres.in/api'
    test('Update the user',async ({request})=>{
        const response = await request.put(`${baseURL}/users/2`,{
            data:{
                "name": "morpheus",
                "job": "zion resident"
            }
        })
        const responseBody = JSON.parse(await response.text())
        expect(responseBody.name).toEqual('morpheus')
        expect(responseBody.job).toEqual('zion resident')
    })
})