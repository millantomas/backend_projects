const username = process.argv[2];
const url = `https://api.github.com/users/${username}/events`;
if (!username) {
    console.log("Usage: node index.js <github-username>");
    return;
}

function formatEvent(event) {
    switch (event.type) {
        case "PushEvent":
            return `- Pushed commits to ${event.repo.name}`;

        case "IssuesEvent":
            return `- ${event.payload.action} an issue in ${event.repo.name}`;

        case "WatchEvent":
            return `- Starred ${event.repo.name}`;

        case "CreateEvent":
            return `- Created ${event.payload.ref_type} "${event.payload.ref}" in ${event.repo.name}`;

        case "DeleteEvent":
            return `- Deleted ${event.payload.ref_type} "${event.payload.ref}" from ${event.repo.name}`;

        case "PullRequestEvent":
            return `- ${event.payload.action} a pull request in ${event.repo.name}`;

        case "ForkEvent":
            return `- Forked ${event.repo.name}`;

        case "MemberEvent":
            return `- ${event.payload.action} ${event.payload.member.login} to ${event.repo.name}`;

        default:
            return `- ${event.type} on ${event.repo.name}`;
    }
}

async function getEvents(username) {
    const url = `https://api.github.com/users/${username}/events`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`GitHub API responded with ${response.status}`);
    }

    return response.json();
}

async function main() {
    if (!username) {
        console.log("Usage: node index.js <github-username>");
        return;
    }

    const events = await getEvents(username);

    events.forEach(event => {
        console.log(formatEvent(event));
    });
}

main().catch(console.error);