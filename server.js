// ---> start the server on port 3000 
var express = require('express'),
    app = express(),
    port = process.env.port || 3000,
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app);


app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

// error handler
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