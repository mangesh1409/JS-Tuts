console.log("Ajax Tutorial");

let fetchbnt = document.getElementById("fetchbtn");
fetchbnt.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log("Button clicked fetch");

    // Instantiate XHR object
    const xhr = new XMLHttpRequest();

    // Open object & GET Request
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);    

    // Open object & POST Request
    //xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);

    xhr.getResponseHeader('Content-type', 'application/json');

    // What to do on progress (Optional)
    xhr.onprogress = function () {
        console.log("On progess");
    }

    /*xhr.onreadystatechange=function(){
        console.log("Read state is" ,xhr.readyState);
    }*/

    // What to do when reponce is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.error("Some error occured ");
        }

    }

    // Send request
    para = `{"name":"test","salary":"1273","age":"33"}`;

    xhr.send();       //use for GET request
    //xhr.send(para);     //use for POST request

    console.log("We are done");

}

let popbnt = document.getElementById("backupbtn");
popbnt.addEventListener('click', pophandler);

function pophandler() {

    console.log("Button clicked pophandler");

    // Instantiate XHR object
    const xhr = new XMLHttpRequest();

    // Open object & GET Request
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

    // What to do when reponce is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list=document.getElementById('list');
            str="";
            for (key in obj) {
               str+=`<li> ${obj[key].employee_salary} </li>`;                    
               
            }
            list.innerHTML=str;     
            }
        
        else {
            console.error("Some error occured ");
        }

    }

    xhr.send();       //use for GET request

    console.log("We are done fetching employee");
}