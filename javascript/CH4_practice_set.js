
/*
1)what will the following print in the javascript?
  console.log("ALOK\"".lenght);
2)Explore the includes, shortswith & endWith functions of a string.
3)Write a program to convert a given string to lowercase.
4)Extract the amount out of this string
"Please give Rs 1000"
5)Try to change 4th character of a given string writher you are able to do it?
*/

//Q1

console.log("Alok\"".length); //5

//Q2

const sentence="hello vscode, this is the code in language JavaScript";
const word="JavaScript";  //return in boolean (TRUE)
const word1="Javacript";  //return in boolean (FALSE)

//includes()
console.log(sentence.includes(word));
console.log(sentence.includes(word1));

// endsWith()
const word2="hello";
console.log(sentence.endsWith(word2)); //return in boolean (FALSE)
console.log(sentence.endsWith(word));  //return in boolean (TRUE)

//startsWith()
console.log(sentence.startsWith(word2)); //return in boolean (TRUE)
console.log(sentence.startsWith(word));  //return in boolean (FALSE)


//Q3

let alok="Alok";
console.log(alok.toLowerCase());

//Q4

let str2 ="Please give Rs 1000";
console.log(str2.slice("Please give Rs".length));



//Q5
let str1="ALOK";
console.log(str1.replace("K","KKUMAR"));
