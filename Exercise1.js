/*
EXERCISE-01

Write a javascript program to generate a random number and store it in a variable. 
The progeam then takes an input from the user to tell them whether the guess was correct,
greater or smaller then the original number.
100-(no. of guesses) is the score of the user. 
The program is expected to terminate once the number is gussed.
Number should be between 0-100
*/
const prompt =require("prompt-sync")()


let initial = Math.floor(Math.random() * 101); // will get the random number 

for(let i=1;i<=100;i++){
    let variable=prompt("Enter your guess:- ");
    if(initial != variable){
        if(initial>variable){
            console.log("Guess was smaller then the original number ");   
        }
        else{
            console.log("Guess was larger then the original number ");
        }
    }
    else{
        console.log("Correct guess");
        console.log("The correct number was : ",initial)
        console.log("Your score is - ",100-i);
        break;
    }
}


