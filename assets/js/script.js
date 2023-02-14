document.querySelectorAll('.item').forEach(item =>{
   item.addEventListener('dragstart',dragStart);
   item.addEventListener('dragend',dragEnd);
})

document.querySelectorAll('.area').forEach(area =>{
   area.addEventListener('dragover', dragOver);
   area.addEventListener('dragleave', dragLeaver);
   area.addEventListener('drop', drop);


})

// ------------FUNÇÕES--------
function dragStart(e){
   e.currentTarget.classList.add('dragging');
}

function dragEnd(e){
  e.currentTarget.classList.remove('dragging');
}
function dragOver(e){
   e.preventDefault();
   e.target.classList.add('hover');
}
function dragLeaver(e){
   e.target.classList.remove('hover');
}
function drop(e){
   
}