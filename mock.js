console.log("[mock.js] loaded");

export let count = 0;

export function setUpMock() {
  console.log("[mock.js] setUpMock()");
  count += 1;

  return count;
}

export function functionToBeMocked() {
  console.log("[mock.js] test(), count:", count);

  return count;
}
