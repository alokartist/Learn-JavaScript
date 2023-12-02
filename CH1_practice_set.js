/*
1)Create a variable type string and try to add a number to it?
2)Use typeof operator to find the datatype of the string in last question(Q1).
3)Create a constant object in javascript can you change it to hold a number later?
4) try to add a new key to the const object in problem 3 were you able to do it?
5) write a js program to create a word-meaning dictionary of 5 words?
*/

//Q1
let a1="Alok";
let b1=20;
let c1=a1+b1; //output:- Alok20

console.log(c1);  

//Q2
let a2="Alok";
let b2=20;
let c2=a2+b2;

console.log(typeof c2); // output:- String

//Q3
const x={
    name: "alok",
    rollno : 20
}
x=10; //TypeError: Assignment to constant variable.

//Q4
const y={
    name: "alok",
    rollno : 20
}
//extend the object by adding the diffrent elements
y['branch']= "computer science" 
console.log(y);   // o/p:- { name: 'alok', rollno: 20, branch: 'computer science' }


//update the values in the OBJECTS :-
const y={
    name: "alok",
    rollno : 20
}
y['branch']= "computer science"
y['rollno']= "XYZ" //edit the previous data on the object
console.log(y);  // o/p:- { name: 'alok', rollno: 'XYZ', branch: 'computer science' }



//Q5

const dict={
    code: "a system of words, letters, or signs used to represent a message in secret form, or a system of numbers, letters, or signals used to represent something in a shorter or more convenient form",
    program: "a series of instructions that can be put into a computer in order to make it perform an operation",
    error: "a mistake",
    exception: "someone or something that is not included in a rule, group, or list or that does not behave in the expected way",
    bug: "a mistake or problem in a computer program"
}
console.log(dict["code"]); //way1 for printing the value 

console.log(dict.bug); //way2 for printing the value 
