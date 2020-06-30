console.log("Fetch API");

let mybtnget = document.getElementById('mybtnget');
mybtnget.addEventListener('click',getData);
let mybtnpost = document.getElementById('mybtnpost');
mybtnpost.addEventListener('click',postData);  

let content = document.getElementById('content');

// function getData(){
//     console.log("Started getData");
//     let url="harry.txt";

//     // Async function,run in background

//     fetch(url).then(function (response){
//         console.log("Inside 1st then");
//         return response.text();
//     }).then(function(data){
//         console.log("Inside 2nd then");
//         console.log(data);
//     })
// }

function getData(){
    console.log("Started getData");
    let url="https://api.github.com/users";

    // Async function,run in background

    fetch(url).then(function (response){
        console.log("Inside 1st then");
        //return response.text();
        return response.json();
    }).then(function(data){
        console.log("Inside 2nd then");
        console.log(data);
    })
}

function postData(){
    console.log("Started getData");
    let url="	http://dummy.restapiexample.com/api/v1/create";
    
    let data=`{"name":"test123","salary":"123","age":"23"}`;
    para={
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:data
    }

    // Async function,run in background
    fetch(url,para).then(function (response){
        //console.log("Inside 1st then");
        //return response.text();
        return response.json();
    }).then(function(data){
        //console.log("Inside 2nd then");
        console.log(data);
    })
}

// console.log("Before running getData");
 //getData();
// console.log("After running getData");

//postData();