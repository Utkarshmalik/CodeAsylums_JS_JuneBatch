





//call to fetch the data from a third party



// //APi call using fetch in JS


//Side effect
// fetch("https://jsonplaceholder.typicode.com/users");

//to handle synchrouns tasks in JS -> callbacks , promises , asycn await 

//purpose is to help writing synchrounous piece of code in JS

// //side effect
// setTimeout(() => {
//     console.log("hello");
// }, 4000);

// console.log("Hii");





// //fetch(url) => Promise


// //promise




// let someWork=new Promise((resolve,reject)=>
// {

//     //here i will perform the side effect 

//     setTimeout(() => {
    
//         let success=true;

//         if(success)
//         resolve("data");
//         else
//         reject("some eror");

//     }, 4000);

    
// // })

// someWork.then((value)=>
// {
//     console.log(value);
// })
// .catch((err)=>
// {
//     console.log(err);
// })
// .finally(()=>
// {
//     console.log("promised settled");
// })

// //promise chanining 


fetch("https://jsonplaceholder.typicode.com/users")
.then((reponse)=>
{
     return reponse.json();
})
.then((users)=>
{
    console.log(users);
})
.catch((err)=>
{
    console.log(err);
})
