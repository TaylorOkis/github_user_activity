# GitHub Activity Fetcher

A command-line tool to fetch and display recent GitHub user activities.

Project idea from: https://roadmap.sh/projects/github-user-activity

## Description

This Node.js script retrieves a GitHub user's recent activities via the GitHub API and displays them in a human-readable format. It supports common event types such as:

- **PushEvent:** Displays the number of commits pushed.
- **PublicEvent:** Shows repository visibility changes.
- **IssueCommentEvent:** Indicates issue comment actions.
- **WatchEvent:** Displays repository starring events.

The tool also handles error scenarios including invalid arguments, API connection issues, and GitHub API rate limiting.

## Prerequisites

- **Node.js** version **18** or higher (this version includes the native `fetch` API)
- A GitHub account (to query activities for)

## Installation

Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/yourusername/github_user_activity.git
cd github_user_activity
```

Ensure all project files (e.g., `github-activity.js` and `helper.js`) are in the same directory.

## Usage

Run the script using the following command:

```bash
node github-activity.js <username> [<1-100>]
```

- `<username>`: GitHub username (required)
- `[<1-100>]`: Number of activities to fetch (optional, defaults to **5**)

### Examples

**Fetch 5 most recent activities (default):**

```bash
node github-activity.js octocat
```

**Fetch 20 most recent activities:**

```bash
node github-activity.js octocat 20
```

## Features

- **Event Handling:**
  - **PushEvent:** Displays the number of commits pushed.
  - **PublicEvent:** Shows changes in repository visibility.
  - **IssueCommentEvent:** Indicates when a user comments on an issue.
  - **WatchEvent:** Displays repository starring activity.
- **Graceful Error Handling:**
  - **Invalid Arguments:** Shows usage instructions.
  - **API Connection Issues:** Handles network errors, invalid usernames, or GitHub API problems.
  - **Rate Limiting:** Recognizes GitHub API restrictions and handles them appropriately.

## Error Handling

| Error Type                  | Message                                                         | Exit Code |
| --------------------------- | --------------------------------------------------------------- | --------- |
| **Invalid arguments**       | Shows usage instructions                                        | `1`       |
| **API connection failures** | Handles network errors, invalid usernames, or GitHub API issues | `2`       |

## Possible Improvements

- Add support for additional GitHub event types.
- Implement OAuth for authenticated requests.
- Add pagination to fetch older activities.
- Create a graphical user interface (GUI).
- Add unit and integration tests.
