 

let s = new String("I love you");

let res = s.split("");

res.reverse();

console.log(res);

res = res.join();

console.log(res);

let p = "Hello";

console.log(p.repeat(10));

let ss = "The name of our country is bangladesh";

console.log(ss.startsWith("T"));

const result = ss.includes("name");

console.log(result);

function isIncludes(s, ss) {
    return s.includes(ss);
}

const x = isIncludes(ss, "name");

console.log(x);