require('dotenv').config()

const C_DB_ADDR = process.env.DB_ADDR;
const C_DB_USER = process.env.DB_USER;
const C_DB_PASS = process.env.DB_PASS;
const C_DB_DATABASE = process.env.DB_DATABASE;

module.exports = {C_DB_ADDR,C_DB_DATABASE,C_DB_PASS,C_DB_USER}
