/*
let a = document.getElementsByClassName("container")[0]
a.onclick=()=>{
    let b=document.getElementsByClassName("container")[0]
    b.innerHTML="hello world!"
}
*/
let x = function(e){
    console.log(e)  //  event object
    console.log(e.target)  //  <button id="btn">CLICK me</button>
    //  event object
    console.log(e.type,e.clientX,e.clientY) //  click 31 11
    alert("Hey 1");
}
let y = function(e){
    alert("Hey 2");
}
btn.addEventListener('click',x)
btn.addEventListener('click',y)

let a=prompt("Enter the number");

if(a=="3"){
    btn.removeEventListener('click',x);
}

