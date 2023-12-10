alert("hello");

// setTimeout & clearTimeout

let a=setTimeout(function(){
    alert("I am inside setTimeout")
},2000)

//console.log(a)
//clearTimeout(a) //No alert will be there after 2sec because we have cleared the timout

let x=prompt("do you want to see setTimeout?")
if("n"==x){
    clearTimeout(a)
}


//setInterval & clearInterval

/*
let y=setInterval(function(){
    alert("i will run")
},5000)

clearInterval(y)

*/