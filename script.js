const inputBox=document.getElementById('input-box');
const listItems=document.getElementById('listitems');
function addTask(){
    if(inputBox.value===''){
        alert('You must write something');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listItems.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='x';
        li.appendChild(span);
    }
    inputBox.value='';
    localstorage();
}
listItems.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){         //the tagname should be in capital letters compulsory
        e.target.classList.toggle('checked');
        reorderlist();
        localstorage();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        localstorage();
    }
})
function reorderlist(){
    let checkeditems=listItems.querySelectorAll('.checked');
    let uncheckeditems=listItems.querySelectorAll('li:not(.checked)');
    listItems.innerHTML='';
    uncheckeditems.forEach(item=>listItems.appendChild(item));
    checkeditems.forEach(item=>listItems.appendChild(item));
}
function localstorage(){
    localStorage.setItem('data',listItems.innerHTML);
}
function display(){
     listItems.innerHTML=localStorage.getItem('data');
}
display();