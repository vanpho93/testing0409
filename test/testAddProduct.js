const assert = require('assert');
const Product = require('../src/db');

describe('Test add new product', () => {
    beforeEach('Remove collection', async () => {
        await Product.remove({});
    })

    it.only('Can add new product', async () => {
        const pr = new Product({ name: 'ABCD', desc: 'EFGHnnn' });
        await pr.save();
        const pr2 = await Product.findOne({ name: 'ABCD' });
        assert.equal(pr2.desc, 'EFGHnnn');
    });
});

