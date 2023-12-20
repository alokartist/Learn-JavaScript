/*
let options={
    method: "Post",
    headers :{
        "Content-type":"application/json"
    },
    body: JSON.stringify({
        title:"alok",
        body:"kumar",
        userId:1
    })
}
fetch("https://jsonplaceholder.typicode.com/posts",options)
.then((response)=>response.json())
.then((json)=>console.log(json));
*/

/*
//using promises instead of .then

const Create =async ()=>{
let options={
    method: "Post",
    headers :{
        "Content-type":"application/json"
    },
    body: JSON.stringify({
        title:"alok",
        body:"kumar",
        userId:1
    })
}
let  p =await fetch("https://jsonplaceholder.typicode.com/posts",options)
    let response=await p.json()
    return response
}

const mainfunc = async ()=>{
    let a=await Create()
    console.log(a)
}
mainfunc()
*/


//by the help of passing the function
const Create =async (pass)=>{
    let options={
        method: "Post",
        headers :{
            "Content-type":"application/json"
        },
        body: JSON.stringify(pass)
    }
    let  p =await fetch("https://jsonplaceholder.typicode.com/posts",options)
        let response=await p.json()
        return response
    }
    const getvalue = async (id)=>{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts"+id)
        let r= await response.json()
        return r
    }


    const mainfunc = async ()=>{
        let pass={
            title:"alok",
            body:"kumar",
            userId:1
        }
        let a=await Create(pass)
        console.log(a)
        console.log(getvalue(101)) //get the value of the id="101" help of the function getvalue
    }
    mainfunc()