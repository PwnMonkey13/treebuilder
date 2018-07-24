const treebuilder = require("../index.js"),
    util = require("util");

const data = [

    {
        "parent": "A2",
        "id": "A21",
    },  
    {
        "parent": "A",
        "id": "A1",
    },
    {
        "parent": "B1",
        "id": "B11",
    },
    {
        "parent": "A",
        "id": "A2",
    }, 
    {
        "parent": "B",
        "id": "B2",
    },   
    {
        "parent": "B1",
        "id": "B11",
    },
    {
        "parent" : "B",
        "id": "B1",
    }, 
    {
        "id": "A",
    },
    {
        "id": "B",
    },   
    {
        "parent": "A1",
        "id": "A11",
    }
];

let tree = treebuilder(data, { id : "id", 
                    parent : "parent", 
                    children : "children",
                    sortableKey : "id"
                });

console.log(util.inspect(tree, true, null));
   


