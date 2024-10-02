const taskInput = document.getElementById('taskInput');

const taskList = document.getElementById('taskList');

const addTaskBtn = document.getElementById('addTaskBtn');

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText !== '') {

        const taskItem = createTaskItem(taskText);

        taskList.appendChild(taskItem);

        taskInput.value = ''; // Clear the input after adding

    } else {

        alert('Please enter a task.');

    }

}

function createTaskItem(taskText) {

    const li = document.createElement('li');

    li.className = 'task-item';

    li.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;

    const deleteBtn = li.querySelector('.delete-btn');

    deleteBtn.addEventListener('click', () => li.remove());

    return li;

}

function setupEventListeners() {

    addTaskBtn.addEventListener('click', addTask);

}

setupEventListeners();