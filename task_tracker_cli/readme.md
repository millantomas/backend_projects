# Task Tracker CLI

A simple command-line task tracker built with **Node.js** using only native modules. This project was created as part of the **Task Tracker** challenge from roadmap.sh to practice backend fundamentals such as file handling, CLI argument parsing, and JSON data persistence.

## Features

* Add new tasks
* Update existing tasks
* Delete tasks
* Mark tasks as **done**
* Mark tasks as **in progress**
* List all tasks
* Filter tasks by status:

  * `todo`
  * `done`
  * `in-progress`

Each task contains:

* `id`
* `description`
* `status`
* `createdAt`
* `updatedAt`

Tasks are stored in a local `tasks.json` file.

---

## Technologies

* Node.js
* Native `fs/promises` module
* Native `process.argv` for CLI argument parsing

No external libraries or frameworks were used.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd task_tracker_cli
```

---

## Usage

### Add a task

```bash
node index.js add "Buy groceries"
```

### List all tasks

```bash
node index.js list
```

### List tasks by status

```bash
node index.js list todo

node index.js list done

node index.js list in-progress
```

### Update a task

```bash
node index.js update 1 "Buy groceries and cook dinner"
```

### Delete a task

```bash
node index.js delete 1
```

### Mark a task as done

```bash
node index.js mark-done 1
```

### Mark a task as in progress

```bash
node index.js mark-in-progress 1
```

---

## Project Structure

```text
.
├── index.js
├── tasks.json
└── README.md
```

---

## Learning Objectives

This project was built to practice:

* Working with the filesystem using `fs/promises`
* Reading and writing JSON files
* Building command-line applications
* Using asynchronous JavaScript with `async/await`
* Working with arrays (`find`, `filter`, `push`)
* Structuring small backend applications into reusable functions
* Basic error handling and input validation

---

## Challenge

This project is based on the **Task Tracker** project from roadmap.sh:

https://roadmap.sh/projects/task-tracker
