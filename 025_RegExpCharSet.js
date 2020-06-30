console.log('Regular Expression Using Character Set');

/*  Character Set []    */
let regx=/h[ryu]rry/;   //any of the charcater from r or y or u
regx=/h[a-z]rry/;1      //any character between a-z
regx=/h[^ryu]rry/;      // none of the charcater from r or y or u
regx=/h[^ryu]rr[yYuU]/;   // none of the charcater from r or y or u + can be y or u
regx=/h[a-zA-Z]rr[yu0-9][0-9]/;
//const str="harry8 bhai";

/* Quantifiers {} */

regx=/har{2}y/;     //r can occured 2 times
regx=/har{0,2}y/;   //r can occured 0to2 9(0,1,2) times

/*  Groupings  () */

regx=/(har){2}([0-9]r){3}/;

const str="harhar1r2r3r bhai";

let result=regx.exec(str);
console.log(result);

if(regx.test(str)){
    console.log(`The string ${str} matches with regular expression ${regx.source}`);
    
}else{
    console.log(`The string ${str} does not match with regular expression ${regx.source}`);
}