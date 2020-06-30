console.log("Callback Function");

// Pretend that it comes from server
const students=[
    {name:"Rohan",subject:"JavaScript"},
    {name:"Harry",subject:"Python"}
]

function enrollStudent(newStudent,callback) {
    setTimeout(function() {
        students.push(newStudent);      
        console.log("Student enrolled");
        callback();
    },1000);  // after 3sec it will run  
}

function getStudents() {
    setTimeout(function(){
        let str="";
        students.forEach(function(student){
            str+=`<li>${student.name}</li>`
        })
        document.getElementById('student').innerHTML=str;        
        console.log("Student fetch");
    },5000);   // after 5sec it will run
}

let newStudent={name:'Sunny',subject:'Java'};
enrollStudent(newStudent,getStudents);
newStudent={name:'Shubham',subject:'PHP'};
enrollStudent(newStudent,getStudents);
//getStudents();