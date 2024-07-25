/*
EXPRESS SETTINGS
You can change the default settings using set, it is similar that create a variable and set it a value.
*/
const express = require('express');
const morgan = require('morgan');

const app = express();

// 1. Settings
app.set('port', 3000);
app.set('appName', 'Express Settings App');
app.set('case sensitive routing', true); // Default Express Setting

// 2. Middlewares
app.use(morgan('dev'));

// 3. Routes
app.get('/ExpressSettings', (req, res) => res.send('Express Settings'));

app.listen(app.get('port'));
console.log(`${app.get('appName')} on port ${app.get('port')}`);