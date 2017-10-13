const assert = require('assert');
const addAsync = require('../src/b');

describe('Test add function', () => {
    it('Can add 2 numbers', (done) => {
        addAsync(4, 5, (err, kq) => {
            assert.equal(kq, 9);
            done();
        });
    });

    it('Cannot add something NaN', (done) => {
        addAsync('4', 5, (err, kq) => {
            assert.equal(err.message, 'Type error');
            assert.equal(kq, undefined);
            done();
        });
    });
});
