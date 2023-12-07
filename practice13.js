let id1=document.getElementById("index1");
console.log(id1)

console.log(id1.matches(".class"));
console.log(id1.matches(".Box"))

console.log(id1.closest(".span1")) //null

let id2=document.getElementById("index3")
console.log(sp1.closest(".Box"))
console.log(sp2.closest(".Box"))

console.log(id2.contains(sp1));//false
console.log(sp1.contains(sp1));//true
console.log(sp1.contains(id1));//false
