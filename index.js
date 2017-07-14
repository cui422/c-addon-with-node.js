var express = require('express');
var app = express();

var port = process.env.PORT || 5000;
//app.set('port', (process.env.PORT || 5000));

app.use('/', express.static(__dirname + '/'));
app.use('/', express.static(__dirname + '/public/'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
})
// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

/*
app.get('/', function(request, response) {
  response.render('pages/index');
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
*/

const addon = require('./build/Release/factorial');

var http = require('http');
var server = http.Server(app);
var io = require('socket.io')(server);

server.listen(port);

io.on('connection', function( client ){
    onClientConnect( client );
    client.on("disconnect", onClientDisconnect);
    client.on("request", onGetResult);
});


onClientConnect = function( client ){
    console.log('connected');
};

onClientDisconnect = function(){
    console.log('disconnected');
};

onGetResult = function(value) {
	client = this
	console.log("received: ", value);
	client.emit('get_result', addon.factorial(parseInt(value)));
}


