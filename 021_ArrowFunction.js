console.log("Arrow Function");

//  Regular Function
function fun1() {
    console.log("Inside Fun1");
}
fun1();

const fun2 = function () {
    console.log("Inside Fun2");
}
fun2();

// Function return something
const greet = function () {
    return "Good Morning";
}
console.log(greet());
//////////////////////////////////////////////////////////

// Arrow function
const greetArrow1 = () => {
    return "Arrow good morning";
}
console.log(greetArrow1());

const greetArrow2 = () => "Arrow2 good morning";
console.log(greetArrow2());

// If we return Object it need parathesis
const greetArrow3 = () => ({ name: "Harry" });
console.log(greetArrow3());

// Single parameter dont need parathesis
const greetArrow4 = name => "Good Morning " + name;
console.log(greetArrow4("Shubham"));

// Multiple parameter need parathesis
const greetArrow5 = (name, end) => "Good Morning " + name + " " + end;
console.log(greetArrow5("Shubham", 'bye'));