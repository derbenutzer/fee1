// call the packages we need
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(require('./routes/routes.js'));
app.use(express.static('src'));

const hostname = '127.0.0.1';
const port = 3002;

app.listen(port, hostname);
console.log('Listening on port ' + port + ' on ' + hostname);
