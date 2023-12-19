try {
    let age = prompt("Enter your age")
    age = Number.parseInt(age) 
    if(age>150){
    throw new ReferenceError("This is probably not true")
    }
} catch (error) {
    console.log(error.name)     //ReferenceError
    console.log(error.message)  //This is probably not true
    console.log(error.stack)    //ReferenceError: This is probably not true at Practice29.js:5:11
}

console.log("The script is still running")