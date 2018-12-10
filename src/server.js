var cors = require('cors');
var express = require('express');
var app = express();

var bodyParser = require('body-parser')
var loginData = require('./db/logindata');
var offerData = require('./db/getofferdata');
var tokenInfo = require('./db/gettokeninfo');
var {getCheckoutData} = require('./db/getcheckout');
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
   console.log(req.query.type == "REVALIDATION");

   var response = {};

   switch(req.query.type){
      case "PURCHASE":
         response = getCheckoutData[2];
      break;
      case "PURCHASE2":
         response = getCheckoutData[4];
      break;
      case "REVALIDATION":
         response = getCheckoutData[1];
      break;
      case "TRANSFER":
         response = getCheckoutData[0];
      break;
      case "BAGGAGE":
         response = getCheckoutData[3];
      break;
      default:
         response = getCheckoutData[2];
      break;
   }
   console.log(getCheckoutData[0])
   res.send(JSON.stringify(response));
})

var server = app.listen(8888, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})