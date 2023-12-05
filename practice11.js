// Practice #9

/*
console.log("Practicing JavaScript Part-9");
console.log("\n");
console.log("loops in Arrays in javascript");


let arr=[90,98,78,89];
//console.log(arr);
for (let i=0 ; i < arr.length; i++)
{
    console.log(arr[i]);
}


let xs=[10,20,30];
for (let i = 0; i < xs.length; i++) 
{ 
    console.log(xs[i]);     // all the elements will be printed using this for loop
}


//forEach()


xs.forEach((Element)=>{
    console.log(Element*Element)
})

xs.forEach((Element)=>{
    console.log(Element+2)   //can perform any expression using this forEach loop
})



//Array.from

let name="ALok";
let arr1= Array.from(name)  //Array.from will convert the string into the array form
console.log(arr1);


//For...of

for(let i of arr1){   //will print the array elements with it 
    console.log(i);

}


//For...in

for(let i in arr1){   //will print the index/jkey number of te elements present on it
    console.log(i);

}


//MAP()

let ar=[1,2,3,4,5,6,7];
let arnew=ar.map((value)=>
{
    console.log(value);
    return value+value;
})
console.log(arnew);

let arnew2=ar.map((value,index,Array)=>
{
    console.log(value,index,Array);
    return value+index;                   // Used for making new array with the help of operation in map
})
console.log(arnew2);

// Filter ()


let ar2=[10,20,30,4,5,6,7];
let arnew3=ar2.filter((a2)=>{
    return a2<10;
})
console.log(arnew3);
*/


// Reduce()
let ar5=[1,2,3,3,7,4,4,,5,5]
let arnew5=ar5.reduce((a,b)=>{
    return a+b
})
console.log(arnew5)

//by the help of the reduce using the functions
let ar3=[10,20,30,4,5,6,7];
const Reduce=(h1,h2)=>{
    return h1+h2;
}
let arnew4=ar3.reduce(Reduce);
console.log(arnew4);

