document.addEventListener("DOMContentLoaded", function() {

	const addButton = document.getElementById("add-task-btn");
	const taskInput  = document.getElementById("task-input");
	const taskList = document.getElementById("task-list");

	function addTask(){
		let taskText = taskInput.value.trim();
		
		if (taskText === "" || taskList == null){
			alert("Please enter a task");
			return;
		}else{
			 // Create a new list item and set its text content
			const taskElement = document.createElement("li");
			taskElement.textContent = taskText;

			// Create the remove button
			const rmvBtn = document.createElement('button');
			rmvBtn.textContent = "Remove";
			rmvBtn.className = "remove-btn";

			// Add event listener to remove the task item
			rmvBtn.addEventListener('click', function(){
				taskElement.remove();
			})

			// Append the remove button to the list item
			taskElement.appendChild(rmvBtn);

			// Append the task item to the task list
			taskList.appendChild(taskElement);

			// Clear the input field
			taskInput.value = "";
			}

		// Attach event listener to the Add Task button
		addButton.addEventListener('click', addTask);

		 // Attach event listener to allow adding tasks by pressing Enter
		taskInput.addEventListener('keypress', event => {
			if (event.key === "Enter"){
				addTask();
			}
		})
		}
	})