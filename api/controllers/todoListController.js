'use strict';
var db = require('../../db.js');

exports.list_all_tasks = function(req, res){
    var dbQuery = "CALL `todo_list`.`get_todoItems`(" + req.params.userID + ")";

    db.query(dbQuery, function (error, results, fields) {
        if(error){
            console.log("Query Error");

            res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
            console.log(JSON.stringify(results));
            //res.json(JSON.stringify({"status": 200, "error": null, "response": results}));
            res.json(results[0]);
            //If there is no error, all is good and response is 200OK.
        }
    });
};

exports.get_item = function(req, res){
    var dbQuery = "CALL `todo_list`.`get_item`(" + req.params.userID + "," + req.params.itemID + ")";

    db.query(dbQuery, function (error, results, fields) {
        if(error){
            console.log("Query Error");

            res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
            console.log(JSON.stringify(results));
            //res.json(JSON.stringify({"status": 200, "error": null, "response": results}));
            res.json(results[0]);
            //If there is no error, all is good and response is 200OK.
        }
    });
};

exports.updateItem = function(req, res){
    // userID int, itemID int, statusID int, itemName
    var itemID = req.params.itemID ? req.params.itemID :  null;
    var statusID = req.params.statusID ? req.params.statusID :  null;

    var dbQuery = "CALL `todo_list`.`update_item`(" + req.params.userID + ", " + itemID + 
        ", " + statusID +  ", '"  + req.params.itemName + "')";

    db.query(dbQuery, function (error, results, fields) {
        if(error){
            console.log("Query Error");

            res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
            console.log(JSON.stringify(results));
            //res.json(JSON.stringify({"status": 200, "error": null, "response": results}));
            res.json(results[0]);
            //If there is no error, all is good and response is 200OK.
        }
    });
};