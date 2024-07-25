const express = require('express');


const app = express();
const port = 3000;

// localhost:3000?search=interestelar
// localhost:3000?username=molki3&age=22
app.get('/', (req, res) => {
    if(req.query.search === 'interestelar') res.send('Interestelar, 2014');
    else res.send('Not found');
});

app.listen(port);
console.log(`Server on port ${port}`);