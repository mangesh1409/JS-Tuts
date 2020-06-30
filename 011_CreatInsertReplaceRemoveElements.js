console.log("Create Read Replace Elements");

//  Create eleemnts

let element1=document.createElement("li");
///////////////////////////////////////////////

// Add attributes to element

element1.className="childul";
element1.id="createdLi";
element1.setAttribute('title','mytitle');
//ele.innerText="This is created ny me";
element1.innerHTML="<b>This is created by me<b>";

console.log(element1);
///////////////////////////////////////////////

// Insert into DOM

let ul=document.querySelector('ul.this');
ul.appendChild(element1);
console.log(ul);
///////////////////////////////////////////////

//  Replace element

let element2=document.createElement('h3');
element2.id='elem2';
element2.className='elem2';
let text=document.createTextNode("This is replace element");
element2.appendChild(text);
element1.replaceWith(element2);


let mymul=document.getElementById("myul");
mymul.replaceChild(element1,document.getElementById("fchild"));

//  Remove elements

mymul.removeChild(document.getElementById('lchild'));

let pr=element2.getAttribute("class");
element2.setAttribute('title','myelement2');
element2.removeAttribute('id');
console.log(element2,pr);