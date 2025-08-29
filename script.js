function newTask(){
    const taskInput = document.getElementById("nouvelleTache");
    const taskList = document.getElementById("listeTaches");
    const task = taskInput.value.trim();

    if(task !== '') {
        li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = '';

        taskList.classList.add('active-list')
    }
}