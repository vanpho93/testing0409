function addPromise(a, b) {
    return new Promise((resolve, reject) => {
        const isNumbers = typeof a === 'number' && typeof b === 'number';
        if (!isNumbers) return reject(new Error('Type error'));
        resolve(a + b);
    });
}

module.exports = addPromise;
