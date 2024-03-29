const { Query } = require('pg');
const db_config = require('../config/constants')

const Pool = require('pg').Pool
const pool = new Pool({
  user: db_config.C_DB_USER,
  host: db_config.C_DB_ADDR,
  database: db_config.C_DB_DATABASE,
  password: db_config.C_DB_PASS,
  port: 5432,
})

function _INIT_DATABASE_SQLITE_ () {
    
    // db.exec(`CREATE TABLE IF NOT EXISTS loan_config 
    //         (
    //             interest REAL NOT NULL

    //         )`)
    

    // db.exec(`CREATE TABLE IF NOT EXISTS userdata 
    //         (   id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,                
    //             name VARCHAR(255) NOT NULL,
    //             phone VARCHAR(12) NOT NULL,
    //             address TEXT NOT NULL,
    //             pincode INT(6) 
    //         )`);

    // db.exec(`CREATE TABLE IF NOT EXISTS login_details
    //         (
    //             id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    //             o_id INT NOT NULL,
    //             username VARCHAR(255) NOT NULL,
    //             password TEXT NOT NULL,
    //             accesstoken TEXT,
    //             refreshtoken TEXT,

    //             FOREIGN KEY(o_id) REFERENCES userdata(id)
    //         )`);
    
    // db.exec(`CREATE TABLE IF NOT EXISTS asset_type 
    //         (
    //             id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    //             type VARCHAR(32)
    //         )`);

    // db.exec(`CREATE TABLE IF NOT EXISTS assets
    //         (
    //             a_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    //             o_id INT NOT NULL,
    //             type INT NOT NULL,

    //             weight_g REAL NOT NULL,
    //             description TEXT,

    //             FOREIGN KEY(type) REFERENCES asset_type(id)
    //             FOREIGN KEY(o_id) REFERENCES userdata(id)  

    //         )`);    

    // db.exec(`CREATE TABLE IF NOT EXISTS loan_details 
    //         (
    //             loan_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    //             a_id INT NOT NULL,
    //             o_id INT NOT NULL,
    //             loan_amount REAL NOT NULL,
    //             date DATETIME,

    //             FOREIGN KEY(a_id) REFERENCES assets(a_id),
    //             FOREIGN KEY(o_id) REFERENCES userdata(id)

    //         )`);

    // db.exec(`CREATE TABLE IF NOT EXISTS interest_paid 
    //         (
    //             l_id INT NOT NULL,        
    //             interest_paid REAL NOT NULL,
    //             date DATETIME,

    //             FOREIGN KEY(l_id) REFERENCES loan_details(loan_id)
                
    //         )`);

    
}

function ExecuteQuery (query, args=[10]){    
    result = db.prepare(query).run(args);    
    return db.prepare(query).run(args);
}

function  SingleQuery (query, args=[]) {
        return pool.query(query,args)
}

function MultipleQuery (query, args=[]){
    return db.prepare(query).all(args);  
}


module.exports={_INIT_DATABASE_SQLITE_, SingleQuery, MultipleQuery, ExecuteQuery}