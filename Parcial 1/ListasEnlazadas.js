class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseList(head) {
    let prev = null;
    let current = head;
    while (current) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
}

function printList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

function mergeLists(list1, list2) {

    list1 = reverseList(list1);
    list2 = reverseList(list2);
    
    let mergedHead = new ListNode(null); 
    let current = mergedHead;

    while (list1 && list2) {
        if (list1.value < list2.value) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 || list2;

    return mergedHead.next;
}

let list1 = new ListNode(9);
list1.next = new ListNode(7);
list1.next.next = new ListNode(5);

let list2 = new ListNode(8);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);

let mergedList = mergeLists(list1, list2);
printList(mergedList);
