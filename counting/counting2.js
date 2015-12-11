document.getElementById("add").onclick = inventory;
// document.getElementById("removeTop").onclick = remove_top;
document.getElementById("removeBottom").onclick = remove_bottom;
// document.getElementById("addTop").onclick = add_top;

var products = [];



function inventory() {
	var new_product = document.getElementById("new_product").value;
	
	products.push(new_product);

	displayList();

	
}


function displayList () {
	// Loop through products

	var new_HTML = "";

	for (var i=0; i < products.length; i++) {
	

	new_HTML += "<li>" + products[i] + "</li>"; 
	
	}

	

	document.getElementById("onScreen").innerHTML = new_HTML;
}


function remove_top() {

	products.shift();
	displayList();	

	
}

function remove_bottom() {

	products.pop();
	displayList();	

	
}

function add_top() {
	

	products.unshift(document.getElementById("new_product").value);
	displayList();	

	
}

