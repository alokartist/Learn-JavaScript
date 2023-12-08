let a= first.getAttribute("class")
console.log(a);                             //naya

console.log(first.hasAttribute("class"));   //true

console.log(first.hasAttribute("style"));   //false

/*
console.log(first.hasAttribute("class"));   //true

console.log(first.hasAttribute("style"));   //false

console.log(first.attributes);
->  NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}0: id1: classclass: classid: idlength: 2[[Prototype]]: NamedNodeMap

console.log(first.getAttribute("class"));
->  naya

console.log(first.setAttribute("alok","lok"));
->  <div id="first" class="naya" alok="lok"> Hello</div>

console.log(first.removeAttribute("class"));    //removed form div
console.log(first.removeAttribute("alok"));     //removed form div

*/

/*
DATASET
console.log(first.dataset);
->   DOMStringMap {game: 'angry bird', player: 'viewers'}game: "angry bird"player: "viewers"[[Prototype]]: DOMStringMap

console.log(first.dataset.game);
->   angry bird

console.log(first.dataset.player);
->   viewers
*/