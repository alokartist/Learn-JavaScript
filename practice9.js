// Practice #9


console.log("Practicing JavaScript Part-9");
console.log("\n");
console.log(" Arrays in javascript");

let arr=[90,98,78,89,"alok",null,false];
console.log(arr);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]); // Undefined

console.log("The length of the array is - " ,arr.length);

arr[7]=90; // Adding the element in the array
console.log(arr);

arr[4]=100;  //replacing the array element 
console.log(arr);

console.log(typeof arr); // object will be printed