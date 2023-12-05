/*
1) create an array of numbers and take input from the user to add numbers to this array.
2) Keep adding number to the array in (1) until 0 is added to the array.
3) Filter for number divisible by 10 from a given array.
4) Create an array of square of given numbers.
5)Use reduce to calculate factorial of a given number from an array of first n natural number
(n being the number whose factorial needs to be calculated).
*/

const prompt =require("prompt-sync")()

//Q1

let arr=[10,2,30,40,5,0,6];
let a=prompt("Enter the value");
a=Number.parseInt(a);
arr.push(a)
console.log(arr);


//Q2
let x;
do{
    x=prompt("Enter the value");
    x=Number.parseInt(x);
    arr.push(x)
}while(x!=0);

console.log(arr);


//Q3

let arr2=[10,20,2,5,7,6,600,35,40];
let arnew=arr2.filter((a)=>{
    return a%10==0;
})
console.log(arnew)


//Q4

let arr3=[2,3,5,4,6,7,8,9];
let arrnew3=arr3.map((value)=>{
    return value*value;
})
console.log(arrnew3);



//Q5

let arr4=[2,3,4,5,6,7];
let arrnew4=arr4.reduce((h1,h2)=>{
    return h1*h2;
})
console.log(arrnew4);