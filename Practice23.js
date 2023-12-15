let p1=new Promise(function(resolve , reject){
    console.log("Promise is pending")
    setTimeout(()=>{
        alert("i am a promise and i am resolved")
        resolve(true)
    },5000)
})

let p2=new Promise(function(resolve , reject){
    console.log("Promise is pending")
    setTimeout(()=>{
        alert("i am a promise and i am rejected")
        reject(new Error("i am an error"))
    },5000)
})

p1.then((value)=>{
    console.log(value)
})
p2.catch((value)=>{
    console.log("catch and solved")
})
console.log(p1,p2)