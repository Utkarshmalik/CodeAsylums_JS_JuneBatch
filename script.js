


// function  add() {

//     let sum=0;

//     for(let i=0;i<arguments.length;i++)
//     {
//         sum+=arguments[i];
//     }

//     return sum;
// }

// console.log(add(1));
// console.log(add(1,2));
// console.log(add(1,2,3));
// console.log(add(1,2,3));
// console.log(add(1,2,3,4));
// console.log(add(1,2,4,5,6));


//Functions in JS are first class citizens


// let sum=function(a,b){

//     console.log(a+b);
// }

// let add=sum;

// add(3,4);



// function sum(a,b){

//     return a+b;
// }


// function average(a,b,sum)
// {
//     return sum(a,b)/2;
// }

// let add=sum;

// console.log(average(10,30,add));


// //average of two number : sum/2



// function outer()
// {
//     let x=10;

//     return function inner()
//     {
//         let y=20;

//         return x+y;
//     }
// }

// let y=outer();
// console.log(y());



//anonymous functions

// let fun=function() {
//     console.log("fun");
// }

// setTimeout(function() {
//     console.log("hello")  
// },3000);


//IIFE : immidiately invoked function exectuion

(function (){
    console.log("IIFE");
})();


//ES6 : arrow functions


let fun=()=>
{
    console.log("hello");
}
fun();

let add=(a,b)=>
{
    return a+b;
}


console.log(add(2,3));



// //callback functions

// setTimeout(() => {
//    console.log("rfeefe"); 
// }, 4000);




