// Objects

// Initialize an object
let pet = {
    'name': 'bobby',
    'age': 5,
    'animal': 'dog',
    'physical': {
        'color': 'white',
        'size': 'small',
    }
};

console.log(pet['physical']['color']);
console.log(pet.age);

// Prototype
function Person(name, age){
    this.name = name;
    this.age = age;
}

let me = new Person('John', 21);
console.log(me.name);
me['name'] = 'Bill';
console.log(me.name);
