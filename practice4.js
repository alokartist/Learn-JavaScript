// Practice #4
const prompt =require("prompt-sync")()
let age = prompt("Enter your age");
/*console.log("Practicing JavaScript Part-4");
console.log("\n");
console.log("Conditional expressions in JavaScript");
// # Getting User Input
let age = prompt("Enter your age");
console.log(typeof age); // Always be STRING  type 

/* # Conditional Statements
Conditional statements are used to perform different actions based on different conditions.
* `if` statement
* `if-else` statement
* `if else-if else` statement
*/
/*
// #Basic if statement -
if(age >18) //condition
{
    console.log("U can drive");  //code which will be run after when the conditon of if statement is true...
}


// #Basic if-else statement -

if(age>18)
{
    console.log("u can drive");
}
else
{
    console.log("u are below 18 * U can't drive *");
}

*/
// #Basic if else-if else statement -
if(age<0)
{
    console.log("Invalid");

}
else
{
    if(age>=18){
        console.log("u can drive");
    }
    else{
        console.log("below 18 can't drive");
    }
}