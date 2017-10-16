const assert = require('assert');
const Product = require('../../src/db');

describe('Test update new product', () => {
    let productId;

    beforeEach('Create 1 product for test', async() => {
        const pr = new Product({ name: 'abcd' });
        productId = pr._id;
        await pr.save();
    });

    it('Can update product by id', async () => {
        await Product.findByIdAndUpdate(productId, { name: 'efgh' });
        const pr2 = await Product.findById(productId);
        assert.equal(pr2.name, 'efgh');
    });
});
