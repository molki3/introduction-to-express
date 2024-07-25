const express = require('express');


const app = express();
const port = 3000;

// ALL: receive all methods 
app.all('/', (req, res) => {
    res.send('Home Page');
})



/*
MIDDLEWARE FUNCTION (between browser and the routes)
This rout does not have name so whatever the rout has been called, this rout has been called before another rout.
*/

// Logger
app.use((req, res, next) => {
    console.log(`First step. Rout: ${req.url}, Method: ${req.method}`);
    
    // End and continue
    next();
})

// isAuthenticated
app.use((req, res, next) => {
    if(req.query.login === 'molki3') next();
    else res.send('Not authorized');
})



/* PROTECTED ROUTES*/

// ALL: receive all methods 
app.all('/dashboard', (req, res) => {
    res.send('Dashboard Page');
})

app.listen(port);
console.log(`Server on port ${port}`);