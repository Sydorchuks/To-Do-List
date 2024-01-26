const listController = document.getElementById("list-controller");
const inputBox = document.getElementById("input-box");

function addTask() {
	if(inputBox.value === ''){
		alert("You must write something")
	}
	else{
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listController.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = "";
	saveData();
}
listController.addEventListener("click", function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData();
	}
	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		saveData();
	}
},false);

function saveData(){
	localStorage.setItem("data", listController.innerHTML);
}
function showTask(){
	listController.innerHTML = localStorage.getItem("data");
}
showTask();