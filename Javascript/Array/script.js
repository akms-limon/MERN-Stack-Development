let array = new Array();

array[0] = "Hello";
array[1] = "world";

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}


let array2 = ["hello", "world"];

for (let i = 0; i < array2.length; i++) {
    console.log(array2[i]);
}

let array3 = new Array('Hello', 'world');

for (let i = 0; i < array3.length; i++) {
    console.log(array3[i]);
}

// push back
array3.push('new push');

//pop back
array3.pop();

// push front
array3.unshift('new push front');

// pop front 
array3.shift();

let arr = [1, 2, 3, 4, 5, 6];



let totalsum = arr.reduce(function(accumulator, currvalue, indx, arr){
    return accumulator + currvalue;
}, 0)

const result = arr.find(function(age){
    return age < 20;
});

console.log(result);

const ans = arr.filter(function(x){
    return x < 4;
});

const reversed_array = arr.reverse();

// reverse array using function 

const new_array = function(arr) {
    return arr.reverse();
};

const new_ans = new_array([1, 2, 3]);


// remove duplicates from the array

function removeDuplicates(arr) {
    const filteredarray = arr.filter(function(element, index, arr) {
        return arr.indexOf(element) === index;
    })
    return filteredarray;
};

const nd_array = removeDuplicates([1, 1, 2, 4, 3, 3, 2]);

console.log(nd_array);


const students = [
    {name: `limon`, age: 20},
    {name: `joy`, age: 30},
    {name: `risan`, age: 40, birth: 2001},
];

students.forEach(element => {
    console.log(element.name);
    console.log(element.age);
    console.log(element.birth? element.birth : "not available");
});