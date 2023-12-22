/* 
1)Write a program to load a JavaScript file in a browser using Promises.
  Use .then() to display an alert when the load is complete
2)Write the same program from previous question and use async/ await syntax
3)Create a promise which rejects after 3 seconds. use an async/await to get its value.
 use a try catch to handle its error
4)Write a program using Promise.all() inside an async/awit 3 promises.
 compare its result with the case where we awit there promises one by one.
*/


/*
//Q1
const loadScript = (src) => {
    return new Promise((resolve, reject) => {
            let script = document.createElement("script")
            script.src = src
            document.head.append(script)
            script.onload = (script) => {
                    resolve("Script has been loaded : "+src)
            }
            script.onerror = () => { reject(0) }
    })
}

let a=await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
a.then((value)=>{
    console.log(value);
})



//Q2
const loadScript = (src) => {
    return new Promise((resolve, reject) => {
            let script = document.createElement("script")
            script.src = src
            document.head.append(script)
            script.onload = (script) => {
                    resolve("Script has been loaded : "+src)
            }
            script.onerror = () => { reject(0) }
    })
}
const main1=async()=>{
    let a=await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
    console.log(a)
}
main1()



//Q3
let p=() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("Please this is not acceptable"))
        },3000)
    })
}
let a=async()=>{
    try {
        let c=await p()
        console.log(c)
    }
    catch (error) {
        console.log("This error is resolved "+error)
    }
}   
a()

*/

//Q4

let p1= async() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(10)
        }, 1000);
    })
}

let p2= async() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(20)
        }, 2000);
    })
}

let p3= async() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(30)
        }, 3000);
    })
}

const run= async()=>{
    console.time("run")
    let a1=await p1();
    let a2=await p2();
    let a3=await p3();
    console.log(a1,a2,a3);
    console.timeEnd("run") //the total time will be 1000+2000+3000 approx 6sec will be the total time for this
}
run()

const run2= async()=>{
    console.time("run2")
    let a1= p1();
    let a2= p2();
    let a3= p3();
    let a1a2a3= await Promise.all([a1,a2,a3]) 
    console.log(a1a2a3);
    console.timeEnd("run2")  //run2: 3000 ms approx because of the p3 taking ma time that will be the final time 
}
run2()