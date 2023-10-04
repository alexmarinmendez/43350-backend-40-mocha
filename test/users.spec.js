import mongoose from "mongoose";
import User from '../src/dao/Users.dao.js'
// import Assert from 'assert'
// import { faker } from '@faker-js/faker'
import chai from 'chai'

mongoose.connect('mongodb://localhost:27017')

// const assert = Assert.strict
const expect = chai.expect

describe('Testing User DAO', () => {
    before(async function() {
        this.userDao = new User()
        await mongoose.connection.collections.users.drop()
    })
    it('El get debe devolver un arreglo', async function() {
        const result = await this.userDao.get()
        // assert.strictEqual(Array.isArray(result), true)
        expect(result).to.be.deep.equal([])
    })
    xit('El DAO debe poder crear usuarios', async function() {
        const result = await this.userDao.save({
            first_name: 'Alex',
            last_name: 'Marin',
            // email: faker.internet.email(),
            email: 'alexmarinmendez@gmail.com',
            password: 'secret'
        })
        assert.ok(result._id)
    })
})