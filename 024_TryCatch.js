console.log("Try Catch");

let a;
console.log(a);

if (a == undefined) {
    console.log('This is not defined');
    //throw new Error('This is not defined');    
}
else {
    console.log('This is defined');
}
////////////////////////////////////////////////////////////

try {
    console.log('Inside try block');
    fun();
} catch (error) {
    console.log('If there is error in try then catch block execute');
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}finally{
    console.log('In side finally, Always runs irrespective of Try and Catch');   
}