// Arrays

// Create an array
var animals = new Array();
animals[0] = 'dog';
animals[1] = 'cat';
animals[2] = 'chicken';
animals[3] = 'wolf';
console.log(animals[2]);
console.log(animals.length);

// Iterate over an array
var countries = ['United States', 'Canada', 'Mexico', 'England', 'Russia'];
for(var i = 0; i < countries.length; i++){
    console.log(countries[i]);
}

// Add elements to an array
countries.push('Germany');
console.log(countries);