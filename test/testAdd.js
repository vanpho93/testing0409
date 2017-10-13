const assert = require('assert');
const add = require('../src/a');

describe('Test add function', () => {
    it('Can add native number', () => {
        const total = add(4, 5);
        // if (total !== 9) throw new Error('Wrong');
        // assert(total === 10);
        assert.equal(total, 9);
    });

    it('Can add float point number', () => {
        const total = add(4.1, 5.2);
        if (total !== 9.3) throw new Error('Wrong');
    });
});
