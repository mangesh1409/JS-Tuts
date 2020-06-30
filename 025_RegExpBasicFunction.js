console.log('Regular Expression Using Basic Function');

let reg = /harry/;   //search 1st occurance     //regular expression literal in JS
reg=/harry/g;           //search whole string (global)
//reg=/harry/i;           //search whole string  (case insensitive)

console.log(reg);
console.log(reg.source);

let str = "this is harry.Good boy harry is.harry is good";

/*  functions to match expression   */

/*  1.exec()- This function return array for match or null for no match */

/*let result=reg.exec(str);    // return one match at time
console.log(result);
result=reg.exec(str);    // return one match at time
console.log(result);
result=reg.exec(str);    // return one match at time
console.log(result);
result=reg.exec(str);    // return one match at time
console.log(result);*/

let result;
//while((result=reg.exec(str))!=null)
{
    //   console.log(result);
}


/*  2.test()- return true or false  */

result = reg.test(str);


/* 3.match()- returns array of result or null   */

result=str.match(reg);


/*  4.search()- return index of first match */

result=str.search(reg);

/*  5.replace()-return new replace string    */

result=str.replace(reg,"Rohan");


console.log(result);