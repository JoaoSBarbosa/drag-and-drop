document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

document.querySelectorAll(".area").forEach((area) => {
  area.addEventListener("dragover", dragOver);
  area.addEventListener("dragleave", dragLeaver);
  area.addEventListener("drop", drop);
});

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener("dragleave", dgleaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);
// ------------FUNÇÕES--------

// --Item arrastado
function dragStart(e) {
  e.currentTarget.classList.add("dragging");
}

function dragEnd(e) {
  e.currentTarget.classList.remove("dragging");
}

// -- Area p/ soltar
function dragOver(e) {
  if (e.currentTarget.querySelector(".item") === null) {
    e.preventDefault();
    e.currentTarget.classList.add("hover");
  }
}
function dragLeaver(e) {
  e.currentTarget.classList.remove("hover");
}
function drop(e) {
  e.currentTarget.classList.remove("hover");

  if (e.currentTarget.querySelector(".item") === null) {
    let dragItem = document.querySelector(".item.dragging");
    e.currentTarget.appendChild(dragItem);
  }
}

// ---------FUNÇÕES AREA NEUTRA
function dragOverNeutral(e){
   e.preventDefault();
   e.currentTarget.classList.add('hover')
}
function dgleaveNeutral(e){
   e.currentTarget.classList.remove('hover')
}
function dropNeutral(e){
   e.currentTarget.classList.remove('hover')

   let neutralArea = document.querySelector('.item.dragging');
   e.currentTarget.appendChild(neutralArea);
}