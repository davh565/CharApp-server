let test = {
    stat: {
        total: 'Number',
        mod: 'Number',
    }
}
stat.total

let test2 = {
    stat: {
        _children: {
            total: 'Number',
            mod: 'Number',

        }



    }
}

let t4 = {
    initiative: {
        total: { type: Number, default: 10 },
        dex: { type: Number, default: 10 },
        misc: { type: Number, default: 10 }
    },
    level: { type: Number, default: 10 },
}



////
const schemaCharacter = new Schema({
    data: {
        type: Map,
        of: String
    }
});

test.stat.total

const ChildSchema = new Schema({
    firstName: String,
  });
  
  const ParentSchema = new Schema({
    name: String,
    stat: { type: Map, of: ChildSchema },
  });

let bob = {
    name: 'bob',
    _id: '2343244363fdbfdb34t23',
    stat: {
        name: 'bob',
        age: 23,
        str: {total: 16,
            mod: 1},
    }
}
let bob2 = {
    name: {
            value: 'bob',
            _meta: 34,
            _children: []},
    _id: {value: '2343244363fdbfdb34t23'},
    stat: {
        name: 'bob',
        age: 23,
        str: {total: 16,
            mod: 1},
    }
}