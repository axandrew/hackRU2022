async function fetchUsers() {
  const response = await fetch(`/api/users`);
  const res = await response.json();
  return res;
}

async function fetchPins() {
  const response = await fetch("/api/pins");
  const res = await response.json();
  return res;
}

export { fetchUsers, fetchPins };
