const assert = require('assert');
const request = require('supertest');
const app = require('../../src/index');

describe.only('Test add numbers by add route', () => {
    it('Can add native numbers', async () => {
        const response = await request(app).get('/add/4/5');
        assert.equal(response.text, 9);
    });
});
