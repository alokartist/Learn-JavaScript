// Practice #6


console.log("Practicing JavaScript Part-6");
console.log("\n");
console.log("Functions in javascript");


//Example: Simple Function
function sayHello() 
{
  console.log("Hello world!");
}

sayHello(); // calling/invoking the function


// Example: Function with Arguments
function average(x, y)
{
  let average = (x + y) / 2;
  console.log(average);
}
average(5, 10); // calling/invoking the function with arguments


//  # Arrow Functions
let sayHello = () => {
  console.log("Hello, world!");
}
sayHello(); // calling/invoking the function



let Plus = (x,y) => {
    return x+y;
}
Plus(10,20);