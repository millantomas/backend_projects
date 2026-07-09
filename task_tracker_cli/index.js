const fs = require("node:fs/promises");
const process = require('process');

async function program() {
    const args = process.argv;
    switch (args[2]) {
        case "add":
            console.clear();
            await addTask(args[3]);
            break;

        case "list":
            console.clear();
            await viewTasks(args[3]);
            break;
        case "update":
            console.clear();
            await updateTask(
                Number(args[3]),
                args[4]
            );
            break;
        case "delete":
            console.clear();
            await deleteTask(Number(args[3]));
            break;
        case "mark-done":
        case "mark-in-progress":
            console.clear();
            await updateStatus(Number(args[3]), args[2]);
            break;
    }
}


async function addTask(description) {
    const tasks = await loadTasks();
    const newId = getNextId(tasks);


    const newTask = createTask(newId, description);
    tasks.push(newTask);
    console.log("Tarea agregada con exito, ID:", newId);
    await saveTasks(tasks);
}

async function viewTasks(status) {
    const tasks = await loadTasks();

    if (tasks.length === 0) {
        console.log("No hay tareas registradas.");
        return;
    }

    if (status) {
        const task = tasks.filter(task => task.status === status);
        task.forEach(element => {
            console.log(`ID: ${element.id} - Tarea: ${element.description} Estado: [${element.status}]`);
        })
        return;
    }
    tasks.forEach(element => {
        console.log(`ID: ${element.id} - Tarea: ${element.description} Estado: [${element.status}]`);
    })
}

async function loadTasks() {
    try {
        const content = await fs.readFile("tasks.json", "utf-8");
        return JSON.parse(content);
    } catch {
        return [];
    }
}

async function saveTasks(tasks) {
    const text = JSON.stringify(tasks, null, 2);
    await fs.writeFile("tasks.json", text);
}

async function updateTask(id, newDescription) {
    const tasks = await loadTasks();
    const task = tasks.find(task => task.id === id);
    if (!task) {
        console.log("No existe esa tarea");
        return;
    }
    task.description = newDescription;
    task.updatedAt = new Date().toISOString();
    await saveTasks(tasks);
}

async function deleteTask(id) {
    const tasks = await loadTasks();

    const filteredTasks = tasks.filter(task => task.id !== id);
    if (filteredTasks.length === tasks.length) {
        console.log("No existe una tarea con ese ID.");
        return;
    }
    console.log("Tarea eliminada con exito!");
    await saveTasks(filteredTasks);
}

async function updateStatus(id, status) {
    const tasks = await loadTasks();
    const newStatus = status.replace("mark-", "");
    const task = tasks.find(task => task.id === id);
    if (!task) {
        console.log("No existe esa tarea");
        return;
    }

    task.status = newStatus;
    task.updatedAt = new Date().toISOString();
    console.log(`La tarea ${task.description} se marco como ${newStatus}`);
    await saveTasks(tasks);
}





function createTask(id, description) {
    const timeNow = new Date().toISOString();

    return {
        id,
        description: description,
        status: "todo",
        createdAt: timeNow,
        updatedAt: timeNow
    };
}

function getNextId(tasks) {
    if (tasks.length === 0) {
        return 1;
    }

    return tasks[tasks.length - 1].id + 1;
}



program();