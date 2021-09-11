const field = document.querySelector('.field');
console.log(field.value);

function createTask(textContent) {
	var task = document.createElement("div");
	task.innerHTML = textContent;
	return task;
}

function addTask(value) {
	if (value) {
		var div = createTask(value);
		console.log(div);
		var list = document.querySelector('.list');
		list.appendChild(div);
	}
}

const add = document.querySelector('.add');
add.addEventListener('click', function (event) {
	addTask(field.value);
	field.value = "";
});