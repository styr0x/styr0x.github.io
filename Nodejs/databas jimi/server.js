
const express = require('express');
const sqlite = require('sqlite3').verbose();
const cors = require('cors');

const app = express();

const sql = 'SELECT * FROM companies'

app.use(cors({origin: '*'}));

const db = new sqlite.Database('./db/db', sqlite.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Sqlite connected');
});

db.all(sql, (err, rows) => {
    if (err) {
        throw err;
    }

    app.get('/test',function (req, res) {
        res.send(rows);
    });

});










/*
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Sqlite closed");
});
*/


app.use(express.static('public'));

app.listen(3000);

