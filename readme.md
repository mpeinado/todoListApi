@TODO 
+ Swagger
+ API Endpoints 
+ Express
+ nodemon 
+ FaceBook/Twitter login
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

http://localhost:3000/todo



**** References: **** 
Tutorial I followed to setup the app - https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

node js api with mysql
https://medium.com/@avanthikameenakshi/building-restful-api-with-nodejs-and-mysql-in-10-min-ff740043d4be


Debugging 
node --debug ./server.js
https://github.com/Microsoft/vscode/issues/8955

Swagger
    http://localhost:3000/swagger.json
    http://localhost:3000/api-docs/#/Todo/get_api_todo

    http://mherman.org/blog/2016/05/26/swagger-and-nodejs/#.WjWk9t_OBhE

    Add /public folder as a route to be able to access Swagger UI
    https://stackoverflow.com/questions/41291382/how-to-access-files-in-my-public-folder-in-node-js-express