import { LinkedList } from "./LinkedList.js";


const list = new LinkedList();

window.addEventListener("load", () => {
    console.log(list.toString());
})
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
list.insertAt("cobra", 2)
list.removeAt(5)