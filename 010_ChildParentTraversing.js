console.log("Child Parent Travelsing");

let a=document.querySelector(".container");

//console.log(a);
//console.log(a.childNodes);  //Give comment,text and elements
//console.log(a.children);    //Give only elements

let nodeName=a.childNodes[6].nodeName;
//console.log(nodeName);
let nodeType=a.childNodes[3].nodeType;
//console.log(nodeType);

/* Node Types
1. Elements
2. Attributes
3. Text Node
8. Comments
9. Document
10. DocType */


let con=document.querySelector("div.container");

//console.log(con);
//console.log(con.childNodes);
//console.log(con.children[1].children[0].children);
//console.log(con.firstChild);
//console.log(con.firstElementChild);
//console.log(con.lastChild);
//console.log(con.lastElementChild);
console.log(con.children);
//console.log(con.childElementCount);
console.log(con.firstElementChild);
console.log(con.firstElementChild.parentNode);
console.log(con.firstElementChild.nextSibling);
console.log(con.firstElementChild.nextElementSibling);
console.log(con.firstElementChild.nextElementSibling.nextElementSibling);