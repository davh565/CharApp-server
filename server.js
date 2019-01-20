const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const templatePathfinder = require('./templates/pathfinder')

//Mongoose

function NumberOrString(key, options){
    mongoose.SchemaType.call(this, key, options, 'NumberOrString')
}
NumberOrString.prototype = Object.create(mongoose.SchemaType.prototype)

//casts to number if possible, otherwise adds as-is. add futher validation later
NumberOrString.prototype.cast = function (val){
    var _val = Number(val)
    if (isNaN(_val)){
    _val = val
    }
    return _val
}

mongoose.Schema.Types.NumberOrString = NumberOrString

mongoose.connect(
    "mongodb://davh:briadir32dh!@CGTest-shard-00-00-h0zai.mongodb.net:27017,cgtest-shard-00-01-h0zai.mongodb.net:27017,cgtest-shard-00-02-h0zai.mongodb.net:27017/CGTest?ssl=true&replicaSet=CGTest-shard-0&authSource=admin&retryWrites=true"
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("DB connected")
});

const schemaPathfinder = new mongoose.Schema({ 
    data: {
        type: Map,
        of: NumberOrString
    }
})
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
        //Only allows one level of nesting currently
        socket.on('editCharacter',function(info){
            Character.findById(info.id,function(err,doc){
                for ( property in info.obj ) {
                    if(typeof info.obj[property]==='object'){
                        for(subProperty in info.obj[property]){
                            let subObj = doc.data.get(property)
                            subObj[subProperty] = info.obj[property][subProperty]
                            doc.data.set(property,subObj)
                        }
                    }
                    else doc.data.set(property,info.obj[property])
                    console.log(property, info)
}
                doc.save()

                if(err){
                console.log('Update Error!');
            }},Character.find(emitChars))
            
        })
        
        socket.on('addCharacter', function(charInfo){
            const newChar = new Character(
                templatePathfinder
    )
            newChar.data.set('playerName', charInfo.name)
        console.log(newChar.data)
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