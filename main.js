const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.create-btn');
let notes = document.querySelector(".input-box")

function showNote() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNote();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);

}

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "img/delete.png";

    notesContainer.appendChild(inputBox).appendChild(img);

})

notesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P"){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(note => {
            note.onkeyup = function(){
                updateStorage();
            }
        })
    }
});

