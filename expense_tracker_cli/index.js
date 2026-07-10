const fs = require("node:fs/promises");
const process = require('process');

const args = process.argv;

async function main() {
    const parsed = parseArgs(process.argv);

    switch (parsed.command) {
        case "add":
            await addExpense(
                parsed.options.description,
                Number(parsed.options.amount)
            );
            break;

        case "list":
            await listExpenses();
            break;

        case "delete":
            await deleteExpense(Number(parsed.options.id));
            break;

        default:
            console.log("Invalid command");
    }
}

main().catch(console.error);

function parseArgs(args) {
    const options = {};

    for (let i = 3; i < args.length; i += 2) {
        const key = args[i].replace("--", "");
        const value = args[i + 1];

        options[key] = value;
    }

    return {
        command: args[2],
        options
    };
}

async function saveExpense(expense) {
    const text = JSON.stringify(expense, null, 2);
    await fs.writeFile("expenses.json", text);
}

function createExpense(id, description, amount) {
    const timeNow = new Date().toISOString();

    return {
        id,
        description: description,
        amount: amount,
        createdAt: timeNow
    };
}

async function addExpense(description, amount) {
    const expenses = await loadExpenses();
    const newId = getNextId(expenses);

    const newExpense = createExpense(newId, description, amount);
    expenses.push(newExpense);
    console.log(`Expense added successfully (ID: ${newId})`);
    await saveExpense(expenses);
}

function getNextId(expenses) {
    if (expenses.length === 0) {
        return 1;
    }

    return expenses[expenses.length - 1].id + 1;
}

async function loadExpenses() {
    try {
        const content = await fs.readFile("expenses.json", "utf-8");
        return JSON.parse(content);
    } catch {
        return [];
    }
}