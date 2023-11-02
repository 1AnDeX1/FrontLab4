let firstElement = document.getElementById("tenth-element");
let secondElement = document.querySelector("#next-element");
let buttonElements = document.querySelector(".buttons");

let addButton = document.querySelector(".addImgButton");
let increaseButton = document.querySelector(".increaseImgButton");
let decreaseButton = document.querySelector(".decreaseImgButton");
let removeButton = document.querySelector(".removeImgButton");

let firstElementIsClicked = false;
let secondElementIsClicked = false;
let newDiv;
let newImg;

firstElement.addEventListener("click", function(){
    firstElement.className = "";
    if (firstElementIsClicked) {
        firstElement.classList.add("lightred");
    }
    else{
        firstElement.classList.add("lightblue");
    }
    firstElementIsClicked = !firstElementIsClicked;
})
secondElement.addEventListener("click", function(){
    secondElement.className = "";
    if (secondElementIsClicked) {
        secondElement.classList.add("lightgreen");
    }
    else{
        secondElement.classList.add("lightyellow");
    }
    secondElementIsClicked = !secondElementIsClicked;
})

addButton.addEventListener("click", ()=>{
    if (!newDiv) {
        newDiv = document.createElement("div"); 
        newImg = document.createElement("img");  
        newImg.src = "city.png";
        newImg.alt = "New img";
        buttonElements.before(newDiv);
        newDiv.append(newImg);
        document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
})
increaseButton.addEventListener("click", ()=>{
    if (newDiv) {
        newImg.style.width = `${newImg.width * 1.5}px`;
        document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
})
decreaseButton.addEventListener("click", ()=>{
    if (newDiv) {
        newImg.style.width = `${newImg.width * 0.5}px`;
        document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
})
removeButton.addEventListener("click", ()=>{
    if (newDiv) {
        newDiv.remove();
        newImg.remove();
        newDiv = null;
        newImg = null;
    }
})