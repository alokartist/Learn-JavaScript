let tasks = [];

    function addTask() {
      const taskName = document.getElementById('taskName').value;
      if (taskName.trim() !== '') {
        tasks.push({ name: taskName, completed: false });
        displayTasks();
        document.getElementById('taskName').value = '';
      }
    }

    function toggleTask(index) {
      tasks[index].completed = !tasks[index].completed;
      displayTasks();
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      displayTasks();
    }

    function displayTasks() {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = '';

      tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task.name;
        
        if (task.completed) {
          listItem.classList.add('completed');
        }

        const toggleButton = document.createElement('button');
        toggleButton.textContent = task.completed ? 'Undo' : 'Complete';
        toggleButton.addEventListener('click', () => toggleTask(index));
        listItem.appendChild(toggleButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index));
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
      });
    }