/* 
	Lakeland Reeds Bed & Breakfast style sheet 
	Filename: script.js

	Author:   Lauren White
	Date:     10/12/22
*/
 
 /* create variables */
 var highlight = document.querySelector(".review-list li:first-of-type");
 var table = document.querySelector(".review-list li:nth-of-type(2)");
 var border = document.querySelector(".review-list li:nth-of-type(3)");
 var fontSize = document.querySelector(".review-list li:nth-of-type(4)");
 var wordArt = document.querySelector(".review-list li:nth-of-type(5)");
 var shapes = document.querySelector(".review-list li:last-of-type");
 var figureImage = document.querySelector(".review-image img");
 var figureCaption = document.querySelector(".review-image figcaption");
 
 /* change image */
 function showHighlight() {
	figureImage.src = ("images/highlight.png");
	figureImage.alt = "Highlight Button";
	figureCaption.textContent = "Highlight";
 }
 function showTable() {
	figureImage.src = ("images/table.png");
	figureImage.alt = "Table Button";
	figureCaption.textContent = "Table";
 }
 function showBorder() {
	figureImage.src = ("images/border.png");
	figureImage.alt = "Border Button";
	figureCaption.textContent = "Border";
 }
 function showFontSize() {
	figureImage.src = ("images/font-size.png");
	figureImage.alt = "Font Size Button";
	figureCaption.textContent = "Font Size";
 }
 function showWordArt() {
	figureImage.src = ("images/WordArt.gif");
	figureImage.alt = "WordArt Button";
	figureCaption.textContent = "WordArt";
 }
 function showShapes() {
	figureImage.src = ("images/shapes.gif");
	figureImage.alt = "Shapes Button";
	figureCaption.textContent = "Shapes";
 }
 
 /* event listeners for list item clicks */
 highlight.addEventListener("click", showHighlight, false);
 table.addEventListener("click", showTable, false);
 border.addEventListener("click", showBorder, false);
 fontSize.addEventListener("click", showFontSize, false);
 wordArt.addEventListener("click", showWordArt, false);
 shapes.addEventListener("click", showShapes, false);
 



