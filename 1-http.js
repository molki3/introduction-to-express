const http = require('http');
const fs = require('fs')


const port = 3000;

const server = http.createServer((req, res) => {
    const read = fs.createReadStream('./static/index.html');
    read.pipe(res);
})

server.listen(port);

console.log(`Server on port ${port}`);