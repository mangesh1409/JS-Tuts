//  Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
//  Constructor
function Display(){

}
Display.prototype.add = function (book) {
    let tableBody = document.getElementById('tableBody');
    let str = `<tr>
               <td>${book.name}</td>
               <td>${book.author}</td>
               <td>${book.type}</td>
            </tr>`;
    tableBody.innerHTML += str;
}
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}
Display.prototype.validate=function (book){
    if((book.name/length<=2)||(book.author.length<=2)){
        return false;
    }
    else{
        return true;
    }
}
show(type,dMessage){
    let message=document.getElementById('message');
    let boldText;
    if(type=='success'){
        boldText='Success';
    }
    else{
        boldText='Error';
    }
    message.innerHTML=` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${boldText} : </strong>${dMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span></button>
                        </div>`;

    setTimeout(function(){
        message.innerHTML="";
    },5000);
}

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','Your Book Is Added Successfully.');
    }
    else{
        display.show('danger',"Sorry, You Can Not Add This Book ");
    }
}