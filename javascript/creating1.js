// Practice #3
console.log("Practicing JavaScript part-3 ");

/*
1)write a program to print the marks of a student in an object using for loop
 obj={ Alok:98,Rohan:96,Aakash:89}
2)write a program in Q1 using for-in loop.
3)write a program to print "try again" util the user enters the correct number.
4)write a function to find mean of 5 numbers.
*/

//Q1
let Object={
    Alok:87,
    Rohan:53,
    new:90
}
for(let i=0;i<Object.keys(Object);i++){
    console.log("The marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]]);
}

//Q2
for(let a in Object){
    console.log(a);
}

//Q3
let a=40;
let num=prompt=("Enter the number")
while(a!=num){
    console.log("TRY AGAIAN");

}
console.log("correct");