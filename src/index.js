const express = require('express');
const parser = require('body-parser').urlencoded({ extended: false });
const Product = require('./db');

const app = express();

app.get('/add/:a/:b', (req, res) => {
    const { a, b } = req.params;
    res.send(+a + +b + '');
});

app.post('/add', parser, (req, res) => {
    const { a, b } = req.body;
    res.send(+a + +b + '');
});

app.post('/product', parser, (req, res) => {
    const product = new Product(req.body);
    product.save()
    .then(() => res.send({ message: 'OK' }))
    .catch(() => res.send({ message: 'Not OK' }));
});

app.listen(3000, () => console.log('Server started!'));

module.exports = app;
