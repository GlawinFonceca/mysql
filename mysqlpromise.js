



// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password:'password',
//     database:'mysqlPromise' 
// })


// con.connect( async function (err) {
//     if(err) throw new Error(err.message);
//     console.log('connected to database');

//     //insert data to database
//     const [row , fields] = await con.execute("INSERT INTO mysqlUser(name,email,phone) VALUES('john','john@email.com',8567546787");


// })

async function main() {
    const mysql = require('mysql2/promise');
    // create the connection
    const connection = await mysql.createConnection({host:'localhost', user: 'root', password: 'password', database: 'mysqlPromise'});
    // query database
    const [rows, fields] = await connection.execute(`INSERT INTO mysqlUser (name, email, phone) VALUES("john","john@email.com",6)`);
  }
  main()