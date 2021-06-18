// let car = {
//     brand: 'Honda',
//     getBrand: function () {
//         return this.brand;
//     }
// }

// console.log(car.getBrand());


// let brand=car.getBrand;

// brand();


//function methods :call , apply and bind 


let person1={
    name:"Utkarsh",
    money:100,
    depositMoney(x)
    {
        console.log(`${this.name} is depositing ${x} money in bank`);
    }
}

let person2={
    name:"Rahul",
    money:1000
}

person2.depositMoney=person1.depositMoney.bind(person2);

person2.depositMoney(60);


// const RahulsDepositMoneyFunction=person1.depositMoney.bind(person2);
// person2.depositMoney=RahulsDepositMoneyFunction;

// person2.depositMoney(10);



function sayHi(greeting,Question)
{
    console.log(`${this.name} is saying ${greeting} and asking ${Question}`);
}

//i want to explicitly tell the method what should be the value of "this" in that method

//call

// sayHi("hello","how are you ?");
// sayHi.call(person1,"hello","how are you ?");
// sayHi.call(person2,"hello","how are you ?");


//apply
sayHi.apply(person2,["hello","how are you ?"]);


//bind

const newFun=sayHi.bind(person1,"hello","how are you ?");
newFun();





