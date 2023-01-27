/** @type {import("vite").UserConfig} */
export default {
  resolve: {
    alias: {
      "/real.js": "/mock",
    },
    // None of these seem to work:
    dedupe: [
      "/mock.js",
      "mock.js",
      "/mock",
      "mock",
      "/real.js",
      "real.js",
      "/real",
      "real",
    ],
  },
};
