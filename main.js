const mysql = require('mysql');
require('dotenv').config();

const con = mysql.createConnection({
    host: 'localhost',
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

con.connect(function (err) {
    if (err) {
        throw new Error()
    }
    //con.query('CREATE DATABASE nodedb');
//     console.log('connected to the database');
//    // creating a table
    //  const sql = 'CREATE TABLE user(id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(20), email VARCHAR(20))';
    //     con.query(sql, function (err,result) {
    //         if(err) throw new Error(err.message);
    //         console.log('table created');
    //     })

    //insert data to database
    // const sql = 'INSERT INTO user (name, email) VALUES("smith","smith12@email.com")';
    // con.query(sql, function (err,result) {
    //     if(err) throw new Error();
    //     console.log('Data is inserted to the database');
    // })


    //inserting records to the database
    // const sql = 'INSERT INTO user (name,email) VALUES ?';
    // const values = [
    //     ['alice', 'alice22@email.com'],
    //     ['jess', 'jess@gmalil.com'],
    //     ['chris', 'chris@email.com']
    // ];
    // con.query(sql,[values], (err,result) => {
    //     if(err) throw new Error();
    //     console.log('records inserted is :' +result.affectedRows);

    // })

    //retrieving data from database
    // const sql = 'SELECT * FROM user';
    // con.query(sql,(err,result, fields) => {
    //     if(err) throw new Error();
    //     console.log(result);
    //     console.log(result[0].name +' '+result[0].email);
    //     //using for loop
    //     for(let i=0; i<result.length; i++){
    //         console.log(result[i].name);
    //     }
    // })

    // //retrieving specific data
    // const sql = 'SELECT name,id FROM user';
    // con.query(sql, (err,result,fields) =>{
    //     if(err) throw new Error();
    //     console.log(result);
    //     console.log(fields);
    // })

    //where clause
    // const sql = "SELECT * FROM user WHERE name LIKE 's%'";//like searches name that starts with "s"
    // con.query(sql, (err,result,fields) =>{
    //     if(err) throw new Error(err.message);
    //     console.log(result);
    // })

    //AND and OR
    //AND
    // const sql = "SELECT * FROM user WHERE name LIKE 'j%' AND id=1";
    // con.query(sql, (err,result,fields) =>{
    //     if(err) throw new Error(err.message);
    //     console.log(result,'\n');
    // })

    // //OR
    // const sql1 = "SELECT * FROM user WHERE name LIKE 'j%' OR id=1";
    // con.query(sql1, (err,result,fields) =>{
    //     if(err) throw new Error(err.message);
    //     console.log(result,'\n');
    // })


    // //WHERE variables
    // const name_search ='j%';
    // const id_search = '2'
    // const sql2 = "SELECT * FROM user WHERE name LIKE ?  OR id=?";
    // con.query(sql2,[name_search,id_search], (err,result,fields) =>{
    //     if(err) throw new Error(err.message);
    //     console.log(result);
    // })

    //order by
    // const sql1 = "SELECT * FROM user ORDER BY name desc";
    // con.query(sql1, (err, result, fields) => {
    //     if (err) throw new Error(err.message);
    //     console.log(result, '\n');
    // })

    //delete
    // const sql = "DELETE FROM user WHERE id=4";
    // con.query(sql, (err,result) => {
    //     if(err) throw new Error();
    //     console.log('user is deleted');
    // })

    //update data
    // const sql1 = "UPDATE user SET  email='john32@gmail.com' WHERE  id=1";
    // con.query(sql1, (err, result, fields) => {
    //     if (err) throw new Error(err.message);
    //     console.log(result, '\n');
    // })

    //LIMIT 
     const sql1 = "SELECT * FROM user ORDER BY id desc LIMIT 2";
    con.query(sql1, (err,result,fields) =>{
        if(err) throw new Error(err.message);
        console.log(result,'\n');
    })


})