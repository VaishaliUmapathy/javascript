window.alert("test");//create an alert box
document.title="javascipt";//change the title of webpage
console.dir(document)//give me the entier document
//Accessing the DOM
//1) getElementById() returns an html element using Id name
//2)getElementsByClassName() return the collection of elements using the class name
//3)getElementsByTagName() returns the collection of elements
//4)querySelector()returns any one element
//5)querySelectorAll() returns an nodelist

let head=document.getElementById("head");
console.log(head);
console.log(head.nodeType);
console.log(head.nodeName);
console.log(head.nodeValue);
//to change the style of the particular selecting id elemennt
head.style.backgroundColor="black";
head.style.color="white";
head.style.padding="10px";
head.style.textAlign="center";

//2)getElementsByClassName()
let domtutorial=document.getElementsByClassName("domtutorial");
console.log(domtutorial);
//to change the style of the particular selecting class name elemennt
domtutorial[0].style.color="blue";
domtutorial[1].style.color="orange";

//3) getElementsByTagName()
let tags=document.getElementsByTagName("p");
console.log(tags);
for(let i=0;i<tags.length;i++){
    tags[i].style.backgroundColor="orange";
}

//4)querySelector()
let ul=document.querySelector("h4");
console.log(ul);
ul.style.backgroundColor="purple";
  
//5)querySelectorAll()
let list=document.querySelectorAll("ol");
console.log(list);//returns as nodelist
list.forEach((element)=>{
    element.style.color="blue";
});

//nodelist act as static
//html collection dynamic
let li=document.getElementsByClassName("ul");
console.log(li);
console.log(li.length);

let linew=document.createElement("li");
linew.innerHTML="six";
li[0].parentNode.appendChild(linew);
