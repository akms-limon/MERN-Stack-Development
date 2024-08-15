

const person = new Object();

person.name = `John`;
person.age = 10;
person.ismarried = true;
person.hobbies = [`cricket`, `football`, `batminton`];

delete person.ismarried;

person.printFullName = function() {
    console.log(person.name);
}

person.printFullName();

person.changename = function(s) {
    person.name = s;
}

person.changename("limon");

person.printFullName();

const keys = Object.keys(person);

console.log(keys);

console.log(keys[4]);

// use for loop using forEach function

keys.forEach(function(data) {
    console.log(data);
});


// object values
const myobjectvalues = Object.values(person);

console.log(myobjectvalues);


// object entries

const myentries = Object.entries(person); 

console.log(myentries);


// forEach function to print entries

myentries.forEach(function(data) {
    console.log(data);
});