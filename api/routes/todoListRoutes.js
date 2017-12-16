'use strict';

module.exports = function(app){
    var todoList = require('../controllers/todoListController');

    //todoList Routes
    app.route('/todo')
        .get(todoList.list_all_tasks);

    app.route('/todo/:itemID')
        .get(todoList.get_item);

};