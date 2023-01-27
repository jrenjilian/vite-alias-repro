import { count, setUpMock, functionToBeMocked as mockedFunction } from "./mock";
import { test } from "./src";

console.log("[main.js] loaded");

console.log("[main.js] pulling initial mock#count", count);
const initalCount = count;

console.log("[main.js] calling mock.js#setUpMock()");
const countAfterIncrement = setUpMock();

console.log("[main.js] calling src#test()");
const mockedFunctionShouldBeIncremented = test();

console.log("[main.js] directly calling mock#functionToBeMocked");
const directMockFunctionCallShouldBeIncremented = mockedFunction();

console.assert(
  mockedFunctionShouldBeIncremented ===
    directMockFunctionCallShouldBeIncremented,
  `[main.js] both direct mock call and implicit mock call should return the same count:
    ${mockedFunctionShouldBeIncremented} !== ${directMockFunctionCallShouldBeIncremented}`
);

document.querySelector("#app").innerHTML = `
  <h1>Mocked module duplicated</h1>

  <pre>${JSON.stringify(
    {
      initalCount,
      countAfterIncrement,
      mockedFunctionShouldBeIncremented,
      directMockFunctionCallShouldBeIncremented,
    },
    null,
    2
  )}</pre>
`;
