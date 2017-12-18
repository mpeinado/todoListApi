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
     * /api/todo/{userID}:
     *   get:
     *     tags:
     *       - Todo
     *     parameters:
     *      - in: path
     *        name: userID
     *        type: integer
     *     description: Returns all todo items for a user
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of todo items
     *         schema:
     *           $ref: '#/definitions/TodoItem'
     */
    app.route('/api/todo/:userID')
        .get(todoList.list_all_tasks);
    // http://localhost:3000/todo/1

    
    /**
     * @swagger
     * /api/todo/{userID}/item/{itemID}:
     *   get:
     *     tags:
     *       - Todo
     *     parameters:
     *      - in: path
     *        name: userID
     *        type: integer 
     *      - in: path
     *        name: itemID
     *        type: integer       
     *     description: Returns one todo items for a user
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of todo items
     *         schema:
     *           $ref: '#/definitions/TodoItem'
     */
    app.route('/api/todo/:userID/item/:itemID')
        .get(todoList.get_item);
    
    /**
     * @swagger
     * /api/editItem/{userID}/item/{itemID}/status/{statusID}/itemName/{itemName}:
     *   put:
     *     tags:
     *       - Edit Item
     *     parameters:
     *      - in: path
     *        name: userID
     *        type: integer 
     *      - in: path
     *        name: itemID
     *        type: integer  
     *      - in: path
     *        name: statusID
     *        type: integer  
     *      - in: path
     *        name: itemName
     *        type: string       
     *     description: Edit a todo item
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of todo items
     *         schema:
     *           $ref: '#/definitions/TodoItem'
     */
    app.route('/api/editItem/:userID/item/:itemID/status/:statusID/itemName/:itemName')
        .put(todoList.updateItem);

    
    

};