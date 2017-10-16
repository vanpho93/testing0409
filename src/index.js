const express = require('express');

const app = express();

app.get('/add/:a/:b', (req, res) => {
    const { a, b } = req.params;
    res.send(+a + +b + '');
});

app.listen(3000, () => console.log('Server started!'));
