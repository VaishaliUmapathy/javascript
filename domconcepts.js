//dom concepts
//createElement
//innerHTML
//innerText
//appendChild
//insertBefore
//remove()
//removeChild()
//cloneNode()
//setInterval()
//classList.add()
//getAttribute
//setAttribute
//hasAttribute
//removeAttribute

//createElement()
const h1=document.createElement("h1");
h1.innerHTML="js DOM API concepts";
console.log(h1);
//appendChild() we can insert the element as child into the parent element as dynamic
const body=document.querySelector("body");
body.appendChild(h1);
h1.style.backgroundColor="purple";
h1.style.padding="7px";
h1.style.textAlign="center";
//insertBefore()
const h2=document.createElement("h2");
h2.innerText="this is paragraph";
console.log(h2);
const h3=document.querySelector("h3");
console.log(h3);
//innerText
h3.innerText="this is innerText DOM ";
console.log(h3);
//innerHTML
h3.innerHTML="This is a <i>innerHTML</i> ";
//insertBefore()
 //body.removeChild(h3);
let cloneh1=h1.cloneNode(true);





