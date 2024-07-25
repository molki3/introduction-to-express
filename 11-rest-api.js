/*
REST API
REST:
GET     /products
GET     /products/:id
POST    /products/
DELETE  /products/:id
PUT     /product/:id

NEXT -> Express + SGBD
*/

const express = require('express')
const morgan = require('morgan');


const app = express();
const port = 3000;

let products = [
    {
        id: 1,
        name: "laptop",
        price: 1000
    }
]

app.use(morgan('dev'));
app.use(express.json());

app.get('/products', (req, res) => {
    // GET Show products
    res.json(products);
})

app.get('/products/:id', (req, res) => {
    // GET Find the product by id
    const result = products.find( product => product.id == req.params.id )
    if(!result) return res.status(404).send('Product not found');
    res.json(result);
})

app.post('/products', (req, res) => {
    // POST Generete the new product
    const newProduct = {id: products.length + 1, ...req.body};
    // POST Insert the new product
    products.push(newProduct);
    // POST Send to the client the inserted product
    res.send(newProduct);
})

app.put('/products/:id', (req, res) => {
    const newData = req.body;
    const result = products.find(product => product.id == req.params.id);
    if(!result) return res.status(404).send('Product not found');
    // PUT From req body change the existed propeties from the product found with the newData
    products = products.map(product => product.id == req.params.id ? {...product, ...newData} : product);
    res.json(products);
})

app.delete('/products/:id', (req, res) => {
    const result = products.find(product => product.id == req.params.id);
    if(!result) return res.status(404).send('Product not found');
    // DELETE Filter the array without the product found and assign it to the main array
    products = products.filter((product) => product.id != req.params.id);
    res.json(products);
})

app.listen(port);
console.log(`Server on port ${port}`);