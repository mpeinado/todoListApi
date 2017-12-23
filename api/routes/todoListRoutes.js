'use strict';

module.exports = function(app){
    var todoList = require('../models/todoListModel');

    app.route('/api/todo/:userID')
        .get(todoList.list_all_tasks);

    app.route('/api/todo/:userID/item/:itemID')
        .get(todoList.get_item);
    
    app.route('/api/editItem/:userID/item/:itemID/status/:statusID/itemName/:itemName')
        .put(todoList.updateItem);

    app.route('/api/addItem/:userID/itemName/:itemName')
        .post(todoList.updateItem);
};