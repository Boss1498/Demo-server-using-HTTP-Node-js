const http = require ('http');
const fun=( request , response)=>{
 console.log(request);
 response.end("Heyyy How are you!");
};
const server = http.createServer(fun);
server.listen(7777);