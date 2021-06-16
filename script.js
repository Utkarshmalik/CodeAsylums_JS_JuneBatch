


const arr=new Array(1,2,3);

console.log(typeof Array);

console.log(typeof Object);


//Array , Object




function Person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;

}



Person.prototype.sayHi=function()
{
    console.log(`${this.firstName} is saying hii`)
}


const person1=new Person("Utkarsh",'de');
const person2=new Person("Rahul",'jain');


//[[prototype]]://__proto__

// console.log(person1.__proto__===Person.prototype);
// console.log(Person.prototype.__proto__===Object.prototype);
// console.log(Object.prototype.__proto__);


const arr1=new Array(1,2,4);

console.log(arr1.toString());


// //Array.prototype

// console.log(arr1.__proto__===Array.prototype);

// console.log(Array.prototype.__proto__===Object.prototype); 

// console.log(arr1.__proto__.__proto__.__proto__);


// // Everything is JS is an object 


// const s1=new String("hello");
// console.log(s1.__proto__.__proto__);





