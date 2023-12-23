let key=prompt("Enter the key u want -")
let value=prompt("Enter the value u want -")

localStorage.setItem(key,value)  //set the value in the local storage
console.log(`the value at ${key} is ${localStorage.getItem(key)}`) //get the value from the local storage by call

//localStorage.removeItem
if (key=="color") {       
    localStorage.removeItem(key);
    console.log("the value of color is removed")
}