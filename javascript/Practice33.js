//console.log(document.cookie)
//document.cookie ="name = ALOK123"
console.log(document.cookie);
document.cookie="name2 = helloeveryone"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}` //by the help of " decodeURIComponent('%3D%3D89') " we can decode the URI component