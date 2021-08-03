// Your code goes here
const mainNav = document.querySelector(".main-navigation");
const home = document.querySelector(".home");
const welcome = document.querySelectorAll('h2')[0];
const image1 = document.querySelectorAll('img')[0];
const image2 = document.querySelectorAll('img')[1];
const footer = document.querySelector('.last');
const image3 = document.querySelectorAll('img')[2];
const image4 = document.querySelectorAll('img')[3];
const p1 = document.querySelectorAll('p')[0];
const p2 = document.querySelectorAll('p')[1];
//const 
function changeColor(event){
    event.target.style.backgroundColor = 'green';
    event.stopPropagation();
    setTimeout(() => {
		event.target.style.backgroundColor = "";
	}, 2000);
    
}

mainNav.addEventListener('mouseover',changeColor);

function aniHome(event){
    event.target.style.backgroundColor = 'gold';
    event.stopPropagation();
    setTimeout(() => {
		event.target.style.backgroundColor = "";
	}, 2000);
    
}
home.addEventListener('dblclick',aniHome)

p1.addEventListener("mouseover", ()=>{
    p1.style.display= "none";
    setTimeout(()=>{
        p1.style.display= "";
    },3000);
});
p2.addEventListener("click", ()=>{
    p2.style.border = "5px solid black";
    setTimeout(()=>{
        p2.style.border= "";
    },3000);
});

welcome.addEventListener("dblclick", () => {
	welcome.style.fontSize = "6rem";
    setTimeout(()=>{
        welcome.style.fontSize = "2rem";
    },3000);
})
image1.addEventListener("mouseover", () => {
	image1.style.filter = "blur(8px)";
    setTimeout(()=>{
        image1.style.filter = "";
    },3000);
})

image2.addEventListener("dblclick", () => {
	image2.style.filter = "blur(8px)";
    setTimeout(()=>{
        image2.style.filter = "";
    },3000);
})
image3.addEventListener("drag", () => {
	image3.style.filter = "blur(8px)";
    setTimeout(()=>{
        image3.style.filter = "";
    },3000);
})
image4.addEventListener("mouseover", () => {
	image4.style.filter = "grayscale(100%)";
    setTimeout(()=>{
        image4.style.filter = "";
    },3000);
})

footer.addEventListener("mouseover", () => {
	footer.style.fontSize = "6rem";
    setTimeout(()=>{
        footer.style.fontSize = "2rem";
    },3000);
})

