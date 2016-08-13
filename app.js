var net = require("net");
var port = 5000;

var server = net.createServer(function( socket ){
    socket.on("connection", function(){
        console.log("New connection is made ");
    });

    socket.on("error", function(){
        console.log("Error occurs");
    });

    socket.on("close", function(){
        console.log("Connection close");
   });
});

server.listen(port);
console.log("Server running is 127.0.0.1: " + port);
