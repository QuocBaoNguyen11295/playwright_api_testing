import {test,expect} from '@playwright/test'

test.describe.parallel('API testing -- login',()=>{
    const baseURL = 'https://reqres.in/api'
    test('Login successfully',async ({request})=>{
        const response = await request.post(`${baseURL}/login`,{
            data:{
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        expect(responseBody.token).toEqual('QpwL5tke4Pnpja7X4')
    })

    test('Login unsuccessfully',async ({request})=>{
        const response = await request.post(`${baseURL}/login`,{
            data:{
                "email": "eve.holt@reqres.in"
            }
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(400)
        expect(responseBody.error).toEqual('Missing password')
    })
})