// function domTreeTracer(id) {
//   let result = [];

//   let currNode = document.getElementById(id);
//   let siblings;
//   let currLayer;
//   while (currNode.id) {
//     currLayer = [];
//     siblings = Array.from(currNode.parentNode.children); 
//     siblings.forEach(node => currLayer.push(node.tagName));
//     result.push(currLayer);
//     currNode = currNode.parentNode;
//   }

//   return result; 
// }

  // Get siblings
  // let currLayer = [];
  // let currNode = document.getElementById(id);
  // let siblings = Array.from(currNode.parentNode.children); 
  // siblings.forEach(node => currLayer.push(node.tagName));
  // result.push(currLayer);


  // "Only elements that have body as an ancestor (parent, grandparent, etc.) are sliceable."
  function sliceTree(id1, id2) {
    let outerNode = document.getElementById(id1);
    let nestedNode = document.getElementById(id2); 

    if (!outerNode || !nestedNode) return; 
    if (!outerNode.contains(nestedNode)) return; 

    let result = [];
    let currNode = nestedNode; 

    while (currNode !== outerNode) {
      result.push(currNode.tagName);
      currNode = currNode.parentNode; 
    }

    result.push(currNode.tagName) // adding name of parent node
    result.reverse();

    return result;
  }

function walk(node, callback) {
  callback(node); 

  for (let i = 0; i < node.children.length; i +=1) {
    walk(node.children[i], callback);
  }
}

// function colorGeneration(level) {
//   let currLevel = 0
//   walk(document.body, (node) => {
//     currLevel +=1;

//     if (currLevel === level) {
//       node.classList.add('generation-color');
//     }
//   })
// }


function nodeSwap(id1, id2) {
  let node1 = document.getElementById(id1);
  let node2 = document.getElementById(id2); 

  if (node1.contains(node2) || node2.contains(node1)) return;

  let placeholder = document.createElement('div');
  node1.parentNode.insertBefore(placeholder, node1);

  node2.parentNode.insertBefore(node1, node2);
  placeholder.insertAdjacentElement("afterend", node2);

  placeholder.remove();
}






