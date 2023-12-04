// Practice #7

/*
console.log("Practicing JavaScript Part-7");
console.log("\n");
console.log("Strings");

let a="ALOK";
let b='ALOK';

let x="Maths";
//console.log(a+" loves "+x);


//Template letrals:-

let c=`Alok`;
//let sentence=`ALOK loves Maths`;


let sentence=`${c} loves ${x}`; //another way to print sentence using `${}`.

console.log(sentence);


//Escape sequence characters
let abc="Alok\"kumar"; // ignore \
console.log(abc)
//lenght will be one of this escape character \" is of one 

let abc4='Alok\'kumar'; // ignore \
console.log(abc4)

let abc5="Alok\'kumar"; // ignore \
console.log(abc5)

let abc1="Alok\nkumar"; // new line
console.log(abc1)

let abc2="Alok\tkumar"; // tab
console.log(abc2)

let abc3="Alok\rkumar"; // carriage return
console.log(abc3)

*/

// String properties and Methods:-

let alok= "ALOK";
console.log(alok.length); //4

console.log(alok.toUpperCase()); //ALOK
console.log(alok.toLowerCase()); //alok

console.log(alok.slice());
console.log(alok.slice(1,3)); //LO
console.log(alok.slice(1)); //LOK

let x="ALOK";
console.log(alok.replace("ALOK","ALOOOOKKKK")); 

let friend="Naman";
console.log(alok.concat(" is a friend of ",friend));

let a= "   ALOK       "
console.log(a.trim());