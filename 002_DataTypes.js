console.log("Data Types");

/* Primitive Data Type */    

// String
let name="Harry";
console.log("My name is ",name);
console.log("Data Type of name is ",typeof(name));

// Numbers
let marks=45;
console.log("My get ",marks," marks");
console.log("Data Type of marks is ",typeof(marks));

// Boolean
let x=true;
let y=false;
console.log(x);
console.log("Data Type of x is ",typeof(x));
console.log(y);
console.log("Data Type of y is ",typeof(y));

// Null
let a=null;
console.log("Data Type of NULL is ",typeof(a));

// Undefined
let undef=undefined;
console.log("Data Type of undefined is ",typeof(undefined));

///////////////////////////////////////////////////////

/*    Referance Data Type*/

// Array
let myarr=[1,2,3,4,true,"Harry",null];
console.log("Data Type of Array is ",typeof(myarr));

// Objects
let myobj={     1:67,
                2:89,
                3:74,
                4:95}
console.log(myobj);
console.log("Data Type of Objects is ",typeof(myobj));

// Function
function fun(){
    
}
console.log("Data Type of Function is ",typeof(fun));

//Date
mydate=new Date();
console.log("Data Type of Date is ",typeof(mydate));