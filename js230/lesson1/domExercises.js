// Child Nodes (own attempt, wrong)
function childNodes(nodeId) {
  let node = document.getElementById(nodeId);

  // Number of direct nodes
  let numDirectNodes = node.childNodes.length;

  // recursively get all the indirect nodes 
  let numIndirectNodes = 0;
  for (let i = 0; i < node.childNodes.length; i++) {
    numIndirectNodes += childNodes(node.childNodes[i].getAttribute('id')).reduce((acc, currVal) => acc + currVal);
  }

  return [numDirectNodes,numIndirectNodes]
}

// console.log(childNodes(1));


// Child Node, works (not really own attempt)
// function walk(node, callback) {
//   callback(node);

//   for (let index = 0; index < node.childNodes.length; index += 1) {
//     walk(node.childNodes[index], callback);
//   }
// }

// function childNodes(id) {
//   let element = document.getElementById(id);
//   let children = [...element.childNodes];
//   let indirect = 0;

//   for (let child of children) {
//     [...child.childNodes].forEach(node => walk(node, _ => indirect++));
//   }

//   return [children.length, indirect];
// }

function domTreeTracerOLD(id) {

  let element = document.getElementById(id); 
  let domTree = []; 

  // First, get element and its siblings, in the desired order
  let currNodes = element.parentNode.children;
  let currLayer = [];
  for (let i = 0; i < currNodes.length; i++) {
    currLayer.push(currNodes[i].tagName);
  } 

  domTree.push(currLayer);

  // Now, need to get the parent layer, and so on and so forth. 
  return domTree;
}

function domTreeTracer(id) {
  let domTree = []; 
  let currNode = document.getElementById(id); 

  while (currNode.tagName !== "BODY") {
    let nodes = currNode.parentNode.children;
    let currLayer = [];

    for (let i = 0; i < nodes.length; i++) {
      currLayer.push(nodes[i].tagName);
    } 

    domTree.push(currLayer);
    currNode = currNode.parentNode; 
  }

  return domTree; 
}

// console.log(domTreeTracer(1));
// console.log(domTreeTracer(2));
// console.log(domTreeTracer(22));


// function sliceTreet(startIndex, endIndex) {
//   let outerElt = document.getElementById(startIndex);
//   let innerElt = document.getElementById(endIndex);

//   // If the id attribute of the start or end index is not in the DOM, return undefined.
//   if (!outerElt || !innerElt) return undefined; 

//   // Ensure both have body as an ancestor (code can be simplified/abstracted, but leave for now)
//   let currNode;
//   currNode = outerElt;

//   while (currNode !== null) {
//     currNode = currNode.parentNode; 
//     if (currNode.tagname === "BODY") break; 
//   }
//   if (currNode !== "BODY") return undefined; 

//   currNode = innerElt;
//   while (currNode !== null) {
//     currNode = currNode.parentNode; 
//     if (currNode.tagname === "BODY") break; 
//   }
//   if (currNode !== "BODY") return undefined; 


//   // Main algorithm/strategy: 
// }




// Coloring 

/*
One strategy is to detect how many layers the node has been from body... assuming everything is indented properly and consistently...

OK, yes. 

One input... the id is the input. 


Strategy:
`-find how many layers the id input is from body. For example, if body is the parentNode, the layer is 1. if the parent's node's parent node is body, the layer is 2. And so on. 

-Now, use walk to traverse the entire dom body. In the callback function, we want to pass in and keep track of the current layer. If the current layer is the same as the layer of the input id element, then change the class!
*/

// const INITIAL_LEVEL = 0; 
// function walk(node, callback, currGeneration, targetGeneration) {
//   callback(node, currGeneration, targetGeneration);                                             
//   for (let index = 0; index < node.children.length; index += 1) { 
//     walk(node.children[index], callback, currGeneration + 1, targetGeneration);                       
//   }
// }

// function colorGeneration(targetGeneration) {
//   walk(document.body, color, INITIAL_LEVEL, targetGeneration);
// }

// function color(node, currGeneration, targetGeneration) {
//   if (currGeneration === targetGeneration) {
//     node.classList.toggle("generation-color");
//   }
// }

// colorGeneration(1);

const INITIAL_LEVEL = 0; 

function walk(node, currGeneration, callback) {
  callback(node, currGeneration);                                             
  for (let index = 0; index < node.children.length; index += 1) { 
    walk(node.children[index], currGeneration + 1, callback);                       
  }
}

function colorGeneration(targetGeneration) {
  walk(document.body, INITIAL_LEVEL, function(node, currGeneration) {
    if (currGeneration === targetGeneration) {
      node.classList.toggle("generation-color");
    }
  });
}

// colorGeneration(1);

// Node Swap 
function nodeSwap(id1, id2) {
  let node1 = document.getElementById(id1);
  let node2 = document.getElementById(id2);

  if (!node1 || !node2) return; 
  if (existsChildRel(node1, node2)) return; 

  // Swap the nodes. Use dummy node as placeholder
  let placeholder = document.createElement('div');

  node1.parentNode.insertBefore(placeholder, node1);
  node2.parentNode.insertBefore(node1, node2);
  placeholder.insertAdjacentElement("afterend", node2);

  // Remove placeholder
  placeholder.remove();
}

// Check if either node is a child of the other
function existsChildRel(node1, node2) {
  let child; 

  // Go all the way up to document. document.parentNode = null
  child = node1; 
  while (child) {
    if (child === node2) return true; 
    child = child.parentNode; 
  }

  child = node2
  while (child) {
    if (child === node1) return true; 
    child = child.parentNode; 
  }

  return false; 
}

// nodeSwap(1, 2)
// nodeSwap(3, 1);
// nodeSwap(7, 9);


// Nodes to Array (1250pm)
/*
base case
recursive case

let children = Array.prototype.slice.call(node.children)
let dom = [node.tagName, []];

// Base Case
if (children.length === 0) {
  return dom;
} 

// Recursive Step
children.forEach(childElement => {
  dom[1].push(nodesToArr(childElement))
});


*/

function nodesToArr(node = document.body) {
  let children = Array.prototype.slice.call(node.children)
  let dom = [node.tagName, []];

  // Base Case
  if (children.length === 0) {
    return dom;
  } 

  // Recursive Step
  children.forEach(childElement => {
    dom[1].push(nodesToArr(childElement))
  });

  return dom;
}

console.log(nodesToArr());
console.log(JSON.stringify(nodesToArr()));






