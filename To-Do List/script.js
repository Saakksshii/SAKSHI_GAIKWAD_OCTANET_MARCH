function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = "";

        var doneButton = document.createElement("button");
        doneButton.textContent = "Done";
        doneButton.className = "doneButton";
        doneButton.onclick = function() {
            li.style.textDecoration = "line-through";
        };

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(doneButton);
        li.appendChild(deleteButton);
    } else {
        alert("Please enter a task!");
    }
}

// Add task when Enter key is pressed
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
