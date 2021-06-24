


// const rootElement=document.getElementById('root');

// console.log(rootElement);

const items=document.getElementById('menu');

const firstItem=items.firstElementChild;
const lastItem=items.lastElementChild;

const parent=lastItem.parentElement;



const secondItem=firstItem.nextElementSibling;
const secondLastItem=lastItem.previousElementSibling;

console.log(secondLastItem);