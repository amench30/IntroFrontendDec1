//Add an Event listner to the the total button

document.getElementById("sum").onclick = calculate;

function add(number1, number2) {
	
	//add together 2 numbers
	var sum = number1 + number2

    //return the sum of both numbers
	return sum;
};

function sub(number1, number2) {
	
	//add together 2 numbers
	var total = number1 - number2

    //return the sum of both numbers
	return total;
};

function calculate() {
	
	//Get the numbers from the input
	var num1 = parseInt(document.getElementById("number1").value);
	var num2 = parseInt(document.getElementById("number2").value); 

	//pass them to add
	var sum = add(parseInt(num1), parseInt(num2));

	//update the div with the sum
	document.getElementById("solution").textContent = sum;

}

// function my_full_name(first_name, last_name) {
	
// 	var full_name = first_name + last_name

// 	return full_name;

// };

