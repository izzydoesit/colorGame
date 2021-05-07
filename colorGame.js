var numSquares = 6;
var colors;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
};

function setupModeButtons(){
	for (var i = 0; i < modeBtns.length; i++){
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		})
	}
};

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
};

resetButton.addEventListener("click", function () {
	reset();
});

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.background = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
};

function changeColors(color) {
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background = color;
	}
};

function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
};

function generateRandomColors(num) {
	colorArray = [];
	for (var i = 0; i < num; i++) {
		colorArray.push(randomColor());
	}
	return colorArray;
};

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
};

