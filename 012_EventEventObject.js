console.log("Event and Event Object");

/*document.getElementById("heading").addEventListener('click', function (e) {
    console.log("You have clicked heading");
    //location.href="//facebook.com";
    let variable;
    variable = e.target;
    variable=e.target.id;
    variable=e.target.className;
    //variable=e.offsetX;
    variable=e.offsetY;
    variable=e.clientX;
    variable=e.clientY;
    console.log(variable);
});*/

/*let btn=document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);
//btn.addEventListener('mousedown',func3);  //use for mouse wheel and right click

function func1(e) {
    console.log("Thanks",e); 
    e.preventDefault();     //to bypass default action
}
function func2(e) {
    console.log("Thanks its double clock",e); 
    e.preventDefault();     //to bypass default action
}
function func3(e) {
    console.log("Thanks its mouse down",e); 
    e.preventDefault();     //to bypass default action
}*/

/*document.querySelector('.no').addEventListener('mouseenter',function (e) {
    console.log("You entered");    
})
document.querySelector('.no').addEventListener('mouseleave',function (e) {
    console.log("You leave");    
})*/

document.querySelector('.container').addEventListener('mousemove',function (e) {
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${e.offsetX+e.offsetY})`;
    console.log("You triggered mouse move event");    
})