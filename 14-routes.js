const express = require('express');
const morgan = require('morgan');


const app = express();



// Import Routes Functions
const homeRoutes = require('./src/routes/home');
const userRoutes = require('./src/routes/user');



//Settings
app.set('port', 3000);

//Middleware
app.use(morgan('dev'));
app.use(express.json());



//Express Router
app.use(userRoutes);
//Router
homeRoutes(app);



// Static Files
app.use('/public', express.static('./src/static'));

app.listen(app.get('port'));
console.log(`Server on port ${app.get('port')}`);