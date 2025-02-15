export default async function getActivity(username, number_of_activity) {
  const url = `https://api.github.com/users/${username}/events?per_page=${number_of_activity}`;
  let options = {
    method: "GET",
  };

  const activity = await fetch(url, options);

  return await activity.json();
}
