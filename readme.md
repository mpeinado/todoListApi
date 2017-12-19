API Access
http://localhost:3000/api/todo


http://localhost:3000/api-docs/#/Todo/get_api_todo

@TODO 
+ Clean up the code - controllers, models
    Cleaner way to define Swagger Spec (maybe look at MD)
+ API Endpoints 
    X Edit 
    Delete/Deactivate - NO delete, Need to add logic to PROC to deactivate if status compleated
+ Express
+ nodemon 
+ FaceBook/Twitter login
+ Better way to define routes 
+ how to write readme files
? Deploy to some server
X Swagger
X Create and update an item
X Get Item
X Debug 
X Setup sql on Ubuntu 
X Install MySql Workbench
X Create Schema  


     "program": "${workspaceFolder}/api/models/todoListModel.js",

What I did
    npm init 
    npm install --save-dev nodemon
        help keep track of change to the application by watching changed files and automatically restart the server.
    npm install express --save
        used to create the server
    npm install mysql --save
        mysql driver
    npm install swagger-jsdoc --save
        https://www.npmjs.com/package/swagger-jsdoc

CRUD
    GET
    PUT - 
    POST 
    DELETE

https://scotch.io/tutorials/keeping-api-routing-clean-using-express-routers

**** References: **** 
Tutorial I followed to setup the app - https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

node js api with mysql
https://medium.com/@avanthikameenakshi/building-restful-api-with-nodejs-and-mysql-in-10-min-ff740043d4be
http://localhost:3000/api/todo/1/item/3
Express Routing
http://expressjs.com/en/guide/routing.html


Debugging 
node --debug ./server.js
https://github.chttp://expressjs.com/en/guide/routing.htmlom/Microsoft/vscode/issues/8955

Swagger
    http://localhost:3000/swagger.json
    http://localhost:3000/api-docs/#/Todo/get_api_todo

    http://mherman.org/blog/2016/05/26/swagger-and-nodejs/#.WjWk9t_OBhE

    https://swagger.io/specification/#parameterObject

    Add /public folder as a route to be able to access Swagger UI
    https://stackoverflow.com/questions/41291382/how-to-access-files-in-my-public-folder-in-node-js-express