var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

//Mongoose
mongoose.connect(
    "mongodb://davh:briadir32dh!@CGTest-shard-00-00-h0zai.mongodb.net:27017,cgtest-shard-00-01-h0zai.mongodb.net:27017,cgtest-shard-00-02-h0zai.mongodb.net:27017/CGTest?ssl=true&replicaSet=CGTest-shard-0&authSource=admin&retryWrites=true"
);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("DB connected")
});

var msgSchema = new mongoose.Schema({
    message: String
});
var Message = mongoose.model('Message',msgSchema);

//Socket IO
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io
    .of("/characters")
    .on('connection',function(socket){
    console.log(socket.id + ' connected');
    socket.on('disconnect', function(){
        console.log(socket.id + ' disconnected');
    });
    Message.find(function(err,messages){
        if(err) return console.log('Retrieval Error!');
        for(const message of messages){
            io.emit('chat message', message);
        }
    })
    socket.on('chat message', function(msg){
        var message = new Message({
            message: msg
        })
        console.log(message)
        message.save(function(err, message){
            if(err){
                console.log('Save Error!');
            }
        })
        io.emit('chat message', message);
        console.log('message: ' + msg);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});