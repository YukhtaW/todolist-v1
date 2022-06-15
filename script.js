var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var textEmpty = document.getElementById("text-if");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	li.addEventListener("click", function () {
		let finished = li.classList.toggle("done");
		var buttonDel = document.createElement("button");
		buttonDel.classList.add("deleteButton");

		if (finished) {
			buttonDel.innerHTML = "Click to delete item";
			li.appendChild(buttonDel);

			buttonDel.addEventListener("click", function () {
				this.parentElement.remove();
			});
		} else {
			this.getElementsByClassName("deleteButton")[0].remove();
		}

	})

	if (ul.contains(li)) {
		console.log("2");
		textEmpty.remove();
		return;
	}


}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

