const { exec } = require('child_process');
const express = require ('express');

const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const { query } = require('express');
const cors = require('cors');

const app = express();
const port = '3000';

let msg;

app.use(cors({origin: '*'}));
app.use(bodyParser.json());


//Login ti mongoDB
const dbURI = 'mongodb+srv://styr0x:20dataBase21@styr0xdata.boecf.mongodb.net/userlogins?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser : true, useUnifiedTopology: true})
    .then((result) => app.listen(port), console.log("Database is Connected! "))
    .catch((err) => console.log(err));

//Hedee Schema
const Schema = new mongoose.Schema ({
    email: String,
    pass: String
});

const User = mongoose.model("notes", Schema);


app.post('/signup', function (req, res) {
    
    const email = req.body.email;
    const password = req.body.password;
    let info;

    if (!email) {
        res.send("You haven't entered an email address, please do so!")
    }

    if (!password) {
        res.send("You haven't entered any password, please do so!")
    }

    if (email != "" && password != "") {
        User.findOne({email: email}, (error, data) => {
            if (error) {
                console.log(error);
            }
            else if (data) {
                if (email == data.email) {
                    console.log(`The email address ${data.email} is already in use!`);
                    res.send(`The email address ${data.email} is already in use!`);
                }
            }
            else if (!data) {
                console.log("Email valid, creating account!");
                res.send(`The email address ${email} is available, creating account!`);
            }
        });

        info =  new User({
            email: email,
            pass: password
        });
        info.save();
    }

    else {
        console.log("ERROR!!");
    }

});

app.post('/login', function (req, res) {
    
    const email = req.body.email;
    const password = req.body.password;
    let info;

    if (!email) {
        res.send("You haven't entered an email address, please do so!")
    }

    if (!password) {
        res.send("You haven't entered any password, please do so!")
    }

    if (email != "" && password != "") {
        User.findOne({email: email}, (error, data) => {
            if (error) {
                console.log(error);
            }
            else if (data) {
                if (email == data.email && password != data.pass) {
                    res.send('Wrong password!');
                }
                else if (email == data.email && password == data.pass) {
                    res.send('Login Successful!')
                }
            }
            else if (!data) {
                res.send(`There is no user with the email address ${email}!`);
            }
        });
    }

    else {
        console.log("ERROR!!");
    }

});


