let promise=new Promise(function(resolve, reject){
    console.log("Helllo 1")
    resolve(true)
})

console.log("hello 2")
setTimeout(() => {
    console.log("hello 3")
}, 2000);

console.log("hello 4")
console.log(promise)