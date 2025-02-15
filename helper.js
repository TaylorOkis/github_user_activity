export default async function getActivity(username) {
  const url = `https://api.github.com/users/${username}/events?per_page=10`;
  let options = {
    method: "GET",
  };

  const activity = await fetch(url, options);

  return await activity.json();
}
