
// Given a head of a linked list and a target value,
// remove all occurrences of the target value from the
// linked list.

// Input: 1 -> 2 -> 3 -> 2 -> 4 -> null, Target: 2
// Output: 1 -> 3 -> 4

// Input: 1 -> 3 -> 1, Target: 1
// Output: 3 -> null

// Input: null, Target: 3
// Output: null

class Node {
  constructor(data, next) {
    this.val = data === undefined ? 0 : data;
    this.next = next === undefined ? null : next;
  }
}

let head = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(2);
let five = new Node(4);

head.next = two;
two.next = three;
three.next = four;
four.next = five

function printLinkedList(head) {
  let curr = head;
  let container = [];
  while (curr) {
    container.push(curr.val);
    curr = curr.next;
  }

  container.push('null');
  console.log(container.join(' -> '));
}

// printLinkedList(head);

function remove(target, head) { // OWN SOLUTION USING A STARTING DUMMY NODE
  let dummyNode = new Node(0, head);
  let curr = dummyNode;
  let prev = dummyNode; 

  while (curr) {
    if (curr.val === target) {
      prev.next = curr.next
    } else {
      prev = curr;
    }
    curr = curr.next
  }

  return dummyNode.next;

}

printLinkedList(remove(2, head));

head = new Node(1);
two = new Node(3);
three = new Node(1);

head.next = two;
two.next = three;

printLinkedList(remove(1, head));


