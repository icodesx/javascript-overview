// Control structures

// Conditional statements
let age = 19;

if(age >= 18 && age < 65){
    console.log("You're an adult");
} else if(age < 18 && age > 12){
    console.log("You're a teenager");
}else if(age >= 65){
    console.log("You're an older adult");
}else{
    console.log("You're a child");
}

// Loops
var i = 0;
while(i <= 10){
    console.log('i is equal to', i);
    i++;
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Ternary operator
var pet = 'Dog';
var guau = (pet === 'Dog') ? true : false;

// Switch
var food = 'Pizza';
switch(food){
    case 'Pizza':
        console.log('The food is pizza');
        break;
    case 'Hamburger':
        console.log('The food is hamburger');
        break;
    default:
        console.log('The food is another stuff');
}
