// // //set timeout 

// // // console.log("hi-1");

// // // setTimeout(() => {
// // //     console.log("hi-2");
// // // }, 2000);

// // // console.log("hi-3");

// // //1,3,2 



// // // console.log("hi-1");

// // // setTimeout(() => {
// // //     console.log("hi-2");
// // // }, 2000);

// // // setTimeout(() => {
// // //     console.log("hi-3");
// // // }, 0);

// // // console.log("hi-4")


// // //event loop architecure 

// // //1,3,4,2
// // //1,4,3,2 ->
// // //3,1,4,2


// // //javascript runtime : heap,call stack 


// // for(let i=0;i<5;i++)
// // {
// //     setTimeout(() => {
// //         console.log(i);
// //     }, i*1000);
// // }


// //var vs let

// //var is always function scoped 
// //let is always blocked scope 



// function A()
// {
//     var age=25;
// }

// console.log(age);



function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    return sayHi;
}
let hi = greeting();
 hi();
