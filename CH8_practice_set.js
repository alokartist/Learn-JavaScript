/*
1)Write a program to show diffrent alerts when diffrent buttons are clicked.
2)Create a website which is capable of storing bookmarks of your favorite website using herf
3)Solve Q2 using event listeners
4)Write a javascript program to keep fetching contents of a website(Every 5 seconds)
5)Create a glowing bulb effect using classList toggle method in JavaScript
*/
/*
//Q1
document.getElementById("btn1");
let a= function(e){
    alert("It's button 1");
}
btn1.addEventListener('click',a);

let b=function(e){
    alert("its button 2")
}
btn2.addEventListener('click',b);

let c=function(e){
    alert("its button 3")
}
btn3.addEventListener('click',c);


//Q2

//Q3
document.getElementById("google");
let google=function(e){
    href="https://google.com"
}
let youtube=function(e){
    href="https://youtube.com"
}
let github=function(e){
    href="https://github.com"
}
google.addEventListener('click',function(e){
    window.location="https://google.com"
    win.focus()
});

youtube.addEventListener('click',youtube);

github.addEventListener('click',github);

//Q4
const fetchContent=async (url)=>{
    con=await fetch(url);
    let a =await con.json()
    return a;
}

setInterval(async function(){
    let url="https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url))
},3000)
*/
//Q5
setInterval(async function(){
    document.querySelector("#bulb").classList.toggle("bulb")
}, 300)

