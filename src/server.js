var cors = require('cors');
var express = require('express');
var app = express();

var bodyParser = require('body-parser')
var loginData = require('./db/logindata');
var offerData = require('./db/getofferdata');
var tokenInfo = require('./db/gettokeninfo');
var userData = require('./db/getuserdata');
var getCheckoutData = require('./db/getcheckout');
var addCheckoutData = require('./db/addcheckoutdata');

app.use(cors());
app.options('*',cors());
app.use(bodyParser.json());

app.get('/api/login', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.send(JSON.stringify(loginData));
   // console.log(req.headers);
});
app.get('/api/user', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.send(JSON.stringify(userData));
})
app.post('/api/checkout', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.send(JSON.stringify(addCheckoutData));
})
app.get('/api/checkout/offer', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.send(JSON.stringify(offerData));
})
app.get('/api/oauth/tokeninfo', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.send(JSON.stringify(tokenInfo));
})
app.get('/api/checkout', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.send(JSON.stringify(getCheckoutData));
})

var server = app.listen(8888, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})