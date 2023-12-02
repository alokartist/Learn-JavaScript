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