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
            await viewTasks();
            break;

        case 3:
            console.clear();
            console.log("Caso 3");
            break;

        case 4:
            console.clear();
            console.log("Caso 4");
            break;

        case 5:
            console.clear();
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

async function viewTasks() {
    const tasks = await loadTasks();

    if (tasks.length === 0) {
        console.log("No hay tareas registradas.");
        return;
    }

    tasks.forEach(element => {
        console.log(`ID: ${element.id} - Tarea: ${element.description} Estado: [${element.status}]`);
    });
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