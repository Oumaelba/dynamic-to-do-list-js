document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage on page load
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(taskText => addTask(taskText));
    }

    // Save the current tasks to Local Storage
    function saveTasks() {
        const tasks = Array.from(taskList.children).map(task => task.textContent.replace("Remove", "").trim());
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Function to add a new task
    function addTask(taskText) {
        if (!taskText) {
            taskText = taskInput.value.trim();
        }
        
        if (taskText === "") {
            alert("Please enter a task");
            return;
        } else {
            // Create a new list item and set its text content
            const taskElement = document.createElement("li");
            taskElement.textContent = taskText;

            // Create the remove button
            const rmvBtn = document.createElement('button');
            rmvBtn.textContent = "Remove";
            rmvBtn.classList.add("remove-btn");

            // Add event listener to remove the task item
            rmvBtn.addEventListener('click', function() {
                taskElement.remove();
                saveTasks(); // Update Local Storage after removal
            });

            // Append the remove button to the list item
            taskElement.appendChild(rmvBtn);

            // Append the task item to the task list
            taskList.appendChild(taskElement);

            // Clear the input field and save tasks to Local Storage
            taskInput.value = "";
            saveTasks();
        }
    }

    // Attach event listener to the Add Task button
    addButton.addEventListener('click', function() {
        addTask();
    });

    // Attach event listener to allow adding tasks by pressing Enter
    taskInput.addEventListener('keypress', event => {
        if (event.key === "Enter") {
            addTask();
        }
    });
})
