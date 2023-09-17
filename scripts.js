let additembutton = document.getElementById('additem');
let toDoContainer = document.getElementById('container_list');
let inputboxx = document.getElementById('input_box');

additembutton.addEventListener('click',function(){
    let paragraph = document.createElement("p")
    paragraph.innerText = inputboxx.value;
    toDoContainer.appendChild(paragraph);
})