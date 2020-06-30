console.log("Arrays And Object");

/*  Array    */

let marks=[23,45,67,78];
const fruits=['Apple','Mango',"Orange",`Banana`];
const mix=[13,'red',[3,4,5,6],true,null,undefined];
const arr=new Array(34,45,67,78);

console.log(marks);
console.log(fruits);
console.log(mix);
console.log(arr);

console.log(marks.length)
console.log(fruits.length);
console.log(mix.length);
console.log(arr.length);

console.log(Array.isArray(marks));
console.log(Array.isArray(fruits));
console.log(Array.isArray(mix));
console.log(Array.isArray(arr));

arr[0]="Harry";
console.log(arr);
let a=arr[0];
console.log(a);

let val=marks.indexOf(67);
console.log(val);

marks.push(89);         //add at last position
console.log(marks);
marks.unshift(95);
console.log(marks);     //add at first position
marks.pop();
console.log(marks);     //remove last element
marks.shift();
console.log(marks);     //remove first elements
marks.splice(1,2);
console.log(marks);
marks.reverse();
console.log(marks);

let marks2=[78,45,78];
marks=marks.concat(marks2);
console.log(marks);

////////////////////////////////////////////////////////

/* Object   */

let myobj={
            Name:"Harry",
            'College Name':"Fergusson College,Pune",
            ID:28,
            Role:"Manager",
            isPresent:true,
            Marks:[87,89,75,80]
};
console.log(myobj);
console.log(myobj.Name);
console.log(myobj['College Name']);
console.log(myobj.ID);
console.log(myobj['Role']);
console.log(myobj.isPresent);
console.log(myobj.Marks);