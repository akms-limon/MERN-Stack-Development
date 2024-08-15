const students = [
    {name: "joy", age: 20}, 
    {name: "risan", age: 30},
    {name: "limon", age: 40},
]

console.log(students);

const students_map = students.map(element => {
    element.sub = `cse`;
    return element;
});

console.log(students_map);

console.log(students_map[0]);
