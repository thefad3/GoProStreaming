var http = require('http');
var path = require('path');
var async = require('async');
var socketio = require('socket.io');
var express = require('express');
var Camera = require('gopro').Camera;
var ejs = require('ejs');


var app= express();
var server = http.createServer(app);
var io = socketio.listen(server);

app.use(express.static(path.resolve(__dirname, 'client')));
app.set('view engine', 'ejs');


app.get('/', function(req, res){

  //var cam = new Camera('10.5.5.9', 'camera password')
  res.render('index');

});


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
});
