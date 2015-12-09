document.getElementById("count").onclick = count;



function count() {
	var userNumber = document.getElementById("user_num").value;
	
	for (var i=0; i <userNumber; i++) {
	console.log(i);

document.getElementById("onScreen").innerHTML += i;

}



}

