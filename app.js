const db = require('./database/database');
const express = require('express')
const app = express();

const routes = require("./routes/index");

db._INIT_DATABASE_SQLITE_();

const port = 3000 || process.env.PORT;

app.use(express.urlencoded({extended:false}));

app.use("/",routes)

app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`)
})