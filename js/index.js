

const https = require('https');
var fs = require('fs');
var fetch = require('node-fetch');

const id = 'DCHBKYZF5NMXHCV8AG4M1J53DFDONO8Z';
const secret = 'WV0KBNNCRLP0SO3CYZMOGFQATYTPG2Y';


let myHeaders = new Headers();
myHeaders.append("Authorization", "Basic e3thcGlVTn19Ont7YXBpUGFzc319");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("HTTPS:////api.limblecmms.com:443/v2/tasks/?tasks=5&status=0", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

///////////////////

/* const options = {
  'method': 'GET',
  'hostname': 'api.limblecmms.com',
  'path': '/v2/tasks/?tasks=5&status=1',
  'headers': {
    'Authorization': 'Basic ' + Buffer.from(id + ':' + secret).toString('base64')
  }
};

var req = https.request(options, function (res) {
    var chunks = [];
  
    res.on("data", function (chunk) {
      chunks.push(chunk);
    });
  
    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  
    res.on("error", function (error) {
      console.error(error);
    });
  });
  
  req.end(); */



  /////

/* const req = https.request(options, function (res) {
  const chunks = [];


  res.on("data", function (chunk) {
    chunks.push(chunk);
  });


  res.on("end", function (chunk) {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });


  res.on("error", function (error) {
    console.error(error);
  });
});






req.end(); */




