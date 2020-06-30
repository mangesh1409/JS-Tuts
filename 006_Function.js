console.log("Function in JavaScript");

let name="harry";
//console.log(`Happy birthsay ${name}`);
let name2="Rohan";
//console.log(`Happy birthsay ${name2}`);

function Greet(name,thank="Thank You!") {
    let msg=`Happy birthsay ${name}.${thank}`;
    return msg;
}

Greet(name,'Thanks a lot');
Greet(name2);

let val=Greet(name,'Thanks a lot');
console.log(val);
val=Greet(name2);
console.log(val);

///////////////////////////////////////////////
/* Anonymous function   */

const mygreet=function(name,thank="Thank You") {
    let msg=`Happy birthsay ${name}.${thank}`;
    return msg;
}

val=mygreet("Shubham","Thanks a lot");
console.log(val);
val=mygreet("Sumit",);
console.log(val);

///////////////////////////////////////////////

const obj={
            name:"Harry",
            game:function () {
                return "GTA";
            }
}

console.log(obj.game());