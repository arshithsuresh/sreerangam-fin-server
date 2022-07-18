const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./goldloan.db');

const _INIT_DATABASE_SQLITE_ = ()=>{

    db.all(`CREATE TABLE IF NOT EXISTS loan_config 
            (
                interest REAL NOT NULL

            )`)

    db.all(`CREATE TABLE IF NOT EXISTS userdata 
            (   id INT NOT NULL PRIMARY KEY,
                username VARCHAR(255) NOT NULL,
                name VARCHAR(255) NOT NULL,
                phone VARCHAR(12) NOT NULL,
                address TEXT NOT NULL,
                pincode INT(6) 
            )`);
    
    db.all(`CREATE TABLE IF NOT EXISTS asset_type 
            (
                id INT NOT NULL PRIMARY KEY,
                type VARCHAR(32)
            )`);

    db.all(`CREATE TABLE IF NOT EXISTS assets
            (
                a_id INT NOT NULL PRIMARY KEY,
                o_id INT NOT NULL,
                type INT NOT NULL,

                weight_g REAL NOT NULL,

                FOREIGN KEY(type) REFERENCES asset_type(id)
                FOREIGN KEY(o_id) REFERENCES userdata(id)  

            )`);    

    db.all(`CREATE TABLE IF NOT EXISTS loan_details 
            (
                loan_id INT NOT NULL PRIMARY KEY,
                a_id INT NOT NULL,
                o_id INT NOT NULL,
                loan_amount REAL NOT NULL,
                date DATETIME,

                FOREIGN KEY(a_id) REFERENCES assets(a_id),
                FOREIGN KEY(o_id) REFERENCES userdata(id)

            )`);

    db.all(`CREATE TABLE IF NOT EXISTS interest_paid 
            (
                l_id INT NOT NULL,        
                interest_paid REAL NOT NULL,
                date DATETIME,

                FOREIGN KEY(l_id) REFERENCES loan_details(loan_id)
                
            )`);
}


_INIT_DATABASE_SQLITE_();

