//SNAKE, WATER & GUN

/*
Use javascript to create a game of snake water and gun. 
The game should ask you to enter S,W,and G. 
The computer should be able to randomly generate S,W and G and declear Win or loss using alert. 
Use confirm and prompt whether required.
*/

let runagain = true;
let compscore = 0;
let userscore = 0;
do {
const alphabet = 'SWG';
const ans2 = alphabet[Math.floor(Math.random() * 3)];
let ans = prompt("Enter either S(Snake) or W(Water) or G(Gun) ");
if (ans == "G" && ans2 == "W") {
alert("Computer Wins: Water ");
compscore++;
}
else if (ans == "W" && ans2 == "G") {
alert("User wins: Water");
userscore++;
}
else if (ans == "S" && ans2 == "G") {
alert("Computer wins: Gun");
compscore++;
}
else if (ans == "G" && ans2 == "S") {
alert("User wins: Gun");
userscore++;
}
else if (ans == "W" && ans2 == "S") {
alert("Computer wins: Snake");
compscore++;
}
else if (ans == "S" && ans2 == "W") {
alert("User Wins: Snake");
userscore++;
}
else if (ans == ans2) {
alert("Its a tie")
}
else {
alert("You have entered a wrong letter.")
}
runagain = confirm("Do you want to play again?")
} while (runagain)

alert("Computer score is " + compscore + " and user score is " + userscore);


