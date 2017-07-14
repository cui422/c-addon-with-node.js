//include c++ addon
///build/Release/factorial.node
var addon = require('./build/Release/factorial');
var express = require('express');

var port = process.env.PORT || 5000;

var app = express();
app.use('/', express.static(__dirname + '/'));
app.use('/', express.static(__dirname + '/public/'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
})

var http = require('http');
var server = http.Server(app);
var io = require('socket.io')(server);

server.listen(port);

io.on('connection', function( client ){
    onClientConnect( client );
    client.on("disconnect", onClientDisconnect);
    client.on("login", onUserConfirm);
    client.on("request", onRequest);
});


onClientConnect = function( client ){
    console.log('connected');
};

onClientDisconnect = function(){
    console.log('disconnected');
};

onUserConfirm = function(user_info) {
    if (user_info[0] == "admin" && user_info[1] == "admin123" ) {
        console.log("Login Confirm");
        this.emit('login', "confirmed");
    } else {
        this.emit('login', "Invalid Username or Password");
    }
}

//response the result of factorial to request from client.
onRequest = function(value) {
	var client = this;
	console.log("received: ", value);
	client.emit('get_factorial', addon.factorial(parseInt(value)));
}


