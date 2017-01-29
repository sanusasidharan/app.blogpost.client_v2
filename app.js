var noderestclient = require('node-rest-client').Client;
var client  =  new noderestclient();

var http = require('http'),
 fs = require('fs'),
index = fs.readFileSync(__dirname + '/index.html');

// Send index.html to all requests
var app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

// Socket.io server listens to our app
var io = require('socket.io').listen(app);


// Socket.io server listens to our app
var io = require('socket.io').listen(app);

// Send current time to all connected clients
function sendTime() {
	
	client.get("http://localhost:999", function (data, response) {
		io.emit('refresh', data);
	});
}

// Refresh the data after a fixed interval
setInterval(sendTime, 1000000000000000);

// Emit welcome message on connection
io.on('connection', function(socket) {
    // Use socket to communicate with this particular client only, sending it it's own id
    
	client.get("http://localhost:999", function (data, response) {
		socket.emit('refresh', data);
	});

});

app.listen(3000);
console.log("Running at Port 3000");