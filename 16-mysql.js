const mysql = require('mysql2');


const conn = async () => {
    const connection = await mysql.createConnection({
        host: '',
        user: '',
        password: '',
        database: '',
        /*
        ssl: {
            rejectUnauthorized: false
        }
        */
    });
    
    const result = await connection.query('SELECT 1+1 AS result');
    console.log(result);
}
