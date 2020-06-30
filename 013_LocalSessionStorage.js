console.log("Local and Session Storage");

/*  Local Storage   */

//  Set Key Value pair in storage

let marks=[14,23,45,67];
let color=["red","yellow",'green'];
localStorage.setItem('Name1','Harry');
localStorage.setItem('Name2','Rohan');
//localStorage.setItem('Marks',marks);
localStorage.setItem('Marks',JSON.stringify(marks));
localStorage.setItem('Color',JSON.stringify(color));


//  Clear All Storage

//localStorage.clear();

// Clear particular key

//localStorage.removeItem("Name1");

// Retrive item form local storage

let name=localStorage.getItem("Name2");
console.log(name);

name=JSON.parse(localStorage.getItem("Color"));
console.log(name);
///////////////////////////////////////////////

/* Session Storage  */

let smarks=[14,23,45,67];
let scolor=["red","yellow",'green'];
sessionStorage.setItem('sName1','sHarry');
sessionStorage.setItem('sName2','sRohan');
//localStorage.setItem('Marks',marks);
sessionStorage.setItem('sMarks',JSON.stringify(marks));
sessionStorage.setItem('sColor',JSON.stringify(color));
