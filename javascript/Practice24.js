/*
let p1=new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("Resolve")
        resolve(true)
    },2000)
})
p1.then((value)=>{
    console.log(value);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Promise 2")
        }, 2000);
    })
}).then((value)=>{
    console.log("we are done");
    return 2
}).then((value)=>{
    console.log("we r finally done");
})
*/


//loadScript using Promise and solving the issue of Pyramid of DOM.

const loadScript = (src) => {
    return new Promise((resolve, reject) => {
            let script = document.createElement("script")
            script.src = src
            document.head.append(script)
            script.onload = (script) => {
                    resolve("Script 1 has been loaded")
            }
            script.onerror = () => { reject(0) }
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
    console.log(value)
    return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
}).then((value) => {
    console.log("Script 2 is also loaded")
    return loadScript("https://nothing")
}).then((value)=>{
    console.log("Script 3 is also loaded");
}).catch((error) => {
    console.log("We are sorry but we are having problems loading this script")
})