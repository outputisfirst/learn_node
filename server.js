let http = require('http');
let url = require('url');

function start(route, handle) {
  function onRequest(request, response){
    let pathname = url.parse(request.url).pathname;
    console.log('Request for "' + pathname + '" received');

    route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(3000);
  console.log('Server has started.');
}

exports.start = start;

