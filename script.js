function newTask(){
    const taskInput = document.getElementById("nouvelleTache");
    const taskList = document.getElementById("listeTaches");
    const task = taskInput.value.trim();

    if(!taskInput.value) {
        alert("Veillez entrer une tâche.");
        return;
    }

    if(task !== '') {
        li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = '';

        taskList.classList.add('active-list')
    }
}
function removeTask(){
    
    if(taskList.children.length === 0){
        taskList.chassList.remove('active-list');
    }
}