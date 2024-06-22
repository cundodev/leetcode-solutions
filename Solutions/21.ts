// 21. Merge Two Sorted Lists

//Definition for singly-linked list.
class ListNode {
  val: number // current value
  next: ListNode | null // pointer to next value
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const mtsl: number[] = [] //Merge Two Sprted Lists

  while (list1 !== null) {
    mtsl.push(list1.val) // current value
    list1 = list1.next // move to next value
  }
  while (list2 !== null) {
    mtsl.push(list2.val)
    list2 = list2.next
  }

  mtsl.sort((a, b) => a - b)

  //creating ordered list
  let list = new ListNode()
  let temp = list

  for (let u of mtsl) {
    list.next = new ListNode(u)
    list = list.next
  }

  return temp.next
}

const aList1 = [1, 2, 4]
const aList2 = [1, 3, 4]

let list1 = new ListNode()
let list2 = new ListNode()

for (let u of aList1) {
  list1.next = new ListNode(u)
  list1 = list1.next
}
for (let u of aList2) {
  list2.next = new ListNode(u)
  list2 = list2.next
}

mergeTwoLists(list1, list2)
