function addTask() {
    const taskInput = document.getElementById('task-input');
    const tasksList = document.getElementById('tasks');

    if (taskInput.value.trim() !== '') {
      const newTask = document.createElement('li');
      newTask.className = 'task';
      newTask.innerHTML = `
        <span>${taskInput.value}</span>
        <button onclick="removeTask(this)">Remove</button>
      `;

      tasksList.appendChild(newTask);
      taskInput.value = '';
    }
  }

  function removeTask(button) {
    const taskToRemove = button.parentNode;
    taskToRemove.parentNode.removeChild(taskToRemove);
  }