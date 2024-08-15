// rest 

function maximum_of_the_numbers(...rest) {
    return Math.max(...rest);
};

maximum = maximum_of_the_numbers(1, 2, 3, 4, 15);

console.log(maximum);


// use of spread

console.log(..."AKMS Limon");


const arr1 = [1, 2, 3, 4];

const arr2 = [1, 2, 3, 4];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const obj1 = {
    name: "limon",
    age: "24",
};

const obj2 = {
    district: "kurigram",
    upozila: "rowmari",
}

const newobj = {...obj1, ...obj2};

console.log(newobj);