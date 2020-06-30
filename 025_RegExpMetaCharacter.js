console.log("Regular Expression Using Meta Character");

let regx=/harry/g;
//console.log(regx);
//console.log(regx.source);

regx=/^harr/;    // ^ - expression will match string if start with
regx=/rry$/;     // $ - expression will match string if ends with
regx=/h.rry/;    // .-matches any one character h and r
regx=/h*rry/;    // .-matches any 0 or more character h and r
regx=/ha?rryi?t/    // ?-optional character
regx=/h\.rry/;      // \ escape sequence


let str="hrry is h.rry";

let result=regx.exec(str);
console.log(result);

if(regx.test(str)){
    console.log(`The string ${str} matches with regular expression ${regx.source}`);
    
}else{
    console.log(`The string ${str} does not match with regular expression ${regx.source}`);
}





















