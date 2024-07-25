const exp = require('constants');
const express = require('express');


const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Home');    
});

app.get('/about', (req, res) => {
    res.send('About');    
});

app.get('/contact', (req, res) => {
    res.send('Contact');    
});

// .USE(): send data to a redirecting page not found
app.use((req, res) => {
    res.status(404).send('Ups...\nPage not found.');
})

app.listen(port)
console.log(`Server on port ${port}`);