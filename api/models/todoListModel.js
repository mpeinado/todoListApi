'use strict';
var db = require('../../db.js');


exports.list_all_tasks = function(req, res){
    db.query('SELECT * from items', function (error, results, fields) {
        if(error){
            console.log("Query Error");

            res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
            console.log("Query GOod");
            //res.json(JSON.stringify({"status": 200, "error": null, "response": results}));
            res.json(results);
            //If there is no error, all is good and response is 200OK.
        }
    });
};
