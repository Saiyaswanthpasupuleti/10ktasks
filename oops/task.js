// Create a simple inheritance hierarchy using JavaScript classes.

// Requirements:

// 1. Create a base class called Vehicle.
// 2. Add properties: brand, model, year.
// 3. Add methods: startEngine(), accelerate().
// 4. Create two subclasses: Car and Truck.
// 5. Inherit properties and methods from Vehicle.
// 6. Add unique properties and methods to each subclass.


//=> task 1 : 


// class Vehicle{
//     constructor(brand,model,year){
//         this.brand=brand;
//         this.model=model;
//         this.year=year;
//     }
//     accelerate(){
//         console.log(this.brand,this.model,this.year)
//     }

//     changecolor(){
//         console.log("now the color is red")
//     }
    
// }

// class all extends Vehicle{
//     constructor(brand,model,year,car,truck){
//         super(brand,model,year);
//         this.car=car;
//         this.truck=truck;
//     }
//     print(){
//         console.log(this.brand,this.model,this.year,this.car,this.truck)
//     }
//     changecolor(){
//         console.log("now the changed colour is red")
//     }
// }

// let data=new all("tata","harrier","2018","nexon","lorry")
// console.log(data.print())













// task-2 (Vijaya kumar G)
// Create a class called BankAccount with private properties:

// - balance
// - accountNumber

// And public methods:
// - deposit(amount): adds amount to balance
// - withdraw(amount): subtracts amount from balance
// - getBalance(): returns balance



// class BankAccount{
//     #balance
//     #accountNumber
//     deposit
//     withdraw;
//     getBalence;
//     constructor(balence,accountNumber,deposit,withdraw,getBalence){
//         this.#balance=balence
//         this.#accountNumber=accountNumber
//         this.deposit=deposit+this.#balance
//         this.withdraw=withdraw
//         this.getBalence=this.deposit-this.withdraw
//     }

//     print(){
//         console.log("your balaence is :",this.#balance,
//             "Your account number is :",this.#accountNumber,
//             "Your deposited ammount is :",this.deposit,
//             "You Withdral amount is :",this.withdraw,
//             "Your total balence is : ",this.getBalence)
//     }

// }
// let z=new BankAccount(10000,123456789,1500,5000,0)
// z.print()

















// task-3  (Vijaya kumar G)
// Create a class called MathHelper with a static method:

// - addNumbers(a, b): returns the sum of a and b

// class sum{
//    static num(a,b){
//     return a+b
//    }
// }
// let result=sum.num(10,20)
// console.log(result)