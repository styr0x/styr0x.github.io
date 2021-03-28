
const { response } = require('express');
const express = require ('express');
const app = express();
const fs = require('fs');
const port = '3000';

app.use(express.static('public'));

app.get('/getInfo', function (req, res) {
    
    let email = req.query.email;
    let password = req.query.password;
    let info, stringifiedInfo, previousInfo, parsedPreviousInfo, pushedInfo;


    if (email != "" && password != "") {

        info =  {
            email : email,
            pass : password
        };
        
        if (fs.existsSync('info.json')) {
            previousInfo = fs.readFileSync('info.json');
            parsedPreviousInfo = JSON.parse(previousInfo);
            parsedPreviousInfo['users'].push(info);
            pushedInfo = JSON.stringify(parsedPreviousInfo, undefined, 2);
            fs.writeFileSync('info.json', pushedInfo);
            console.log(pushedInfo);
        }
        
        else {
            stringifiedInfo = JSON.stringify(info);
            fs.writeFileSync('info.json', "{" + '"users"' + ":" + "[" + "\n"
            + stringifiedInfo + "\n" + "]" + "}");
        }
        
    }

    else {
        console.log("ERROR!!");
    }
});

app.listen(port);
