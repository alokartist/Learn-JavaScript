/*
1.Write a program using the prompt function to take input of age as a value from the user and 
use alert to tell hint if he can drive!.
2.In Q1 use confirm to ask the user if he wants to see the prompt again.
3.In the previous question, use console.error to log the error if the age entered is negative.
4.Write a program to change the url to google.com(Redirection) if user enters a number greater than 4.
5.Change the background of the page to yellow,red or any other color based on user input through prompt.
*/ 

const promtp=require("prompt-sync")

//Q1+Q2
alert("hey")

RunAgain=true;
while(RunAgain){
    let age=prompt("Enter your age: ");
    age=Number.parseInt(age)
    if(age>18){
        alert("Yes, u can drive");
    }
    else
    {
        alert("No !! U can't drive")
    }
    RunAgain=confirm("Do you want to run again");
}

