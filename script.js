
const submitButton=document.getElementById('submit-button');
const incompleteSection=document.getElementById('incomplete-section').firstElementChild.nextElementSibling;
const completedSection=document.getElementById('complete-section').firstElementChild.nextElementSibling;



let incompletedItems=[];
let completedItems=[];


(function initialLoad() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(res=>res.json())
    .then(data=>{
        //spread operator
        incompletedItems=[...data];
        renderIncompleteList();
    })
})()

function prepareListItem(newTask)
{
    const newLi=document.createElement('li');
    const parentDiv=document.createElement('div');
    const childDiv=document.createElement('span');
    const text=document.createElement('p');
    text.innerText=newTask.title;
    const btn1=document.createElement("button");
    btn1.innerText="Done";
    const btn2=document.createElement("button");
    btn2.innerText="Delete";
    newLi.setAttribute("id",newTask.id);
    parentDiv.appendChild(text);
    childDiv.appendChild(btn1);
    childDiv.appendChild(btn2);
    parentDiv.appendChild(childDiv);
    newLi.appendChild(parentDiv);

    return newLi;

}

function renderIncompleteList()
{
    incompletedItems.forEach((newTask)=>
    {
      
        const listItem=prepareListItem(newTask);
        incompleteSection.appendChild(listItem);
    })
}

function renderIncompleteListItem(newTask)
{
      const listItem=prepareListItem(newTask);
        incompleteSection.appendChild(listItem);
}



// function  renderCompleteList() {
    
//     completedItems.forEach((newTask)=>
//     {
//         const newLi=document.createElement('li');
//         newLi.innerText=newTask.title;
//         newLi.setAttribute("id",newTask.id);
//         completedSection.appendChild(newLi);
//     })
// }


const createNewListItem=(value)=>
{
    const randID=Math.floor((Math.random() * 10000000) + 1);

    const newTask={
        "id": randID,
        "title": value,
        "completed": false
    }

    return newTask;
}


//any event hadler 

const onButtonClick=()=>
{
    const inputField=document.getElementsByName('task')[0];

    //new List item in incompleted section
    const task=createNewListItem(inputField.value);
    incompletedItems.push(task);
    renderIncompleteListItem(task);
}

submitButton.addEventListener("click",onButtonClick);

