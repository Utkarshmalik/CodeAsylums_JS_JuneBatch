

// const root=document.getElementById('root');

// //h1

// //createElement
// const newHeading=document.createElement('h1');

// //textNode to a head 
// newHeading.textContent="i am a new heading";



// //innerHTML
// root.appendChild(newHeading)

const todoList=['sleep','dance','code','drink','sing'];


 const root=document.getElementById('root');

 //ul TYPE
 const list=document.createElement('ul');

 list.setAttribute("id","list");

 todoList.forEach((item)=>
 {
     const newItem=document.createElement('li');
     newItem.textContent=item;
     newItem.setAttribute("class","item");
     list.appendChild(newItem);

    //  newItem.style.color='red';
    //  newItem.style.backgroundColor='blue';
    //  newItem.style.fontSize='30px';

    newItem.setAttribute("style",'color:yellow;background-color:blue;font-size:30px')

 })

 root.appendChild(list);



