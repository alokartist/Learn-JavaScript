const prompt =require("prompt-sync")()
/*
1)Use logical operator to find whether the age of a person lies between 10 and 20?
2)demonstrate the use of switch case statements in js
3)write a javascript program to find whether a number is divisible by 2 and 3?
4)write a javascript program to find whether a number is divisible by either 2 or 3.
5)Print" you can drive" or"you cannot drive" based on age being greater than 18 using ternary operator.
*/


//Q1
let a=prompt("Enter ur age - ");

if(a>=10 && a<=20){
    console.log("age lies between 10 and 20");
}
else{
    console.log("Invalid");
}


//Q2

let day=prompt("Enter Number - ");

switch (day){
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THRUSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATDAY");
        break;
    case 7:
        console.log("SUNDAY");
        break;
    default:
        console.log("Invalid number");
        break;
}


//Q3

let x=prompt("Enter a number - ");

if(x%2==0 && x%3==0){
    console.log("number is divisible by 2 and 3");
}
else{
    console.log("number is not divisible by 2 and 3");
}


//Q4
let y=prompt("Enter a number - ");

if(y%2==0 || y%3==0){
    console.log("number is divisible by 2 or 3");
    if(y%2===0){
        console.log("number is exactly divisible by 2 ");
    }
    else{
        console.log("number is exactly divisible by 3 ");
    }
}
else{
    console.log("number is not divisible by 2 or 3");
}



//Q5

let age=prompt("Enter the age- ");
console.log("You" ,(age>18? "Can Drive":"Can't drive"));