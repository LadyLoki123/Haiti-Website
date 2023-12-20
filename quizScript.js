/** quiz **/
/*create variables*/
var quizForm = document.querySelector(".quiz-form");

var part1Input = document.querySelector("#part1input");
var part1Correct = document.querySelector("#part1correct");
var part2Input = document.querySelector("#part2input");
var part2Correct = document.querySelector("#part2correct");
var part3Input = document.querySelector("#part3input");
var part3Correct = document.querySelector("#part3correct");
var part4Input = document.querySelector("#part4input");
var part4Correct = document.querySelector("#part4correct");
var part5Input = document.querySelector("#part5input");
var part5Correct = document.querySelector("#part5correct");
var part6Input = document.querySelector("#part6input");
var part6Correct = document.querySelector("#part6correct");

/* check answer correctness */
function checkQuiz () {
	if (part1Input.value === "Font Size") {
		
		part1Correct.textContent = "Correct!";
	}
	if (part2Input.value === "WordArt") {
		part2Correct.textContent = "Correct!";
	}
	if (part3Input.value === "Shapes") {
		part3Correct.textContent = "Correct!";
	}
	if (part4Input.value === "Highlight") {
		part4Correct.textContent = "Correct!";
	}
	if (part5Input.value === "Table") {
		part5Correct.textContent = "Correct!";
	}
	if (part6Input.value === "Border") {
		part6Correct.textContent = "Correct!";
	}
}

/* event listener for form changes */
quizForm.addEventListener("change", checkQuiz, false);