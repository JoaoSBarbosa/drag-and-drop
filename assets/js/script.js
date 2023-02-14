document.querySelectorAll('.item').forEach(item =>{
   item.addEventListener('dragstart',dragStart);
   item.addEventListener('dragend',dragEnd);

})

// ------------FUNÇÕES--------
function dragStart(e){
   e.currentTarget.classList.add('dragging');
}

function dragEnd(e){
  e.currentTarget.classList.remove('dragging');
}