console.log('Project Form Validation');

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address=document.getElementById('address');
const mess=document.getElementById('mess');
//console.log(name,email,phone);
let validName=false;
let validEmail=false;
let validPhone=false;
$('#sucess').hide();
$('#fail').hide();

name.addEventListener('blur', ()=> {
    console.log('name is clicked');
    // validate name
    let regx=/^[a-zA-Z]([0-9a-zA-Z]){3,10}$/;
    let str=name.value;
    //print(regx,str)
    console.log(regx,str);
    if(regx.test(str)){
        console.log('Name valid');    
        validName=true;    
        name.classList.remove('is-invalid') 
        name.classList.add('is-valid');
    }else{
        console.log('Name is not valid');
        name.classList.add('is-invalid');
        validName=false;
    }
})
email.addEventListener('blur', ()=> {
    console.log('Email is clicked');
    // validate email
    let regx=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]){2,7}$/;
    let str=email.value;
    console.log(regx,str);
    if(regx.test(str)){
        console.log('Email is valid');  
        validEmail=true;      
        email.classList.remove('is-invalid') 
        email.classList.add('is-valid');
    }else{
        console.log('Email is not valid');
        email.classList.add('is-invalid');
        validEmail=false;
    }
})
phone.addEventListener('blur', ()=> {
    console.log('phone is clicked');
    // validate number
    let regx=/^([0-9]){10}$/;
    let str=phone.value;
    //print(regx,str)
    console.log(regx,str);
    if(regx.test(str)){
        console.log('Phone number is valid');       
        validPhone=true; 
        phone.classList.remove('is-invalid') 
        phone.classList.add('is-valid');
    }else{
        console.log('Phone number is not valid');
        phone.classList.add('is-invalid');
        validPhone=false;
    }
})
let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('Submit is clicked');
    //Submit your form
    if(validEmail&&validName&&validPhone){
        console.log('Name Email Phone are valid submmiting form');
        let sucess=document.getElementById('sucess');
        //let fail=document.getElementById('fail');
        sucess.classList.add('show');    
        //fail.classList.remove('show'); 
        //$('#fail').alert('close');
        $('#fail').hide();
        $('#sucess').show();
        name.value="";email.value="";phone.value="";address.value="";mess.value="";
        phone.classList.remove('is-valid');
        email.classList.remove('is-valid');
        name.classList.remove('is-valid');
    }
    else{
        console.log('Not submmiting form');   
        let fail=document.getElementById('fail');
        //let sucess=document.getElementById('sucess');
        fail.classList.add('show');
        //sucess.classList.remove('show');      
        //$('#sucess').alert('close');
        $('#sucess').hide();
        $('#fail').show();
    }    
})