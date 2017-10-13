const assert = require('assert');
const addPromise = require('../src/c');

describe('Test add function', () => {
    it('Can add 2 numbers', async () => {
        const kq = await addPromise(4, 5);
        assert.equal(kq, 9);
    });

    it('Can add 2 numbers', async () => {
        try {
            const kq = await addPromise('4', 5);
        } catch (err) {
            assert.equal(err.message, 'Type error');
        }
    });
});
