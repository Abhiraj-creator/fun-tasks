// SECTION 1: OOPS Thinking with Objects
// 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
// 	2.	Add one more method to the same object that increases the price by 10 percent.
// 	3.	Now imagine you need 10 laptops with same structure but different data.
// Write down (in words or code) what problems you will face if you keep using plain objects.
// let laptop={
//     brand:"lenovo",
//     price:50000,
//     start:function(){
//         console.log("laptop stared");
//     },
//     increase_price:function(){
//         return this.price+(this.price/10);
//     }
// }
// laptop.increase_price();
// code size will increase and readabilty will decrease also managability will also effect 
// ⸻


// SECTION 2: Classes and Objects (Reinforcement)
// 	4.	Create a class named Employee that stores:
// name
// salary

// Add a method showDetails that prints name and salary.
// 	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.
// 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?

// ⸻

// class Employee{
//     constructor(name,salary){
//         this.name=name,
//         this.salary=salary
//     }
// }
// let emp1=new Employee("abhiraj",100000000);
// let emp2=new Employee("harsh",1000000);
// let emp3=new Employee("harshit",1300000)
// emp2.salary=40000;





// N 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.

// ⸻


// class BankAccount{
//     constructor(accountHolderName,balance){
//         this.accountHolderName=accountHolderName,
//         this.balance=balance
//     }
//     deposit(amt){
//         this.balance=this.balance+amt
//         return this.balance
//     }
// }

// const ac1=new BankAccount("abhi",1000);
// const ac2=new BankAccount("ashu",100);




//  Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.
// 	12.	Call the method normally and observe the output.
// 	13.	Store the method in a separate variable and call it.
// Observe what happens to this and explain why.
// 	14.	Modify the code so that this works correctly again.


// let profile={
//     username:"abhiraj",
//     printName:function(){
//         return this.username
//     }
// }
// let printedname=profile.printName.bind(profile);




// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.

// // ⸻

// function Vehicle(type,wheels){
//    this.type=type,
//    this.wheels=wheels
   
//    }
// Vehicle.prototype.describe=function(){
//     return [this.type,this.wheels];
    
// }

// let v1=new Vehicle('car',4)



// N 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.
// 	20.	Create two different objects with brand values.
// 	21.	Use call to execute showBrand for both objects.
// 	22.	Explain what problem call is solving here.

// ⸻

// function showBrand(brand){
//     console.log(this.brand);
// }
// let b1={
//     brand:"BMW"
// }
// let b2={
//     brand:"AUDI"
// }
// let fnc=showBrand.bind(b1)




    // 7: apply Method Practice
    // 	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
    // 	24.	Create an object with a name property.
    // 	25.	Use apply to call introduce using the object and an array of arguments.
    // 	26.	Explain in simple words how apply differs from call.

    // ⸻

//     function introduce(city,role){
//         console.log(this.name);
//         console.log(city);
//         console.log(role);
        
//     }
//     let obj1={
//         name:"abhi"
//     }
//    let fnc= introduce.bind(obj1,"mandsaur","devoloper");


//  bind Method Practice
// 	27.	Create a function greet that prints “Hello” followed by this.name.
// 	28.	Bind this function to an object and store the returned function in a variable.
// 	29.	Call the bound function later and observe the output.
// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.



// function greet(){
//     console.log("hello "+this.name);
// }
// let obj={
//     name:"abhiraj",
//     age:18
// }
// let fnc=greet.bind(obj)