const Product = require('../src/db');

beforeEach('Remove all products', async () => {
    await Product.remove({});
});
