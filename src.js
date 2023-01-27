import { functionToBeMocked, count } from "./real";

console.log("[src.js] loaded, count:", count);

export function test() {
  console.log("[src] test(), count:", count);
  return functionToBeMocked();
}
