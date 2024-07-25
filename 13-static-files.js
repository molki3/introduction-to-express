const express = require('express');
const morgan = require('morgan');


const app = express();
const port = 3000;

//Settings

//Middlewares
app.use(morgan('dev'));

//Routes
app.get('/', (req, res) => res.send('Static Files'));

//Middleware static: All files in that address are gonna be public and called depending the middleware order in the function calls
// Usually this middleware is used after the routes
app.use(('/public'), express.static('./src/static'));

app.listen(port);
console.log(`Server on port ${port}`);