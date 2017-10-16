const assert = require('assert');
const request = require('supertest');
const app = require('../../src/index');

describe.only('Test add numbers by add route', () => {
    it('Can add native numbers with post', async () => {
        const response = await request(app).post('/add').type('form').send({ a: 4, b: 5 });
        assert.equal(response.text, 9);
    });
});
