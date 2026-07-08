const readline = require("node:readline");
const fs = require("node:fs/promises");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



async function program() {

    var opcion = 0;
    do {
        console.log("Menu");
        console.log("1. Agregar una tarea");
        console.log("2. Ver todas las tareas");
        console.log("5. Salir del programa");

        opcion = parseInt(await inputText("Elegí una opción: "));

        switch (opcion) {
            case 1:
                console.clear();
                await addTask();
                break;

            case 2:
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
                rl.close();
                break;
        }
    } while (opcion != 5);
}



async function addTask() {
    const description = await inputText("Agregue la descripcion de la tarea: ");
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

function inputText(text) {
    return new Promise((resolve) => {
        rl.question(text, (response) => {
            resolve(response);
        });
    });
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