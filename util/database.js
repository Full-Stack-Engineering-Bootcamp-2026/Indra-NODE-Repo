const mysql = require('mysql2')

const {Sequelize} = require('sequelize');

 
const sequelize = new Sequelize('nodecomplete','root','Root@1234',{
    dialect : 'mysql',
    host:'localhost'    
});

module.exports =sequelize;

// const pool = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'nodecomplete',
//     password:'Root@1234'
// })

// module.exports = pool.promise();