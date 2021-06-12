


//let arr=[1,2,3,4,5];

// let arr=new Array(5);
// let marks=new Array(10,11,12,13,14);



let marks=[10,20,30,40,60];

console.log(marks[1]);
console.log(marks.length);

// marks.push(70);
// marks.pop();


// marks.unshift(5);
// marks.shift();

console.log(marks);


// 1- forEach,2-map,3-filter,4-reduce,5-sort




// let sum=0;

// persons.forEach((person,index)=>
// {
//     sum+=person.age;
//     // console.log(`${person.name} is ${person.age} years old`);   
// });

// console.log(sum);


// useCases : array->transform->newArray


// const arr=[1,2,3,4,5];


// const res=arr.map((element,index)=>
// {
//     return element *5;
// })

// console.log(arr);
// console.log(res);

// const res=persons.map((person,index)=>
// {
//     //clone a JS 

//     //spread operator 

//     const newObj={...person};
//     newObj.salary+=100;
//     return newObj;
// })

// console.log(persons);
// console.log(res);


// let persons=[{name:"Utkarsh",age:25,salary:1000,cgpa:9.6},{name:"Rahul",age:20,salary:31000,cgpa:5.5},{name:"Shreya",age:30,salary:6000,cgpa:6.78},{name:"Shiv",age:22,salary:7000,cgpa:8.9}];

// //>=8

// //filter things from an array 

// const eligiblePersons=persons.filter((person,index)=>
// {
//     return person.cgpa>=8;
// })

// console.log(persons);
// console.log(eligiblePersons);


//reduce method 
//[1,3,5,6,,78,,6,,3,5,5]=>some Single single

//array.reduce(reducer,[,initialValue]);
//reducer function is called with two things accumulator and the current value 
//reducer function returns a value which is the accumulated result 

let arr=[13,5,4,2,4,5,33];

//reduce an array to a single value : 

     const res=arr.reduce((accumulator,currentElementValue)=>
     {
         return accumulator+currentElementValue;
     },0);

     console.log(res);
     
    // element    accumulator     accumatedResult 
    //   13           0               13
    //   5            13              18
    //   4            18              22
    //   2            22              24
    //   4            24              28
    //   5            28              33
    //   33           33              66



    
// arr.sort((a,b)=>
// {
//     if(a<b)
//     return -1;

//     if(a>b)
//     return 1;

//     return 0;

// });

// console.log(arr);



let persons=[{name:"Utkarsh",age:25,salary:1000,cgpa:9.6},{name:"Rahul",age:20,salary:31000,cgpa:5.5},{name:"Shreya",age:30,salary:6000,cgpa:6.78},{name:"Shiv",age:22,salary:7000,cgpa:8.9}];


persons.sort((person1,person2)=>
{
    if(person1.cgpa<person2.cgpa)
    return 1;

    if(person1.cgpa>person2.cgpa)
    return -1;

    return 0;

})

console.log(persons);
