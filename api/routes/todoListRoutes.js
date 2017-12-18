'use strict';

module.exports = function(app){
    var todoList = require('../controllers/todoListController');

    /**
     * @swagger
     * definitions:
     *   TodoItem:
     *     properties:
     *       name:
     *         type: string
     *       status:
     *         type: string
     *       itemID:
     *         type: integer
     *       createdDate:
     *         type: string
     */

    /**
     * @swagger
     * /api/todo:
     *   get:
     *     tags:
     *       - Todo
     *     description: Returns all todo items for a user
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of todo items
     *         schema:
     *           $ref: '#/definitions/TodoItem'
     */
    app.route('/todo')
        .get(todoList.list_all_tasks);

    app.route('/todo/:itemID')
        .get(todoList.get_item);

};