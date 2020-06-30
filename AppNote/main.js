showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', (e) => {
    //console.log('Button clicked');
    //let notesobj=[];
    let addTxt = document.getElementById('addText');
    console.log(addTxt.value);
    
    let notes = localStorage.getItem("notes");
    //console.log(notes);
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";
    //console.log(notesobj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button type="button" id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>
    </div>  `
    })

    let notesElm = document.getElementById('notes');
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show ! Please add note`;
    }
}

function deleteNote(index) {

    //console.log('I am deleting', index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}

let search=document.getElementById('searchTxt');
search.addEventListener('input',(e)=>{
    let inputval=search.value.toLowerCase();
    console.log('Input event fired',inputval);
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputval)){
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }
    })   
})