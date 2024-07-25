const express = require('express');


const app = express();
const port = 3000;

app.get('/products', (req, res) => {
    res.send('Product List');
});

app.post('/products', (req, res) => {
    res.send('Posting Product List');
});

app.put('/products', (req, res) => {
    res.send('Updating Product List');
});

app.delete('/products', (req, res) => {
    res.send('Deleting Product List');
});

app.patch('/products', (req, res) => {
    res.send('Updating Some Product List');
});

app.listen(port);
console.log(`Server on port ${port}`);