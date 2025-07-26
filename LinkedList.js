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

    size() {
        let count = 0;
        if (this.head === null) return count;
        else {
            let tmp = this.head;
            count++;
            while (tmp.next) {
                tmp = tmp.next;
                count++;
            }
        }
        return count;
    }

    getHead() {
        return this.head;
    }
} 


const newList = new LinkedList();
newList.append(1)
newList.append(12)
newList.prepend(15)
console.log(newList.head)
newList.prepend(15)
console.log(newList.size())
console.log(newList.getHead())