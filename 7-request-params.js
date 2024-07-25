const express = require('express');


const app = express();
const port = 3000;

app.get('/hello/:username', (req, res) => {
    res.send(`Hello ${req.params.username}!`);
})

app.get('/add/:x/:y', (req, res) => {

    const {x, y} = req.params;
    
    const result = parseInt(x) + parseInt(y);

    res.send(`${x} + ${y} = ${result}`);
})

app.listen(port);
console.log(`Server on port ${port}`);