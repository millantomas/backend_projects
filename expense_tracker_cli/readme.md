# Expense Tracker CLI

A simple command-line expense tracker built with **Node.js** to record, manage, and summarize personal expenses.

This project was built as part of the **Expense Tracker** challenge from roadmap.sh to practice working with command-line applications, file persistence, argument parsing, and application logic without relying on external libraries.

## Features

* Add new expenses.
* Update existing expenses.
* Delete expenses.
* List all recorded expenses.
* Display the total amount of all expenses.
* Display a monthly summary of expenses.
* Store data locally in a JSON file.
* Handle invalid input and common edge cases.

## Technologies

* Node.js
* JavaScript (ES2023+)
* File System (`fs/promises`)
* Command Line Interface (CLI)

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd expense_tracker_cli
```

No additional dependencies are required.

## Usage

### Add an expense

```bash
node index.js add --description "Lunch" --amount 20
```

### Update an expense

```bash
node index.js update --id 1 --description "Lunch with coworkers" --amount 25
```

### Delete an expense

```bash
node index.js delete --id 1
```

### List all expenses

```bash
node index.js list
```

### Display total expenses

```bash
node index.js summary
```

### Display monthly summary

```bash
node index.js summary --month 8
```

## Example Output

```text
Expense added successfully (ID: 1)

ID  Date        Description   Amount
1   2026-07-10  Lunch         $20

Total expenses: $20
```

## Project Structure

```text
.
├── expenses.json
├── index.js
└── README.md
```

## What I Practiced

During this project I worked on:

* Parsing command-line arguments.
* Building a CLI application.
* Reading and writing JSON files.
* Working with asynchronous file operations.
* Validating user input.
* Managing collections of data.
* Separating application logic into reusable functions.
* Handling common edge cases and errors.

## Future Improvements

Some ideas for future versions include:

* Expense categories.
* Monthly budgets.
* CSV export.
* Sorting by date or amount.
* Search by description.
* Colored terminal output.
* Better table formatting.

## Acknowledgements

This project is based on the **Expense Tracker** challenge from roadmap.sh.

https://roadmap.sh/projects/expense-tracker
