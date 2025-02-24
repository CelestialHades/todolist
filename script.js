// 1. Get DOM elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// 2. Array to store tasks
let tasks = [];

// 3. Function to add a task
function addTask() {
  // 4. Get the input value and trim it
  const taskText = taskInput.value.trim();
  
  // 5. Check if the input is empty
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }
  
  // 6. Add task to the array
  tasks.push(taskText);
  
  // 7. Create a new list item
  const li = document.createElement('li');
  li.textContent = taskText;
  
  // 8. Add a delete button to the list item
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = function() {
    // 9. Remove task from array and DOM
    tasks = tasks.filter(task => task !== taskText);
    taskList.removeChild(li);
  };
  
  // 10. Append delete button to list item, then list item to list
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  
  // 11. Clear the input
  taskInput.value = '';
}

// 12. Allow adding tasks with Enter key
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});