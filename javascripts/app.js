// Set up base class DIV
function Div(name){
	this.name = name;
	this.element = null;
}

Div.prototype.draw = function(){
	console.log('draw works');
	this.element = $("<div>Div</div>");
	$("p").append(this.element);
	$(this.element).click(this.click);
}


// Set up DIV subclass BLUE
function BlueDiv(color){} // function creates class definition
BlueDiv.prototype = new Div();


// Set up DIV subclass RED
function RedDiv(color){} 
RedDiv.prototype = new Div();


// Click handler
BlueDiv.prototype.click = function(){
	// console.log(this.color);
	$(this).css("color", "#0000FF");
	console.log('blue click');
};

RedDiv.prototype.click = function(){
	// console.log(this.color);
	$(this).css("color", "#FF0000");
	console.log('red click');
};


// ----------------------------------------------------
// Draw classes
$(document).ready(function(){
	var color = new BlueDiv();
	color.draw();

	var color = new RedDiv();
	color.draw();
});







