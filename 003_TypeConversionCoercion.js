console.log("Type Conversion & Coercion");

/*  Type Conversion */

let myvar=34;
console.log(myvar, typeof myvar);
myvar=String(45);
console.log(myvar, typeof myvar);

let boolvar=true;
console.log(boolvar, typeof boolvar);
boolvar=Number(true);
console.log(boolvar, typeof boolvar);
boolvar=String(true);
console.log(boolvar, typeof boolvar);


let date=new Date();
console.log(date, typeof date);
let date1=String(new Date());
console.log(date1, typeof date1);

let arr=[1,2,3,4,5];
console.log(arr,"Length of array is ", arr.length, typeof arr);
let arr1=String([1,2,3,4,5]);
console.log(arr1,"Length of array is ", arr1.length,typeof arr1);

let i=78;
console.log(i.toString());
let j=true;
console.log(j.toString());

let stri="12345d";
console.log(stri,typeof stri);
stri=Number("12345");
console.log(stri,typeof stri);
stri=Number(true);
console.log(stri,typeof stri);
stri=Number(false);
console.log(stri,typeof stri);

let no='34';
console.log(no,typeof no);
no=parseInt('34');
console.log(no,typeof no);
no=parseInt('34.567');
console.log(no,typeof no);
no=parseFloat('34.678');
console.log(no,typeof no);
no=Number('34.678');
console.log(no,typeof no);

//////////////////////////////////////////////////////

/*  Type Coercion   */

let maystr="678";
let mynum=67;
console.log(maystr+mynum);
maystr=Number("678");
console.log(maystr+mynum);

/////////////////////////////////////////////////////