# GitHub Activity Fetcher

A command-line tool to fetch and display recent GitHub user activities.

## Description

This Node.js script retrieves a GitHub user's recent activities via the GitHub API and displays them in a human-readable format. It supports common event types like pushes, repository visibility changes, issue comments, and starring events.

## Prerequisites

- Node.js version 18 or higher (uses the native `fetch` API)
- A GitHub account (to query activities for)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/github_user_activity.git
cd github_activity_fetcher
Ensure all project files (github-activity.js and helper.js) are in the same directory.

Usage
Run the script with:

bash
Copy
node github-activity.js <username> [<1-100>]
<username>: GitHub username (required)

[<1-100>]: Number of activities to fetch (optional, defaults to 5)

Examples:
Fetch 5 most recent activities (default):

bash
Copy
node github-activity.js octocat
Fetch 20 most recent activities:

bash
Copy
node github-activity.js octocat 20
Features
Handles four event types with custom messages:

PushEvent: Displays number of commits pushed

PublicEvent: Shows repository visibility changes

IssueCommentEvent: Indicates issue comment actions

WatchEvent: Displays repository starring

Graceful error handling for:

Invalid arguments

API connection issues

Rate limiting (GitHub API restrictions)

Error Handling
Error Type	Message	Exit Code
Invalid arguments	Shows usage instructions	1
API connection failures	Network errors, invalid usernames, or GitHub API issues	2
Possible Improvements
Add support for more GitHub event types

Implement OAuth for authenticated requests

Add pagination for older activities

Create a graphical interface

Add unit/integration tests
```
