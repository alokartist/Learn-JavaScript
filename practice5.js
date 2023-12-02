// Practice #5

console.log("Practicing JavaScript Part-5");
console.log("\n");
console.log("Loops in javascript");

/*
1. `for` loop
2. `for-in` loop
3. `for-of` loop
4. `while` loop
5. `do-while` loop
*/


//FOR LOOP
for (let i = 1; i <= 29; i++)
{
    console.log(i);
}
  
let n = prompt("Enter a number");
let sum = 0;
for (let i = 1; i <= n; i++)
{
  sum = sum + i;
}
console.log("The sum of first " + n + " numbers is " + sum);


//for-in loop

let person =
{
    name: "Alok",
    age: 19,
    gender: "male"
};

for (let x in person) 
{
    console.log(x);
}

for (let x in person) 
{
    console.log(x + ": " + person[x]);
}


//for-of loop

for (let value of "ALOK") {
    console.log(value);
}


let numbers = [1, 2, 3, 4, 5];//in arrays
for (let number of numbers) {
  console.log(number);
}


//while loop

let i = 1;
while (i < 10) {
  text += "The number is " + i;
  i++;
}

//do-while loop

do {
    let i=1;
    text += "The number is " + i;
    i++;
  }
  while (i < 10);