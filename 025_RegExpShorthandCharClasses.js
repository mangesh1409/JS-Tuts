console.log('Regular Expression Using Short Hand Character Classes');

/*  Character Set []    */
let regx = /\war/;              //\w means single word character or alphabate or numbers
regx = /\w+3@try/;              //\w+ means more than one character alphabate or numbers
regx = /\Wharry/;               //\W means one Non word character (space)
regx = /\W+bhai/;               //\W+ means more than one non word characters
regx = /number \d999/;        //\d means one digit
regx = /number \d+999/;         //\d+ means more than one digit
regx = /number \D999/;           //\D means one non digit
regx = /harry \D+bhai/;               //\D means more than one non digit
regx = /harry \s@&bhai/;         //\s meansone  whitespace character
regx = /harry \s+@&bhai/;         //\s+ means one or more whitespace character
regx = /harry \S@&bhai/;         //\S means one non  whitespace character
regx = /\S+ka number/;         //\S+ means one or more non whitespace character
regx = /@&b\b/;                   // word boundry


// Assertions
regx=/h(?=y)/;          // y after h
regx=/h(?!y)/;          // other than y after h

const str = "@#$%harry 1@&b hai11%^&ka hy  number6 &*%9994590";

let result = regx.exec(str);
console.log(result);

if (regx.test(str)) {
    console.log(`The string ${str} matches with regular expression ${regx.source}`);

} else {
    console.log(`The string ${str} does not match with regular expression ${regx.source}`);
}