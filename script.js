document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
  
    addTaskButton.addEventListener('click', () => {
      const taskDescription = newTaskInput.value.trim();
      if (taskDescription) {
        addTask(taskDescription);
        newTaskInput.value = '';
      }
    });
  
    function addTask(description) {
      const taskItem = document.createElement('li');
      taskItem.textContent = description;
  
      const completeButton = document.createElement('button');
      completeButton.textContent = '✔';
      completeButton.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
      });
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '✖';
      deleteButton.addEventListener('click', () => {
        taskItem.remove();
      });
  
      taskItem.appendChild(completeButton);
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
    }
  });
  