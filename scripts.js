const normalCalculator = document.getElementById("normal-calculator");
const scientificCalculator = document.getElementById("scientific-calculator");
const normalTab = document.getElementById("normal-calculator-tab");
const scientificTab = document.getElementById("scientific-calculator-tab");
const equalSign = document.getElementById('equal-sign');
const calculatorInput = document.getElementById("calculator-input");
const changeTheme = document.getElementById("theme-toggler");

// Function to open normal calculator and close scientific calculator
function normalTabOpen() {
	normalCalculator.classList.remove('hidden')
	normalTab.classList.remove('tabs-inactive')
	normalTab.classList.add('tabs-active')

	scientificCalculator.classList.add('hidden')
	scientificTab.classList.remove('tabs-active')
	scientificTab.classList.add('tabs-inactive')
};

// Function to open scientific calculator and close normal calculator
function scientificTabOpen() {
	scientificCalculator.classList.remove('hidden')
	scientificTab.classList.remove('tabs-inactive')
	scientificTab.classList.add('tabs-active')

	normalCalculator.classList.add('hidden')
	normalTab.classList.remove('tabs-active')
	normalTab.classList.add('tabs-inactive')
};


scientificTabOpen()

var backgrounds = Array("0016.jpg" ,"0048.jpg", "0139.jpg", "0199.jpg", "0254.jpg", "0255.jpg", "Cool-Background-For-Laptop.jpg", "minimalist-desktop-5.jpg", "wallpapersden.com_macos-12-monterey-digital_1366x768.jpg");

function randomBackground() {
	let backg = backgrounds[Math.floor(Math.random()*backgrounds.length)];
	let finalString = "url(images/" + backg + ")";
	console.log("Current Background Image: " + backg);
	document.body.style.backgroundPosition = "center";
	$(document).ready(function(){
		$(".calculator-card").fadeIn(1000);
	});
	document.body.style.background = finalString;
};

randomBackground()

changeTheme.onclick = function() {
	randomBackground()
};

normalTab.onclick = function() {
	normalTabOpen()
};

scientificTab.onclick = function() {
	scientificTabOpen()
};

$(document).keypress(function(event){
	console.log(event.which);
	//0
	if(event.which == 48){
		string += 0;
		$("#calc").text(string);
	}
});




/* function add(num1, num2) {
	return num1 + num2;
};

function subt(num1, num2) {
	return num1 - num2;
};

function mul(num1, num2) {
	return num1 * num2;
};

function divide(num1, num2) {
	return num1 / num2;
}


equalSign.onclick = function() {
	calculatorInput.value += calculatorButtons.textContent;
	let inputQuery = calculatorInput.value;
	if inputQuery.contains("+") {
		let seperated = inputQuery.split(" ");
		console.log(seperated);
	}
}; */