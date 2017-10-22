
// var button = document.getElementById("button");
// body = document.body;
// body.onwheel = function (e) {
// 	e.preventDefault(); 

// }
// button.onclick = function (e) {
// 	console.log(e.currentTarget);
// 	console.log(e.type);
// 	console.log(e.clientX);
// 	console.log(e.clientY);
// 	e.stopPropagation();
// }
// body.onclick = function () {
// 	alert ("Hello");
// }
// body.oncontextmenu = function (e) {
// 	 e.preventDefault();
// }

var submit = document.getElementById("submit");
submit.onclick = function (e) {
	e.preventDefault();
	var input = document.getElementById("input");
	if (input.value > 100) {
		input.style.border = "3px solid red";
		input.value = "Too much"
	}
	if (input.value == "") {
		input.value = "Required!!!";
		input.style.border = "3px solid red";
	}
	
}

window.onbeforeunload = function () {
		return "Do you";
}

var copy = document.getElementById("copy");
copy.onselectstart = function (e) {
	return false
}
// var body = document.body;

// body.onselectstart = function (e) {
// 	return false
// }

// var all = document.querySelectorAll("*");
// for (var i = 0; i<all.length;i++) {
// 	all[i].onselectstart = function () {
// 		return false
// 	}
// }

window.onload  = function () {
	document.querySelector(".spinner").style.display = "none";
}

var input = document.getElementById("input");
	input.onkeypress = function (e) {
		// e.preventDefault();
		if (!(e.charCode >= 48 && e.charCode <= 57) || String(e.target.value).length > 5){
			e.preventDefault()
		}
	}
	input.onfocus = function (e) {
		this.style.border = "3px solid blue"
	}

// var directions = ["Lviv", "Rivne", "Ternopil", "Lutsk"];
// var div = document.createElement("div");
// div.innerHTML = "Directions (" +directions.length+")";
// div.setAttribute("id","directions");

// var content=document.querySelector(".content:nth-child(2)");
// content.appendChild(div);

// var ul = document.createElement("ul");
// 	for (var i=0; i<directions.length; i++) {
// 		var li = document.createElement("li");
// 		li.innerHTML = "<em>"+directions[i]+"</em>";
// 		ul.appendChild(li); 
// 	}
// 	ul.classList.add("hide");
// 	content.appendChild(ul);
// div.onclick = function () {
	
// 	ul.classList.toggle("hide")

// }
// ul.onclick = function () {
// 	this.classList.toggle("hide")
// }

