const prompt =require("prompt-sync")()
/*
1)write a program to print the marks of a student in an object using for loop
 obj={ Alok:98,Rohan:96,Aakash:89}
2)write a program in Q1 using for-in loop.
3)write a program to print "try again" util the user enters the correct number.
4)write a function to find mean of 5 numbers.
*/

//  Q1
let obj={
    Alok: 98,
    Rohan: 96,
    Aakash:89
}
for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log("The marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]]);
}

//  Q2
let marks={
    Alok: 98,
    Rohan: 96,
    Aakash:89
}
for( let a in marks){
    console.log(a)
}

//  Q3
let correctno=0;
let number;
while(number!= correctno){
    let number= prompt("Enter the number - ")
    console.log("TRY AGAIN");
}
console.log("Congo !! u have entered the correct number");


//Q4

function findMean(num1, num2, num3, num4, num5)
{
    let sum = num1 + num2 + num3 + num4 + num5;
    let mean = sum / 5;
    return mean;
}
  
let result = findMean(10, 20, 30, 40, 50);
console.log("The mean of the numbers is " + result);