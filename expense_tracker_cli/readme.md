# GitHub Activity CLI

A simple command-line application built with **Node.js** that fetches a GitHub user's recent public activity using the GitHub REST API and displays it in a human-readable format.

This project was built as part of the **GitHub User Activity** challenge from roadmap.sh to practice working with APIs, asynchronous JavaScript, JSON data, and building CLI applications without external dependencies.

## Features

* Fetches the recent public activity of any GitHub user.
* Displays different event types in a readable format.
* Supports:

  * Push events
  * Issues
  * Pull requests
  * Repository creation
  * Repository deletion
  * Forks
  * Stars
  * Member events
* Handles invalid usernames and API errors gracefully.
* Uses only Node.js built-in features (no external libraries).

## Technologies

* Node.js
* JavaScript (ES2023+)
* GitHub REST API
* Fetch API

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd github_activity_cli
```

No additional dependencies are required.

## Usage

Run the application by providing a GitHub username:

```bash
node index.js <github-username>
```

Example:

```bash
node index.js millantomas
```

Example output:

```text
- Pushed commits to millantomas/backend_projects
- Created branch "main" in millantomas/backend_projects
- Starred some-user/example-repository
- Opened a pull request in another-user/project
```

## Project Structure

```text
.
├── index.js
└── README.md
```

## What I Practiced

During this project I worked on:

* Consuming REST APIs using `fetch()`.
* Using `async` / `await`.
* Parsing JSON responses.
* Working with command-line arguments using `process.argv`.
* Formatting API responses into readable output.
* Basic error handling for failed requests and invalid users.
* Organizing code into small, reusable functions.

## Possible Improvements

Some ideas for future versions:

* Filter activities by event type.
* Display timestamps for each event.
* Add colors to terminal output.
* Cache API responses to reduce requests.
* Support additional GitHub API endpoints.
* Improve output formatting with tables or grouped events.

## Acknowledgements

This project is based on the **GitHub User Activity** challenge from roadmap.sh.

https://roadmap.sh/projects/github-user-activity
