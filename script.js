



// const someKey="name";
// console.log(person[someKey]);
// //  person.name



//this keyword 

//inside the methods , this references the object used to invoke that method 





let person={

    firstName:"Utkarsh",
    lastName:"Malik",
    dob:"06/06/1994",
    getFullName:function() {
        
        
            return person.firstName + " "+" "+person.lastName;
        
    }
}



const res=person.getFullName();
console.log(res);
// console.log(someInnerFun());


// console.log(person.getFullName());




// var x=5;

// function sayHi()
// {
//     console.log("hii");
// }

// window.x;

// window.sayHi