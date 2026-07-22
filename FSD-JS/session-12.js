// // let name="Basi";
// // console.log(name);
// // console.log(typeof name);

// let age = Number("25");
// console.log(age);
// console.log(typeof age);


console.log(Number("abc"));
console.log(Number(""));
console.log(Boolean(-11));

// Arithmetic operations and examples
let a = 10;
let b = 3;

// Comparison operators example
console.log("Is a greater than b?", a > b);
console.log("Is a less than b?", a < b);
console.log("Is a greater than or equal to b?", a >= b);
console.log("Is a less than or equal to b?", a <= b);
console.log("Is a equal to b?", a == b);
console.log("Is a not equal to b?", a != b);

// arithmatic operators 
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// if / else if / else example
let marks = 78;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

// switch / case / break example
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown day";
}

console.log("Day:", dayName);




