/*
TEMPLATE ENGINE: npm EJS

Install: npm i ejs
Templete to combine data with html and send it to the frontend.
*/

const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');
const homeRoutes = require('./src/routes/home');


const app = express();

//Settings
app.set('port', 3000);
// View Engine setting: It works with express.render, it is setting at homeRoutes:/about
app.set('view engine', 'ejs');  
app.set('views', './src/views');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
homeRoutes(app);

//Middlewares: Public Files
app.use(('/public'), express.static('./src/static'));

app.listen(app.get('port'));
console.log(`Server on port ${app.get('port')}`);