import Node from "./Node.js";

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) { 
        if (this.head === null) this.head = new Node(value, null);
        else {
            let tmp = this.head;
            while (tmp.next) tmp = tmp.next;
            tmp.next = new Node(value, null);
        }
    }

    prepend(value) {
        if (this.head === null) this.head = new Node(value, null);
        else {
            let tmp = new Node(value, this.head);
            this.head = tmp;
        }
    }
}


const newList = new LinkedList();
newList.append(1)
newList.append(12)
console.log(newList.head.next.next)
