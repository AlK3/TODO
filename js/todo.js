const taskform = document.forms.taskform;
const tasktext = taskform.elements.taskstext;

function createTask(textContent) {
	const task = document.createElement('div');
	task.className = 'task';
	task.innerHTML = textContent + '<input type="checkbox" name="taskcheck" onchange="taskReady(this)">';
	return task;
}

function addTask() {
	event.preventDefault();
	if (tasktext.value.trim()) {
		const task = createTask(tasktext.value);
		console.log(task);
		const list = document.querySelector('.list');
		list.appendChild(task);
		tasktext.value = "";
	}
}

function taskReady(taskCheck) {
	console.log(taskCheck);
	taskCheck.checked ? taskCheck.parentNode.classList.add('done')
		: taskCheck.parentNode.classList.remove('done');
}


