//Add an Event listner to the the total button

document.getElementById("sum").onclick = calculate;

function add(number1, number2) {
	
	//add together 2 numbers
	var sum = number1 + number2;

    //return the sum of both numbers
	return sum;
};


function subtract(number1, number2) {
	//Subtract the 2 passed numbers
	var total = number1 - number2;

	//return the diffrence of the passed numbers
	return total; 
}

function multiple(number1, number2) {
    //subtract the two passed numbers
	var total = number1 - number2;

	//return the diffrence of the passed numbers
	return total;
}

function divide(number1, number2) {
	return number1 / number2;
}

function average(number1, number2) {
	var sum = add(number1, number2);

	var average = divide(sum, 2);
	return average;
}

function calculate() {
	
	//Get the numbers from the input
	var num1 = parseInt(document.getElementById("number1").value);
	var num2 = parseInt(document.getElementById("number2").value); 

	//pass them to add
	var sum = add(num1, num2);
	sub = subtract(num1, num2);
	multi = multiple(num1, num2);
	div = divide(num1, num2);

	//update the div with the sum
	var new_HTML = "<h3>sum:</h3>" + sum;
	new_HTML = "<h3>difference:</h3>" + sub;
	new_HTML = "<h3>multiplied:</h3>" + multi;
	new_HTML = "<h3>division:</h3>" + div;

	document.getElementById("solution").textContent = sum;

}
