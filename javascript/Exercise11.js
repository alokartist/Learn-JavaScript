class Task {
    constructor(id, description, completed = false) {
      this.id = id;
      this.description = description;
      this.completed = completed;
    }
  
    markCompleted() {
      this.completed = true;
    }
  
    displayTask() {
      const status = this.completed ? 'Completed' : 'Pending';
      console.log(`Task ${this.id}: ${this.description} (${status})`);
    }
  }
  
  class TaskManager {
    constructor() {
      this.tasks = [];
    }
  
    addTask(description) {
      const taskId = this.tasks.length + 1;
      const newTask = new Task(taskId, description);
      this.tasks.push(newTask);
    }
  
    markTaskCompleted(taskId) {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.markCompleted();
        console.log(`Task ${taskId} marked as completed.`);
      } else {
        console.log(`Task ${taskId} not found.`);
      }
    }
  
    displayTasks() {
      console.log('Task List:');
      this.tasks.forEach(task => task.displayTask());
    }
  }
  
  // Example Usage:
  const taskManager = new TaskManager();
  
  taskManager.addTask('Create a JavaScript practice code');
  taskManager.addTask('Build a task management system');
  taskManager.addTask('Practice JavaScript regularly');
  
  taskManager.displayTasks();
  
  taskManager.markTaskCompleted(2);
  
  taskManager.displayTasks();
  