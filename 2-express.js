const exp = require('constants');
const express = require('express');


const app = express();
const port = 3000;

/*.get('address', function(req, res)) REQUEST*/
app.get('/', (req, res) => {
    
    /*
    sendFile: send the path as the response (needs the absolute path)
    Way 1:
    */
    res.sendFile('./static/index.html', {
        root: __dirname
    })
    
    /*
    Way 2:
    res.sendFile(`${__dirname}/static/index.html`);
    */
});

app.listen(port)
console.log(`Server on port ${port}`);