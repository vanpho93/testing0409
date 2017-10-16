const assert = require('assert');
const Product = require('../../src/db');

describe('Test remove new product', () => {
    let productId;

    beforeEach('Create 1 product for test', async() => {
        const pr = new Product({ name: 'abcd' });
        productId = pr._id;
        await pr.save();
    });

    it('Can remove product by id', async () => {
        const prCount = await Product.count();
        const product = await Product.findById(productId);
        assert.equal(prCount, 1);
        assert.equal(product.name, 'abcd');
    });
});
