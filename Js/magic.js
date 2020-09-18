function callMe() {

	var uname = document.getElementById("name");
	var nam = uname.value;
	if (nam !== "kumar") {
		uname.style.backgroundColor = "red";
	} else {
		alert(" Welcome to inner Js code " + uname);
	}

}

function magicHappens() {
/*	var attr =
		document.getElementsByClassName("answer");
	for (var i = 0; i < attr.length; i++) {
		var eac = attr[i];
		eac.style.backgroundColor = "black";
	}*/
	
	$(".answer").css("background-color","aqua").css("color","black");
}

function asyn() {
	console.log("Main function called");
	setTimeout(function () {
		console.log("My inner function get called");
	}, 5000);
	console.log("I am leaving the main function");
}

function addData() {
	//step1. create a new html element
	var newData = document.createElement("h4");
	//step2. set some text to that element
	var soData = document.createTextNode("Hi All");
	newData.appendChild(soData);
	//step3. get the parent object
	var parentElement = document.getElementById("adding");
	//step4. append the element inside the parent
	parentElement.appendChild(newData);
}

function on(){
	//$(".box").hide();
	$(".box").fadeOut(6000, function() {
	alert("Fadeout over");	
	});
	
} 
function off(){
	//$(".box").show();
	$(".box").fadeIn(6000);
}
function dancing(){
	$(".answer").css("background-color","black")
	.toggle(2000, function() {
		startBlink();
	});
}
function startBlink(){
	$(".answer").css("background-color", "yellow")
	.css("background-color","black").toggle(2000, function(){
		startBlink();
	});
}