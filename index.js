let config = {};
var tree = [];

module.exports = (nodes, params) => {
    try{
        if(!nodes) throw new Error("data missing");
        if(!Array.isArray(nodes)) throw new Error("data isn't iterable");
        if(!params) throw new Error("need params");
        if(!params.id) throw new Error("param needed : id");
        if(params.id in nodes[0] == false) throw new Error("Illegal needed param : id");
        if(params.sortableKey && params.sortableKey in nodes[0] == false) throw new Error("Illegal needed param : sortableKey");
        if(!params.parent) throw new Error("param needed : parent");
        if(!params.children) throw new Error("param needed : children");
        config = params;

        // first step : build nodes tree in rows
        let rows = buildRows(nodes);

        // second step : build tree
        buildTree(rows);

        return tree;
    }
    catch(e){
        return e;
    }
}

function buildRows(nodes){
    let rows = [];
    for(let node of nodes){
        let row = buildRowsNode([], node, nodes);
        rows.push(row);
    }
    return rows;
}

function buildRowsNode(row, node, nodes){
    row.unshift(node);
    const parent = (node[config.parent]) ? find(nodes, node, "parent") : undefined;
    if(parent != undefined) return buildRowsNode(row, parent, nodes);
    else return row;
}

function buildTree(rows){
    for(const row of rows){
        buildTreeNode(row,tree);
    }
}

function buildTreeNode(row,t){
    if(row.length === 0 || t == undefined) return;
    const first = row.shift();
    let node = {...first};
    
    if(row.length != 0 && !node[config.children]) 
        node[config.children] = [];
  
    // looking for an exiting element
    const match = find(t, node, "id");
    if(match == undefined){
        t.push(node);
        if(config.sortableKey) t.sort(dynamicSort(config.sortableKey));
        return buildTreeNode(row,node[config.children]);
    } else {
        return buildTreeNode(row,match[config.children]);
    }
}

function find(nodes, el, key){
    return nodes.find(node => {
        return node[config.id].toString() == el[config[key]].toString();
    });
}

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}