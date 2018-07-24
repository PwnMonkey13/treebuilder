const treebuilder = require("../index.js"),
    mongoose = require("mongoose"),
    Types = mongoose.Types,
    ObjectId = Types.ObjectId,
    util = require("util");
    
const data = [
    {
        "parent": ObjectId("57f6c369e23b64858d871ce6"),
        "_id": ObjectId("57f6c369e23b64858d871ce8"),
        "name": "A11"
    },
    {
        "parent": ObjectId("57f6c369e23b64858d871ce4"),
        "_id": ObjectId("57f6c369e23b64858d871ce6"),
        "name": "A1"
    },
    {
        "_id": ObjectId("57f6c369e23b64858d871ce4"),
        "name": "A"
    },
    {
        "parent": ObjectId("57f6c369e23b64858d871ce4"),
        "_id": ObjectId("57f6c369e23b64858d871ce7"),
        "name": "A2"
    },
    {
        "_id": ObjectId("57f6c369e23b64858d871ce5"),
        "name": "B"
    },
    {
        "parent": ObjectId("57f6c369e23b64858d871ce8"),
        "_id": ObjectId("57f6c369e23b64858d871ce9"),
        "name": "A111"
    }
];

let tree = treebuilder(data, { id : "_id", 
                    parent : "parent", 
                    children : "children",
                    sortableKey : "_id"
                });

console.log(util.inspect(tree, true, null));
   


