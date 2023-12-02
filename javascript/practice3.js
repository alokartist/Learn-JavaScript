// Practice #3
console.log("Practicing JavaScript Part-3");
console.log("\n");
console.log("Operators & Expressions");

//Arithmetic Operators

let a=10;
let b=20;
console.log("a+b =",(a+b)); //30
console.log("a-b =" ,(a-b)); //-10
console.log("a*b =" ,(a*b)); //200
console.log("a/b =" ,(a/b)); //0.5
console.log("a**b =" ,(a**b)); //100000000000000000000
console.log("a%b =" ,(a%b)); //10
console.log("a++ =" ,(a++));
console.log("++a =" ,(++a));
console.log("b++ =" ,(b++));
console.log("++b =" ,(++b));
console.log("a-- =" ,(a--));
console.log("--a =" ,(--a));
console.log("b-- =" ,(b--));
console.log("--b =" ,(--b));


//Assignment Operators

let a1=10;
let b1=20;
console.log("a1+=" ,(a1+=b1));
console.log("a1-=" ,(a1-=b1));
console.log("a1/=" ,(a1/=b1));
console.log("a1*=" ,(a1*=b1));
console.log("a1**=" ,(a1**=b1));
console.log("a1%=" ,(a1%=b1));


//Comparison Operators

let comp1=6;
let comp2=7;
console.log("Comp1==comp2 ? ",comp1==comp2);
console.log("Comp1!=comp2 ? ",comp1!=comp2);
console.log("Comp1===comp2 ? ",comp1===comp2); //Equals and the data type (data type is same but values are not)
console.log("Comp1!==comp2 ? ",comp1!==comp2); //not equals and the data type

let comp3=7;
let comp4="7";
console.log("Comp3==comp4 ? ",comp3==comp4);
console.log("Comp3!=comp4 ? ",comp3!=comp4);
console.log("Comp3===comp4 ? ",comp3===comp4); //Equals and the data type(values are same but data type is not)
console.log("Comp3!==comp4 ? ",comp3!==comp4); //not equals and the data type

console.log("Comp1<=comp2 ? ",comp1<=comp2);
console.log("Comp1>=comp2 ? ",comp1>=comp2);
console.log("Comp1<comp2 ? ",comp1<comp2);
console.log("Comp1>comp2 ? ",comp1>comp2);


//Logical Operator

let x=10;
let y=20;

console.log(x<y && x==y);
console.log(x<y || x==y);
console.log(!true);
console.log(!false);


//Ternary Operator
let age=19
console.log("you" (age>18? " can drive":"can't drive"))



//Comments

//Single line comments in "//"
// multi-lines comments are in 
/* the multi-line comments is here*/ 