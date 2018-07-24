# NodeJS TreeBuilder

Treebuilder used to build a tree from nodes (ex Mongoose document dump)

### Install

```sh
$ npm install 
```
## How to use

Run the following with your parameters.
treebuilder(data, config);

```javascript
let tree = treebuilder(data, 
	{ // Parameters object
		id : "_id", // required and must match with with an existing key
        parent : "parent", // required and must match with an existing key
        children : "children", // required but can be whatever you want
        sortableKey : "_id" // optional sort. If used must match with an existing key
      });
```

## Examples:

npm run sample1

The example will do a toString over Mongoose ObjectIds

```javascript
[
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
    ...
]
```
Expecting :

```javascript
[ 
    { _id: 57f6c369e23b64858d871ce4,
    name: 'A',
    children:
    [ 
        { 
            parent: 57f6c369e23b64858d871ce4,
            _id: 57f6c369e23b64858d871ce6,
            name: 'A1',
            children:
            [ 
                { parent: 57f6c369e23b64858d871ce6,
                    _id: 57f6c369e23b64858d871ce8,
                    name: 'A11' 
                }
            ]
        }
        { 
            parent: 57f6c369e23b64858d871ce4,
            _id: 57f6c369e23b64858d871ce7,
            name: 'A2' 
        }
    },
    { _id: 57f6c369e23b64858d871ce5, name: 'B' }
]
```
