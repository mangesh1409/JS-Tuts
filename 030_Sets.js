console.log('Sets In JS');

let mySet=new Set();    // Empty Set
//console.log(mySet);

/*  Add Values in Set   */

mySet.add('this');
mySet.add('is my name');
mySet.add('this');        // Add only unique values.
mySet.add('is my name');  // Duplicate values not allow. Set will not aadd add duplicate entries
mySet.add(34);
mySet.add(true);
mySet.add(()=>{console.log('Set Function');
});
mySet.add({name:"Harry",id:23})
//console.log(mySet);

/* Add Values Using Constructor */

let set1=new Set([45,"Hello",function(){},false,{a:34,b:"Harry"}]);
//onsole.log(set1);


//console.log('Size of my set is ',mySet.size);
//console.log(mySet.has("this"));
//console.log('Before Removing',mySet.has(true));
//console.log(mySet);
mySet.delete(true);
//console.log('After Removing',mySet.has(true));
//console.log(mySet);

/* Iterate Set  */

for(let value of mySet){
    //console.log(value);    
}

mySet.forEach((element) => {
    //console.log(element);    
});

/*  Converting Set To Array */

let mySetArray=Array.from(mySet);
console.log(mySetArray);

/*  For Of Loop */

for(let value of mySetArray){
    //console.log(value);
}