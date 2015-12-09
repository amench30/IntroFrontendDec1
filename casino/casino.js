document.getElementById("roll").onclick = roll;



function roll() {
	var userNumber = document.getElementById("num").value;

	var img = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png']
	
	for (var i=0; i <userNumber; i++) {
		// generate a random number between 1 and 6
		var side = 4;

		// the generated number would relate to the dice img
		document.getElementById("onScreen").innerHTML += "<img src='" + img[side] + "' />";

}



}
