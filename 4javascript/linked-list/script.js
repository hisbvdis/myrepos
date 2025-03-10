import { List } from "./linked-list";

const list = new List();
list.insert(0, 'B');
list.insert(0, 'A');
list.insert(2, 'D');
list.insert(2, 'C');
console.log( list.toArray() );
