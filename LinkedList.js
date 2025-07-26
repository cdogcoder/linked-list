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
            this.head = new Node(value, this.head);
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

    getTail() {
        if (this.head === null) return null;
        else {
            let tmp = this.head;
            while (tmp.next) {
                tmp = tmp.next;
            }
            return tmp;
        }
        
    }
    
    at(index) {
        let count = 0;
        if (index > this.size() || this.head === null) return null;
        else {
            let tmp = this.head;
            if (count == index) return tmp;
            while (tmp.next) {
                tmp = tmp.next;
                count++;
                if (count == index) return tmp;
            }
        }
    }

    pop() {
        if (this.head === null) console.error("List is empty")
        if (this.size() == 1) {
            this.head.next = null;
        } else {
            const secondToLastNode = this.at(this.size()-2);
            secondToLastNode.next = null;
        }
    }

    contains(value) {
        if (this.head === null) return false;
        else {
            let tmp = this.head;
            if (tmp.data == value) return true;
            while (tmp.next) {
                tmp = tmp.next;
                if (tmp.data == value) return true;
            }
            return false;
        }
    }

    find(value) {
        let count = 0;
        if (this.head === null) return null;
        else {
            let tmp = this.head;
            if (tmp.data == value) return count;
            while (tmp.next) {
                tmp = tmp.next;
                count++;
                if (tmp.data == value) return count;
            }
            return null;
        }
    }

    toString() {
        let string = "";
        if (this.head === null) return " null ";
        else {
            let tmp = this.head;
            while (tmp.next) {
                string += `( ${tmp.data} ) -> `;
                tmp = tmp.next;
            }
            string += `( ${tmp.data} ) -> null`;
        }
        return string;
    }

    insertAt(value, index) {
        let count = 0;
        if (index > this.size() || (this.head === null && index != 0)) console.error("Index exceeds list size")
        else {
            let tmp = this.head;
            if (count == index) {
                this.prepend(value)
            } else {
                while (tmp.next) {
                    tmp = tmp.next
                    count++;
                    if (count == index) {
                        let newNode = new Node(value, tmp);
                        let prevNode = this.at(count-1);
                        prevNode.next = newNode;
                    }
                }
                if (++count == index) {
                    this.append(value)
                }
            }
        }

    }

    removeAt(index) {
        let count = 0;
        if (this.head === null) console.error("List is empty")
        else if (index >= this.size()) console.error("Unable to remove value at index greater than the list size")
        else {
            let tmp = this.head;
            if (count == index) {
                this.head = this.at(++count);
            } else {
                while (tmp.next) {
                    tmp = tmp.next;
                    count++;
                    if (count == index) {
                        let prevNode = this.at(count-1);
                        prevNode.next = tmp.next;
                    }
                }
            }
        }
    }
} 


const newList = new LinkedList();
newList.append(1)
newList.append(12)
newList.prepend(15)
// console.log(newList.head)
// newList.prepend(16)
// console.log(newList.size())
// console.log(newList.getHead())
// console.log(newList.getTail())
// console.log(newList.at(0))
// newList.pop()
// console.log(newList.size())
// console.log(newList.getTail())
// console.log(newList.contains(15))
// console.log(newList.find(2));
// console.log(newList.toString())
// console.log(newList.size())
newList.insertAt(5,2);
// console.log(newList.size())
// console.log(newList.toString())
newList.insertAt(5,0);
console.log(newList.size())
console.log(newList.toString())
newList.removeAt(2);
console.log(newList.size())
console.log(newList.toString())
console.log(newList.removeAt(4));
console.log(newList.size())
console.log(newList.toString())


