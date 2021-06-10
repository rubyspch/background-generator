var h3 = document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector(".random");

function setGradientColors(){
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`; //sets css to include inputs from color1 and color2
	btn.style.background = `linear-gradient(to right, ${color2.value}, ${color1.value})`;
	h3.textContent = `${body.style.background};`; //include rgb of chosen colors
}

function hexGenerate(){ //generates a random hex code
	var str = "0123456789ABCDEF";
	let hex = "#"
	for (let i=0; i<6;i++){
		var index = Math.floor(Math.random() * 16);
		hex+= str[index];
	}
	return hex;
}

function randomChange(){ //gives color classes a random hex value and calls background change function
	color1.value = hexGenerate();
	color2.value = hexGenerate();
	setGradientColors();
}

color1.addEventListener("input", setGradientColors);
color2.addEventListener("input", setGradientColors);
window.addEventListener("load", setGradientColors);
btn.addEventListener("click", randomChange);