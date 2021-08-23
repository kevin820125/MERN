
const request = require("supertest");
const User = require('../model/user')
const app = require("../index");
const { setupDB } = require('./basicSetup.js')
setupDB('endpoint-testing')

    describe("test end" , function(){
        const newState = {
            user_id : 13,
            name : "kevin"
        }
        test('create new user' , async function(){
            const res = await request(app)
            .post('/users')
            .send({...newState})
            .expect(201)
        })
    })
