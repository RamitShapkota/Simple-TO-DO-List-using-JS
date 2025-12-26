const title = document.querySelector("#title");
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const darkBtn = document.querySelector("#darkBtn");
const taskList = document.querySelector("#taskList");

//Array to store tasks
let tasks = [];

//darkmode toggle

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

//Add task function
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    //validation
    if (taskText === "") {
        title.innerText = "Please enter a task!";
        title.classList.add("error");
        setTimeout(() => {
            title.innerText = "Mini Task Manager";
            title.classList.remove("error");
        }, 2000);
        return;
    }

    //Add task to arraya
    const task = {
        text: taskText,
        completed: false,
        date: "untill next friday"
    };
    tasks.push(task);

    //clear input
    taskInput.value = "";
    renderTasks();
});

//Render Task function 
function renderTasks() {
    taskList.innerHTML = "";//clear previous tasks
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerText = task.text;

        //Apply completed style
        if (task.completed) {
            li.classList.add("completed");
        }

        //Click to toggle completed
        li.addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed; //true->false and vice varsa
            renderTasks(); //re-render
        });

        //double click to delete
        li.addEventListener("dblclick", () => {
            tasks.splice(index, 1);//
            renderTasks();//re-render
        });
        taskList.appendChild(li)
    });
}


    //Enter key support
    taskInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            addBtn.click(); //enable enter
        }
    })


