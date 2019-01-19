const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const templatePathfinder = require('./templates/pathfinder')

//Mongoose
mongoose.connect(
    "mongodb://davh:briadir32dh!@CGTest-shard-00-00-h0zai.mongodb.net:27017,cgtest-shard-00-01-h0zai.mongodb.net:27017,cgtest-shard-00-02-h0zai.mongodb.net:27017/CGTest?ssl=true&replicaSet=CGTest-shard-0&authSource=admin&retryWrites=true"
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("DB connected")
});

const schemaPathfinder = new mongoose.Schema({ data: {} })
const Character = mongoose.model('Character',schemaPathfinder);
// console.log(schemaPathfinder)
//Socket IO
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io
    .on('connection',function(socket){

        function emitChars(err, chars){
            if (err) return handleError(err);
            io.emit('getChars',chars)
            // console.log(chars);
        }
        // console.log(getCharacter)
        console.log(socket.id + ' connected');
        socket.on('disconnect', function(){
            console.log(socket.id + ' disconnected');
        });
        socket.on('reqCharacters',function(query){
            Character.find(emitChars)
            // console.log( getCharacter)
        })
        socket.on('delCharacter',function(id){
            Character.findByIdAndDelete(id,function(err){
                if(err){
                console.log('Delete Error!');
            }})
            Character.find(emitChars)
            //  console.log( 'delete '+id)
        })
        socket.on('editCharacter',function(info){
            Character.findById(info.id,function(err,doc){
                for ( property in info.obj ) {
                    // console.log( property ); // Outputs: foo, fiz or fiz, foo
                    doc.data[property]=info.obj[property]
                    console.log(doc.data[property])
}
                console.log(doc)
                doc.markModified('data')
                doc.save()

                if(err){
                console.log('Update Error!');
            }})
            Character.find(emitChars)
            //  console.log( 'delete '+id)
        })
        
        socket.on('addCharacter', function(charInfo){
            const newChar = new Character({
                data: {
                characterName: charInfo.name,
            campaign: charInfo.campaign,
            ruleset: charInfo.ruleset,
            str: {
                total: 15,
                modifier: 1,
                temp: 2
            }
        }
    })
        // console.log(newChar)
        newChar.save(function(err){
            if(err){
                console.log('Save Error!');
            }
            else{
            }
        })
        socket.emit('addedChar', newChar._id)
        Character.find(emitChars)
        // getCharacter
        // io.emit('addedChar',newChar._id);
        // console.log(charInfo.name);
        // console.log(charInfo.ruleset);
        // console.log(charInfo.campaign);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});