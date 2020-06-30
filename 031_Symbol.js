console.log('Symbols in JS');

let sym1 = Symbol("Hello");     // Unique entry
let sym2= Symbol("Hello");      // Other Unique entry
//console.log(sym1);
//console.log("Type of Symbol is ",typeof sym1);

console.log(sym1===sym2);

let k1=Symbol("This is k1");
let k2=Symbol("This is k2");

let obj={};
obj[k1]="Harry";
obj[k2]="Rohan";
obj["name"]="Shubham";
obj["id"]=45;

console.log(obj);

//console.log(obj[k1]);
//console.log(obj[k2]);
//console.log(obj.k2);

for (let value in obj) {            
    console.log(value,obj[value]);      // Symbols ignore in forIn loop
}

console.log(JSON.stringify(obj));      // Convert object to JSON