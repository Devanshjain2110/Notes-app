const addBTN =document.getElementById("add");

const notes = JSON.parse(localStorage.getItem('notes'))

if(notes){
  notes.forEach(note =>{
    addNewNote(note)
  })
}


addBTN.addEventListener("click",()=>{
  addNewNote();
})


function addNewNote(text = ''){
  const note = document.createElement('div')
  note.classList.add("notes")

  note.innerHTML= `
    <div class = " note"> 
  <div class="tools">
  <button class="edit"><i class="fa-regular fa-pen-to-square"></i></i></button>
  <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
</div>
<div class="main ${ text ? "" :"hidden"}">
</div>
<textarea class =  "${ text ? "hidden" :""}"></textarea> 
</div>`





const editBTN = note.querySelector(".edit");
const deleteBTN =note.querySelector(".delete");

const main = note.querySelector(".main");
const textArea = note.querySelector('textarea');


textArea.value = text;
editBTN.addEventListener("click", () => {
  main.classList.toggle("hidden");
  textArea.classList.toggle("hidden");
});

deleteBTN.addEventListener("click",()=>{
    note.remove();
})

textArea.addEventListener("input", (e) => {
  const  {value}   = e.target;
  main.innerHTML =(value);

  updateLS();
});

document.body.appendChild(note)
}

function updateLS(){
  const notesText = document.querySelectorAll('textarea')

  const notes = []

  notesText.forEach(note =>{
    notes.push(note.value)
  })

  localStorage.setItem('notes', JSON.stringify(notes));
}
