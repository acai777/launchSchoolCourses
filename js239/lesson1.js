function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

let firstWordFromParagraphs = [];

function getFirstWord(node) {
  if (node.tagName === "P") {
    firstWordFromParagraphs.push(node.textContent.trim().split(/\s+/)[0]);
  }
}

let parCount = 1 
function addClassStanza(node) {
  if (node.tagName === "P") {
    if (parCount === 1) {
      parCount += 1; 
    } else {
      node.classList.add('stanza')
    }

  }
}

document.addEventListener('DOMContentLoaded', () => {

  walk(document, addClassStanza); 
  //walk(document, getFirstWord);
  //console.log(firstWordFromParagraphs);
});