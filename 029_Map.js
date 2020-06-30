console.log('Maps In JS');

const myMap = new Map();        //  Empty Map   
console.log(myMap);

/*  Setting Keys    */

/*let key1='myStr'; let key2={};    let key3=function(){};*/

let key1 = 'myStr', key2 = {}, key3 = function () { };

/*  Setting Value   */

myMap.set(key1, "This is string");
myMap.set(key2, "This is blank obj");
myMap.set(key3, "This is empty function");

//console.log(myMap);

/*  Getting Value From Map  */

let value1 = myMap.get(key1);
//console.log(value1);
value1 = myMap.get(key2);
//console.log(value1);
value1 = myMap.get(key3);
//console.log(value1);

/* Get Size Of Map  */

console.log(myMap.size);

/*  Get Key and Value using For Of Loop */

for (let [key, value] of myMap) {
    //console.log(key, value);
}

/*  Get only keys    */

for (let key of myMap.keys()) {
    //console.log("Keys is ",key);
}

/*  Get only values    */

for (let value of myMap.values()) {
    //console.log("Value is ",value);
}

/*  For Each Loop   */

myMap.forEach((value,key)=>{
    //console.log("Keys is ",key);
    //console.log("Value is ",value);
})

/* Converting Map To Array  */

let myArray=Array.from(myMap);
console.log('Map to array is ',myArray);

let myKeysArray=Array.from(myMap.keys());
console.log('Keys to array ',myKeysArray);

let myValueArray=Array.from(myMap.values());
console.log('Value to array ',myValueArray
);