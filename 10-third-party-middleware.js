const express = require('express');
const morgan = require('morgan'); // third-party middleware: npm i morgan


const app = express();
const port = 3000;

// Middleware Morgan
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Home');
})

app.listen(3000);
console.log(`Server on port ${port}`);