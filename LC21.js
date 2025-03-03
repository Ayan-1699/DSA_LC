// 21. Merge Two Sorted Lists

/*
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  
  // Create sample linked lists
  const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
  const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));
  
  const mergedList = mergeTwoLists(list1, list2);
  
  // Print merged list
  function printList(node) {
    let current = node;
    let result = [];
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }

 function mergeTwoLists(list1, list2) {
    let curr1 = list1;
    let curr2 = list2;
    let dummy = new ListNode(0);
    let temp = dummy;
    while(curr1 !== null && curr2 !== null){
        if(curr1.val < curr2.val) {
            temp.next = curr1;
            curr1 = curr1.next;
        }
        else {
            temp.next = curr2;
            curr2 = curr2.next;
        }
        temp = temp.next;
    }
    while(curr1 !== null) {
        temp.next = curr1;
        curr1 = curr1.next;
        temp = temp.next;
    }
    while(curr2 !== null) {
        temp.next = curr2;
        curr2 = curr2.next;
        temp = temp.next;
    }

    return dummy.next;
};

printList(mergedList);



// from chatGpt   O(m+n)

function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(-1); // Dummy node to start the merged list
    let current = dummy;
  
    while (list1 && list2) {
      if (list1.val < list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    // Attach remaining nodes
    current.next = list1 || list2;
  
    return dummy.next; // Return the merged linked list
  }