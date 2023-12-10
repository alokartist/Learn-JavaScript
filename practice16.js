/*      -> Easy way to insertion
let a= document.getElementsByTagName("div")[0];
a.innerHTML = a.innerHTML +"<h1>Hello world</h1>"
*/
let a= document.getElementsByTagName("div")[0];
let div=document.createElement('div');
div.innerHTML="<h1>Hey</h1>";
//document.appendChild(div);

//a.append(div)
//a.prepend(div)
//a.before(div)
//a.after(div)
//a.replaceWith(div)