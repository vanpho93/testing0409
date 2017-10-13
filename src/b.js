function addAsync(a, b, cb) {
    setTimeout(() => {
        const isNumbers = typeof a === 'number' && typeof b === 'number';
        if (!isNumbers) return cb(new Error('Type error'));
        cb(null, a + b);
    }, 1000);
}

module.exports = addAsync;
