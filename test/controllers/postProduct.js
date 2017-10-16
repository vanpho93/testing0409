const assert = require('assert');
const request = require('supertest');
const app = require('../../src/index');
const Product = require('../../src/db');

describe.only('Test post route', () => {
    it('Can create new product', async () => {
        const response = await request(app).post('/product')
        .type('form').send({ name: 'abcd' });
        const product = await Product.findOne();
        assert.equal(product.name, 'abcd');
    });
});
