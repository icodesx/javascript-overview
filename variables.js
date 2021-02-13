// Variables

// let (block-level variables)
let food = 'Donuts';
console.log(food);

function sayHello() {
    let food = 'Doritos';
    console.log('Hello, do you want some', food ,'?');
}

sayHello();

console.log(food);

// const (variables that won't change, are immutable, and it's also a block-scoped variable)
const Pi = 3.14;
Pi = 99;
console.log(Pi); // This will throw an error

// var (it doesn't have so much restrictions as the other two options)
var pet = 'Dog';
pet = 'Cat';
console.log(pet); // It can be overwritten



