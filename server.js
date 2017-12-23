// ---> start the server on port 3000 
var express = require('express'),
    app = express(),
    port = process.env.port || 3000,
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser')
    swaggerJSDoc = require('swagger-jsdoc'),
    path = require('path');

// swagger definition
var swaggerDefinition = {
    info: {
      title: 'Node Swagger API',
      version: '1.0.0',
      description: 'Demonstrating how to describe a RESTful API with Swagger',
    },
    host: 'localhost:3000',
    basePath: '/',
  };
  
// options for the swagger docs
var options = {
// import swaggerDefinitions
swaggerDefinition: swaggerDefinition,
// path to the API docs
apis: ['./api/routes/*.js', './api/definitions/*.yaml', './api/paths/*.yaml'],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

// serve swagger
app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

// <-------------END swaggerSpec

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app);


// allows access to /public folder (Swagger spec UI)
app.use(express.static(path.resolve('./public')));

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

// ---- > error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

app.listen(port, () => {
    console.log("Server started on port " + port);
});