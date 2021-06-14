



// const someKey="name";
// console.log(person[someKey]);
// //  person.name



//this keyword 

//inside the methods , this references the object used to invoke that method 



// let person={

//     firstName:"Utkarsh",
//     lastName:"Malik",
//     dob:"06/06/1994",
//     getFullName:function() {
            
//              return function()
//              {
//                return this.firstName + " "+" "+this.lastName;
//              }
//       }
// }

// const res=person.getFullName();
// console.log(res());

//lexically : by looking the physical position 

// console.log(someInnerFun());


// console.log(person.getFullName());




// var x=5;

// function sayHi()
// {
//     console.log("hii");
// }

// window.x;

// window.sayHi



//construction functions 




//  let person1={

//      firstName:"Utkarsh",
//      lastName:"Malik",
// }


// let person2={

//     firstName:"dv",
//     lastName:"Malik",
// }



//functions vs CF : 
//CF always start wth a capital Letter
// CF are called only with a new Operator 


//this inside of constructor functions points to the new instance created by that 
//Blue print 

function Person(firstName,lastName)
{
    this.firstName=firstName;
    this.lastName=lastName;

    this.getFullName=function () {
       return this.firstName+" "+this.lastName;
    }
}


//new operator 

let person1=new Person('Utkarsh','Malik');
let person2=new Person("Rahul","Jain");

//1000 , 1000000000


console.log(person1.getFullName());
console.log(person2.getFullName());




console.log(person1);
console.log(person2);


//Protypes 
//prototypal inheritence 
