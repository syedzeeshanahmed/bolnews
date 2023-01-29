// const name = "chandan";
// alert(name);



let fname = "Syed";
let mname = "Zee";
let lname = "ahmed";

let age = prompt("Zeeshan's age is");

// old way
// let result = fname + ' ' + mname + ' ' + lname + ' ' + 'is' + ' ' + age;
// alert(result);


// using template string

let result = `${fname} ${mname} ${lname} is ${age} years old`;
alert(result);