const assert = require('assert');
const addAsync = require('../src/b');

describe('Test add function', () => {
    it('Can add 2 numbers', (done) => {
        addAsync(4, 5, (err, kq) => {
            assert.equal(kq, 10);
            done();
        });
    });
});