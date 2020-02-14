var express = require('express');
var app = express();
const router = express.Router();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'emwadmin',
        password: 'E#Mwadmin',
        server: 'rxemwtech.database.windows.net', 
        database: 'rxemwvideolab',
        encrypt: true
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select Usr_Id, Mudid, Usr_Name from vlab_User', function (err, record) {
            
            if (err) console.log(err)

            // send records as a response
            console.log("queeee")
            res.send(record + {"usr":1});
            
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});
