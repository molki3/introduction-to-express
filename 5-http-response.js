const express = require('express');


const port = 3000;
const app = express();

// TEXT RESPONSE
app.get('/', (req, res) => {
    res.send('Text: Http Response');
})

// FILE RESPONSE
app.get('/myfile', (req, res) => {
    res.sendFile(`${__dirname}/expressjs.png`);
})

// JSON RESPONSE
app.get('/user', (req, res) => {
    res.json({
        "user": "molki3",
        "email": "molki3@email.com"
    })
})

// PERSONALIZE THE STATUS SENDED
app.get('/status', (req, res) => {
    res.sendStatus(204);
})

app.listen(port);
console.log(`Server on port ${port}`);