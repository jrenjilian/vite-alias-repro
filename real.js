console.log("[real.js] loaded");

export let count = -1;

export function functionToBeMocked() {
  console.error("[real.js] test() SHOULD BE MOCKED");
}
