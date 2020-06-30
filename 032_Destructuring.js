console.log('Destructuring in JS');

let a, b;
[a, b] = [34, 67];
console.log(a, b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a, b, c, d);

for (let val of d) {
    //console.log(val);    
}

({ a, b, ...c }={ a:23, b:45, c:67, d:78, e:19, f:98});
console.log(a,b,c);
console.log(c);

for(let key in c){
   //console.log(c[key]);    
}

/*  Array Destructuring */

let fruits=['apple','banaa','mongo'];
[a,b,c]=fruits;
console.log(a,b,c);


/* Object Destructuring */

let laptop={
    model:"Dell 5590",
    age: 5,
    price:64999,
    start:function(){console.log('Started');}
}


let {model,age,price,start}=laptop;
console.log(model,age,price,start);
start();