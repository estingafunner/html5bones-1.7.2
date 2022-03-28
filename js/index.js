import fetch, {
  Blob,
  blobFrom,
  blobFromSync,
  File,
  fileFrom,
  fileFromSync,
  FormData,
  Headers,
  Request,
  Response,
} from 'node-fetch'

global.fetch = fetch;
global.Headers = fetch.Headers;

//let nowish = (new Date().getTime()) - 3;

//function Tesi() {
const id = 'DCHBKYZF5NMXHCV8AG4M1J53DFDONO8Z';
const secret = 'WV0KBNNCRLP0SO3CYZMOGFQATYTPG2Y';

let myHeaders = new Headers();
myHeaders.append("Authorization", "Basic e3thcGlVTn19Ont7YXBpUGFzc319");

const requestOptions = {
  'method': 'GET',
  redirect: 'follow',
  //'hostname': 'api.limblecmms.com',
  //'path': '/v2/tasks/?tasks=5&status=0',
  'headers': {
    'Authorization': 'Basic ' + Buffer.from(id + ':' + secret).toString('base64')
  }
};

fetch("HTTPS:////api.limblecmms.com:443/v2/tasks/?tasks=5&status=1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//}


/////////
/*
document.getElementById("bPull").onclick = Tesi();
 0



*/
