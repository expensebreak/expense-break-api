const request = require('supertest')

const app = require('../src/app')

describe('index path', () => {
    it('should return 200 when call / index path', (done) => {
        request(app)
            .get('/')
            .expect(200, done)
    })
})
