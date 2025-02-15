import getActivity from "./helper.js";

const args = process.argv.slice(2);

if (args.length > 2 || args.length < 1) {
  console.log("Usage: node github-activity.js <username> <1-100>");
  process.exit(1);
}

const username = args[0];
let number_of_activity;

if (args[1]) {
  if (!parseInt(args[1])) {
    console.log(`Usage: node github-activity.js <username> <1-100>`);
    process.exit(1);
  }

  number_of_activity = parseInt(args[1]);

  if (number_of_activity > 100 || number_of_activity < 1) {
    console.log(`Usage: node github-activity.js <username> <1-100>`);
    process.exit(1);
  }
} else {
  number_of_activity = 5;
}

// Make the api call.
async function run() {
  try {
    const response = await getActivity(username, number_of_activity);

    for (let activity of response) {
      let repository = activity["repo"]["name"];
      switch (activity.type) {
        case "PushEvent":
          console.log(
            `Pushed ${activity["payload"]["size"]} commits to ${repository}`
          );
          break;
        case "PublicEvent":
          if (activity["public"] === true) {
            console.log(`Changed ${repository} repository to public`);
          } else {
            console.log(`Changed ${repository} to private`);
          }
          break;
        case "IssueCommentEvent":
          console.log(
            `${
              activity.payload.action[0].toUpperCase() +
              activity.payload.action.slice(1)
            } an issue in ${repository}`
          );
          break;
        case "WatchEvent":
          console.log(`Starred ${repository}`);
          break;
        default:
          console.log(`Event type ${activity.type} not handled yet`);
          break;
      }
    }
  } catch (error) {
    console.log(
      "An error occured: Please verify username, URL, and ensure there is internet connection"
    );
    process.exit(2);
  }
}

run();
