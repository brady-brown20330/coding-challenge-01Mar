/*
Merge k sorted linked lists and return it as one sorted linked list.

Note: please make sure to use linked lists as opposed to arrays or other data-structures for this problem.

*/
// defining the shape of each node in a singly linked list
class Node {
  constructor(val) {
    this.val = val || null
    this.next = null
  }
}
// defining the methods available on a linked list
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  // push new value into list
  push(val) {
    var newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this;
  }
  // pop the last node off of the list
  pop() {
    if (!this.head) return undefined

    let current = this.head
    var newTail = current

    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  // remove an item from the start of the list
  shift() {
    if (!this.head) return undefined
    var oldHead = this.head
    this.head = oldHead.next
    this.length--
    return oldHead
  }
}

var mergeKLists = function(...lists) {
  if(!lists || !lists.length) return null;
  let arr = []
  let res = new Node(-1);

  lists.forEach(list => {
      let cur = list;
      while(cur.length) {
          arr.push(cur.shift().val);
          cur = cur;
          // console.log('current arr: ', arr)
      }
  });
let temp = new LinkedList()
  // let cur = res;
  console.log(arr)
  arr.sort((a,b) => a - b)
      .forEach(n => {

      temp.push(n)
  });
  console.log(temp)
  return temp;
};

var list1 = new LinkedList()
list1.push(1)
list1.push(2)
list1.push(3)
list1.push(6)
// list1.pop()
// console.log(list1)
var list2 = new LinkedList()
list2.push(1)
list2.push(2)
list2.push(7)
list2.push(8)
list2.push(9)

var list3 = new LinkedList()
list3.push(2)
list3.push(6)

let mergedList = mergeKLists(list1, list2, list3)

console.log('should be one merged list: ', mergedList)
// console.log(list1)
