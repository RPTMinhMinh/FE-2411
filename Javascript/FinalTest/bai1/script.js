let listTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const $taskInput = document.getElementById("taskInput");
const $taskList = document.getElementById("taskList");
const $btnDeleteAll = document.getElementById("deleteAll");
const $btnAddTask = document.getElementById("addTask");

const $tabs = document.querySelectorAll(".tabs button");

function renderTasks(data) {
    if (data === undefined) {
        data = listTasks;
    }
    let htmlTasks = "";

    for (let i = 0; i < data.length; i++) {
        const task = data[i];
        htmlTasks += `
                    <tr>
                    <td>
                        <input type="checkbox" ${task.completed ? "checked" : ""} data-index="${i}">
                    </td>
                    <td>${task.text}</td>
                    <td>
                        <button class="btn btn btn-danger" data-index="${i}">Xóa</button>
                    </td>
                </tr>
        `;
    }
    $taskList.innerHTML = htmlTasks;
    $btnDeleteAll.style.display = listTasks.length > 0 ? "block" : "none";
    $btnDeleteAll.innerText = `${listTasks.length} delete all`;
}

function resetInput() {
    $taskInput.value = "";
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(listTasks));
}

function createTask() {
    const taskText = $taskInput.value.trim();
    if (taskText) {
        listTasks.push({ 
            text: taskText, 
            completed: false 
        });

        resetInput();
        renderTasks();
        saveTasks();
    }
}
$btnAddTask.onclick = createTask;

function deleteTask(index) {
    listTasks.splice(index, 1);
    renderTasks();
    saveTasks();
}

function deleteAllTasks() {
    listTasks = [];
    renderTasks();
    saveTasks();
}

function taskCompleted(index, completed) {
    listTasks[index].completed = completed;
    saveTasks();
    renderTasks();

}

function filterTasks(filter) {
    let filteredTasks = [];


    for (let i = 0; i < listTasks.length; i++) {
        if (filter === "completed" && listTasks[i].completed) {
            filteredTasks.push(listTasks[i]);
        } else if (filter === "active" && !listTasks[i].completed) {
            filteredTasks.push(listTasks[i]);
        } else if (filter === "all") {
            filteredTasks = listTasks;
            break;
        }
    }

    renderTasks(filteredTasks);
}



$taskList.onclick = (e) => {
    const index = e.target.getAttribute("data-index");
    if (e.target.tagName === "INPUT") {
        taskCompleted(index, e.target.checked);
    } else if (e.target.classList.contains("btn-danger")) {
        deleteTask(index);
    }

};


$btnDeleteAll.onclick = deleteAllTasks;


for (let i = 0; i < $tabs.length; i++) {
    $tabs[i].onclick = (e) => {
        for (let j = 0; j < $tabs.length; j++) {
            $tabs[j].classList.remove("active");
        }

        e.target.classList.add("active");
        filterTasks(e.target.id);
    };
}

renderTasks();
