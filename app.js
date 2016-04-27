var express = require('express');
var bodyparser = require('body-parser');
var session = require('express-session');

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//****** session
app.use(session({secret: "secret",  resave : true,  saveUninitialized : false}));

var routes = require('./routes/routes.js');

app.set('view engine', 'ejs');
//app.engine('handlebars', handlebars({}));

app.get('/', routes.loginPageHandler);
app.get('/toLanding', routes.landingPageHandler);
app.post('/toCity', routes.cityPageHandler);

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('HTTP server is listening on port: ' + port);
});