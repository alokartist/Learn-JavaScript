// Practice #1
console.log("Practicing JavaScript part-1 ");
//for declearition we use "consol.log()" the printing statement used as in the other languages... 
console.log("hello world");

var b="Alok";//VAR variable is tha oldest form used in previous javascript
//using VAR variable is decleared once and folled same as if for the blocks also 
var x="alok";
    {
        var x=22;
        console.log(x);
    }
    console.log(x);
var c=23.4 ;
var d=null;
var e=undefined;
{
    let a=34;
    console.log(a);
}
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

const A="ALOK"; //Const varibale is that is cannot be changed "once decleared it can't be changed"
console.log(A);
const y="alok";
console.log(y);
let a=10; //"LET" varibale don't make the ERROR same as of the VAR varible for each block the decleariation is diffrent which does not folled as in the VAR variable....
{
    let a="alok";
    {
        let a=22;
        console.log(a);
    }
    console.log(a);

}
console.log(a);

// Practice #2
console.log("Practicing JavaScript Part-2");
console.log("\n");
console.log("Primitive Datatype & Non-Primitive Datatype");

// Primitive datatype
//Total 7 type of primitive data type
//nn ss bb u "n-number,n-NULL,b-BigInt,b-boolean,s-Symbol,S-string,u-Undefined"
console.log("\n");

a=null;
b=56;
c="alok";
d=true;
e=Symbol("javScript");
f=BigInt(290);
g= undefined;

console.log(a,b,c,d,e,f,g);

//for knowing the which data type it is for this we have to go for "consol.log(type of VAR)"
//eg:-
console.log(typeof e); //output:- Symbol

// NON-Primitive datatype
//In javascript the non-primitive data type is known as OBJECTS
const item = {
    "Alok" : 45
}
console.log(item["Alok"]); //output:- 45

//for this if there is not a defined VARIABLE in object then the output generated will be :undefined

console.log(item["ahah"]); //output:- undefined