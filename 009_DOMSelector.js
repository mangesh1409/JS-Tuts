console.log("DOM Selector");

/* Element Selector
    1.Single Element Selector
    2.Multi Element Selector
*/


/*  1.Single Element Selectors   */
/*  ID Selector */

let a=document.getElementById("first");
//a=a.className;
//a=a.childNodes;
//a=a.parentNode;
a.style.color='red';
a.innerText="Harry is good boy";
a.innerHTML="<b>Harry is good boy</b>";
//console.log(a.innerHTML);
//console.log(a.innerText);
//console.log(a);

/*  Query Selector  */

let b=document.querySelector('#first');     //ID Selector
b=document.querySelector('.child3');      //Class Selector
b=document.querySelector('h1');         //ID Selector  
//console.log(b);

///////////////////////////////////////////////

/* Multi Elements Selectors
/* Class Selector   */

let c=document.getElementsByClassName("child");

//console.log(c);
//console.log(c[0]);
//console.log(c[2]);

c=document.getElementsByClassName("container");
//console.log(c[0].getElementsByClassName("child"));

c=document.getElementsByTagName('div');
console.log(c);

/*Array.from(c).forEach(ele=>{
    console.log(ele);
    ele.style.color="blue";
})*/

for (let index = 0; index < c.length; index++) {
    const element = c[index];
    console.log(element);
    element.style.color="red";    
}