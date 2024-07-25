const express = require('express');

/*
     REQUEST BODY
 ____________________
|-> Endpoint: /rout  |
|-> Http Method: get |
|-> Header: JSON     |
|-> Body: {"a": "A"} |
|____________________| 
*/

const port = 3000;
const app = express();

/*Express Methods to process different formats*/
app.use(express.text()); //Text
app.use(express.json()); //JSON
app.use(express.urlencoded({extended: false})); // Forms

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send('Created New User');
})

app.listen(port);
console.log(`Server on port ${port}`)