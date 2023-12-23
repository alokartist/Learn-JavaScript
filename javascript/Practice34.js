let key=prompt("Enter the key u want -")
let value=prompt("Enter the value u want -")

//localStorage.setItem(key,value)
localStorage.setItem(key,value)  //set the value in the local storage

//localStorage.getItem(key)
console.log(`the value at ${key} is ${localStorage.getItem(key)}`) //get the value from the local storage by call

//localStorage.removeItem(key)
if (key=="color") {       
    localStorage.removeItem(key); //all the values or the enterd value will be removed
    console.log("the value of color is removed")
}

//localStorage.clear()
if(key == 0){
    localStorage.clear();
}

//localStorage.length
localStorage.length();
//give the exact length of the localStorage

//localStorage.key(index)
localStorage.key(0)
localStorage.key(1)
//this will show in which index number which keys is present and if the number execteds the index then the the "null" will be displayed 

