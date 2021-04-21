
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

app.post('/write', function (req, res) {
    
    
    
    /*
    db.run("INSERT INTO companies (column1, column2)", function(err){
        if (err) {
            throw err;
        }
    
    
    
    });
    */


});

/*

*/








/*
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Sqlite closed");
});
*/




app.listen(3000);

