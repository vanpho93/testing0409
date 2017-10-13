const assert = require('assert');
const addPromise = require('../src/c');

describe('Test add function', () => {
    it('Can add 2 numbers', (done) => {
        addPromise(4, 5)
        .then(kq => {
            assert.equal(kq, 9);
            done();
        });
    });

    it('Cannot add something NaN', (done) => {
        addPromise('4', 5)
        .catch(err => {
            assert.equal(err.message, 'Type error');
            done();
        });
    });
});
