console.log("for-in and for-of loops");

/* ITERATING AN ARRAY   */

let people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];

/*  Traditional for loop    */

// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);   
// }

/*  For Of Loop */

// for(let name of people){
//     console.log(name);
// }

////////////////////////////////////////////////////////////////////

/*  ITERATING AN OBJECT */

let obj = {
    name: "Harry",
    language: "JavaScript",
    hobbies: "Android app development"
}
//  console.log(obj);

/*  Traditional for loop  */

// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);   
// }


/*  for-in loop   */

// for (let key in obj) {
//     console.log(obj[key]);
// }

////////////////////////////////////////////////////////////////////

/*  ITERATING A STRING  */

myString = "This is my string";

/*  For Loop */

//for (let index = 0; index < myString.length; index++) {
//     const element = myString[index];
//     console.log(element);   
// }

/*  For In Loop */
// for (let char in myString){
//     console.log(myString[char]);
// }

/*  For Of Loop */

// for(let name of myString){
//     console.log(name);
// }